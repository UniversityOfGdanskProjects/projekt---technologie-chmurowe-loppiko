import React, {useEffect, useState} from "react";

// React Router
import { Outlet, Link } from "react-router-dom";
import { useLocation , useParams} from "react-router-dom";

// backend database communication
import databaseCommunication from "./backend";


function NavBar()
{
    const { semesterId, subjectName } = useParams();
    const [subjectsData, setData] = useState(null);
    const currLocation = useLocation().pathname;
    
    useEffect(() => {
      async function fetchData() {
        const result = await databaseCommunication("subjects");
        setData(result);
      }

      fetchData();
    }, [])

    if (!subjectsData) return null;


    let newLocation = "";

    const countSemesters = Object.keys(subjectsData).length;

    if (currLocation === `/roadmap-enter/${(semesterId) ? semesterId : ""}${(subjectName) ? "/" + subjectName : ""}`) newLocation = "/roadmap-enter";


    const nextSem = () => {
        if (semesterId) {
            const res = parseInt(semesterId.split("-")[1]) + 1;
            if (res <= countSemesters) return `/roadmap-enter/semester-${res}`;
            else return currLocation;
        }
        else return currLocation;
    }


    return (
        <div className="nav-bar">
            <div className="nav-bar-left-side">
                { semesterId &&<Link to={ newLocation } className="previous-site-button"> {`Change semester`}</Link> }
                <Link to="/" className="main-page-button">Main page</Link>
            </div>
            <div className="nav-bar-right-side">
                {semesterId && <Link to={ nextSem() } className="next-site-button">Next semester</Link>}
            </div>
            <Outlet/>
        </div>
    );
}

export default NavBar;