import React, { useState, useEffect } from "react";

// media 
import mfiIcon from './../media/icons/mfi-icon.svg';
import facebookIcon from './../media/icons/facebook-icon.svg';

// backend database communication
import databaseCommunication from "./backend";

import { Link } from "react-router-dom";

function Footer() {
    const [footerData, setData] = useState(null);
    
    useEffect(() => {
      async function fetchData() {
        const result = await databaseCommunication("footer");
        setData(result);
      }

      fetchData();
    }, [])

    if (!footerData) return null;


    const informationAbout = footerData["information about"].map( (information ) => {
        return <Link to={information.link} key={`footer-information-about${information.inscription}`} className="footer-information-about-inscriptions-link">{information.inscription}</Link>
    });

    const informationFor = footerData["information for"].map( (information ) => {
        return <Link to={information.link} key={`footer-information-for-${information.inscription}`} className="footer-information-for-inscriptions-link">{information.inscription}</Link>
    })

    const other = footerData["other"].map( (information ) => {
        return <Link to={information.link} key={`footer-information-other${information.inscription}`} className="footer-other-inscriptions-link">{information.inscription}</Link>
    })

    return (
    <div className="footer">
        <div className="first-column">
                <button className="footer-icon"><img src={mfiIcon} alt="mfiIcon"/></button>
            <div className="faculty">
                <span>{footerData["faculty"]}</span>
            </div>
            <div className="adress-mail-telephone">
                <span>{footerData["address"]}</span>
                <span>{footerData["telephone"]}</span>
                <span>{footerData["mail"]}</span>
                <span>{footerData["reception"]}</span>
            </div>
            <div className="facebook">
                <div className="faculty-facebook">
                    <button className="faculty-facebook-icon"><img src={facebookIcon} alt="radioIcon"/></button>
                    <Link to={footerData["faculty facebook"]["link"]} className="footer-faculty-facebook-icon-link">
                        {footerData["faculty facebook"]["inscription"]}
                    </Link>
                </div>

                <div className="office-facebook">
                    <button className="office-facebook-icon"><img src={facebookIcon} alt="radioIcon"/></button>
                    <Link to={footerData["office facebook"]["link"]} className="footer-office-facebook-icon-link">
                        {footerData["office facebook"]["inscription"]}
                    </Link>
                </div>     
            </div>
        </div>
        <div className="information-about">
            <div className="information-about-inscription">Information about</div>
            <div className="information-about-inscriptions">{informationAbout}</div>
        </div>
        <div className="information-for">
            <div className="information-for-inscription">Information about</div>
            <div className="information-for-inscriptions">{informationFor}</div>
        </div>
        <div className="other">
            <div className="other-inscription">Other</div>
            <div className="other-inscriptions">{other}</div>
        </div>

    </div>
    );
}

export default Footer;