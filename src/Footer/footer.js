import React from "react";
import './footer.css'
import { Typography } from "@material-ui/core";
import footerback from '../img/footerback.png'

const Footer = () => {
    return(
        <div className="footer">
            <div className="section1">
                <Typography variant="h6">
                    team@webparam.org - 011 083 5479
                </Typography>
                <Typography variant="h4" className="buildtypo">
                    Build great solutions<br/> with 
                    great outcomes today !
                </Typography>
            </div>
            <div className="section2">
                <Typography variant="h4">
                    Company
                </Typography>
                <Typography>
                    Services
                </Typography>
                <Typography>
                    About Us
                </Typography>
            </div>
            <div className="section3">
                <Typography variant="h4">
                    Other
                </Typography>
                <Typography>
                    Developer Path
                </Typography>
                <Typography>
                    Blog & Community
                </Typography>
                <Typography>
                    (Coming soon)
                </Typography>
            </div>
        </div>
    )

}
export default Footer