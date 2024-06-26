import React, { useEffect } from "react";
import {useState} from "react";

// React router
import { Link } from "react-router-dom";

// media
import logoUG from './../media/UG-logo-white.webp';
import radioIcon from './../media/icons/radio-icon.svg';
import postIcon from './../media/icons/post-icon.svg';
import disabilityIcon from './../media/icons/disability-icon.svg';
import menuIcon from './../media/icons/menu-icon.svg'
import enIcon from './../media/icons/en-icon.svg';

// backend database communication
import databaseCommunication from "./backend";

function Header() {
    const [headerData, setData] = useState(null);
    const [isBoxOpen, setBoxOpen] = useState(false);
    
    
    useEffect(() => {
      async function fetchData() {
        const result = await databaseCommunication("header");
        setData(result);
      }

      fetchData();
    }, [])

    if (!headerData) return null;



    const rightIcons =  [
      {name: "radioIcon", "path": radioIcon},
      {name: "postIcon", "path": postIcon},
      {name: "disabilityIcon", "path": disabilityIcon},
      {name: "enIcon", "path": enIcon},
    ];

    const handleButtonClick = () => {
        setBoxOpen(!isBoxOpen);
      };

    
    return (
    <div className="header">
        <div className="left-side">
            <Link className="logo" to={ headerData["UG-logo-link"] }>
                <img src={logoUG} alt="UG logo"/>
            </Link>
            <div className="header-elements">
                { headerData["header-inscryptions"].map(button => <Link className="header-button" to={ button["link"] } key={"header-button-" + button["name"]}>{ button["name"] }</Link>) }
            </div>
        </div>
        <div className="right-side">
            <div className="header-icons">
              { rightIcons.map(iconObject => 
                <Link className="right-header-icon" to={ headerData["icons-links"][iconObject["link"]] } key={"right-header-icon-" + iconObject["name"]}>
                  <img src={iconObject["path"]} alt={iconObject["name"]}/>
                </Link>) 
              }
            </div>
        </div>
        <div className="center-side">
            <button className="header-one-icon" onClick={handleButtonClick}><img src={menuIcon} alt="menuIcon"/></button>
            {isBoxOpen && (
                <div className="center-box">
                    <div className="center-header-icons">
                      { 
                        rightIcons.map(iconObject => 
                        <Link className="center-header-icon" to={ headerData["icons-links"][iconObject["link"]] } key={"center-header-icon-" + iconObject["name"]}>
                          <img src={iconObject["path"]} alt={iconObject["name"]}/>
                        </Link>) 
                      }
                    </div>
                    <div className="center-header-elements">
                    { 
                      headerData["header-inscryptions"].map(button => <Link className="center-header-button" to={ button["link"] } key={"center-header-button-" + button["name"]}>{ button["name"] }</Link>) 
                    }
                    </div>
                </div>
      )}
        </div>
    </div>
    )
}

export default Header