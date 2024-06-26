import React, {useEffect, useState} from "react";
import { motion } from "framer-motion";

// React Router
import { Outlet, Link } from "react-router-dom";

// backend database communication
import databaseCommunication from "../../components/backend";


function MainSite() {
    const [mainSiteData, setData] = useState(null);
    
    useEffect(() => {
      async function fetchData() {
        const result = await databaseCommunication("mainSite");
        setData(result);
      }

      fetchData();
    }, [])

    if (!mainSiteData) return null;


    return (
    <div className="content">
        <div className="box">
            <div className="title">
                <span>{mainSiteData["fieldfOfStudy"]}</span>
            </div>
            <div className="subject-descrition">
                <span>{mainSiteData["subject-description"]}</span>
            </div>
            <div className="overview">
                <div className="content-header">Program Overview:</div>
                <span>{mainSiteData["program-overview"]}</span>
            </div>
            <div className="skills">
                <div className="content-header">Skills:</div>
                <div className="skill-button-box">
                    {mainSiteData["skills"].map(content => <button className="skill-button" key={`main-site-button-${content}`}>{content}</button>
                    )}
                </div>
                
            </div>
            <div className="career">
                <div className="content-header">Career Prospects:</div>
                <span>{mainSiteData["career-prospects"]}</span>
            </div>
            <motion.div
                className="content-button-box"
                whileHover={{ scale: 1.1 }}
                onHoverStart={e => {}}
                onHoverEnd={e => {}}
                >
                <Link to="roadmap-enter" className="roadmap-button">Roadmap of the subject</Link>
            </motion.div>
        </div>
        
        <Outlet />
    </div>
    );
}

export default MainSite;