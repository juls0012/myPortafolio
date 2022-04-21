import React from "react"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import {Link}  from 'react-router-dom';
import { Button } from "@mui/material";


function Contact(){
    let year = new Date().getFullYear();

    function linkMedia(event){
        console.log(event);
        if(event.target.id ==="1"){
            
        }else if(event.target.id ==="2"){

        }else if(event.target.id ==="3"){

        };
    }

    return(
        <section id="contact">
                <footer id="footer">
                    
                    <a href="https://www.linkedin.com/in/julian-fuentes-50282b206/" > 
                        <LinkedInIcon className="icon-footer" onClick={linkMedia} id="1" /> 
                    </a>
                    <a href="https://github.com/juls0012" > 
                        <GitHubIcon className="icon-footer" onClick={linkMedia} id="2"/>
                    </a>
                    <form id="formIconEmail" action="mailto:a335855@uach.mx" method="get" enctype="text/plain">
                        <button type="submit"><EmailIcon className="icon-footer" onClick={linkMedia} id="3"/></button> 
                    </form>

                
                <p>© {year} Copyright Julian Fuentes</p>
                
            </footer>

        </section>
        
    )

}

export default Contact;