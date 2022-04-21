import React from "react";
import {Navbar,Nav,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CodeIcon from '@mui/icons-material/Code';


function Home(){

    return(
        <div id="homeContainer">
            <section id="home">
            <Navbar bg="dark" variant="dark" expand="lg" id="topNav" >
                <Container id ="container">
                    <Navbar.Brand id="navbarLogo" href="#home"><CodeIcon id="icon"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" id = "toggleNav"/>
                    <Navbar.Collapse id="basic-navbar-nav " className="justify-content-center navbarC">
                        <Nav className="itemsNav">
                            <Nav.Link className="item" href="#home">Home</Nav.Link>
                            <Nav.Link className="item"  href="#about">About</Nav.Link>
                            <Nav.Link className="item"  href="#about">Skills</Nav.Link>
                            <Nav.Link className="item"  href="#portafolio">Portafolio</Nav.Link>
                            <Nav.Link className="item"  href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            </section>

            <section id="infoContainer">
                <div className="infoDiv">
                    <h4 className="infoDiv">Hi, I am Julian Fuentes</h4>
                    <h1 id="types" className="infoDiv">Full stack developer & Software engineer</h1>
                    <p id="pharase" className="infoDiv">I Create And Code Web Sites, And Learn More Each Day</p>
                    

                </div>
                <img className="circle-img" alt="img" src = "https://static.vecteezy.com/system/resources/previews/004/607/791/large_2x/man-face-emotive-icon-smiling-male-character-in-blue-shirt-flat-illustration-isolated-on-white-happy-human-psychological-portrait-positive-emotions-user-avatar-for-app-web-design-vector.jpg"/>

            </section>

        </div>
    )
}




export default Home;

// <Navbar bg="dark" variant="dark" id="navbarHome" className="justify-content-between ">
//                 <Container id="parent">
//                     <Navbar.Brand id="brand" href="#home"><CodeIcon /></Navbar.Brand>
//                     <Nav id = "navHome" className="me-auto">
              
//                     <Nav.Link className="item" href="#home">Home</Nav.Link>
//                     <Nav.Link className="item"  href="#about">About</Nav.Link>
//                     <Nav.Link className="item"  href="#pricing">Skills</Nav.Link>
//                     <Nav.Link className="item"  href="#portafolio">Portafolio</Nav.Link>
//                     <Nav.Link className="item"  href="#pricing">Contact</Nav.Link>
                    
                 
//                     </Nav>
//                 </Container>
//             </Navbar>