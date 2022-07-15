import React,{useState} from "react";
import {Carousel,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Popup from "/home/usuario/my-webSite/client/src/components/Popup/Popup";
import images from "./images"
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';
import { SetMealOutlined } from "@mui/icons-material";

function Portafolio(){
    const [imagePopup,setImage] = useState(false);
    const [textInsidePop,setTextInside] = useState("");
    const[titleInsidePop,setTitleInside] =useState("");
    const[btnUrl,setBtnUrl] =useState("");
    function imageClick(event){
        setImage(true)
        
        if(event.target.id==="1"){
            let text = "This app is build using React and css for the frontend, and in the backend it uses node.js, express and MongoDB for the database, I also used"
            +" mongoose a library that creates a connection between MongoDB and the Express web application framework. To connect the frontend with the backend"
            + " I have used Axios. On this app you will have the opportunity to make all the notes that you want and not fotget them and also when you completed the task you can delete it";
            setTextInside(text);
            setTitleInside("Reminder");
            setBtnUrl("https://github.com/juls0012/reminderApp");
        }else if(event.target.id==="2"){
            let text = "This app is build using Embedded JavaScript templates,html and css for the frontend, and in the backend it uses node.js, express and MongoDB for the database."
            +" As we see on the app, we have to register in order to start submiting secrets, for that reason I implent Authentication, cookies and session using Passport.js"
            + " and finally using passport OAuth2.0, I implement registration and sign in, using google and facebook, of course if the user wants to register "
            +"withot using facebook or google, they can use the registration section of the web page, and they will be save in the database, salting and hashing their passwords.";
            
            setTextInside(text);
            setTitleInside("Secrets");
            setBtnUrl("https://github.com/juls0012/secrets");
        }else if(event.target.id==="3"){
            let text = "This app is build using Embedded JavaScript templates,html and css for the frontend, and in the backend it uses node.js, express and MongoDB for the database, I also used"
            +" mongoose a library that creates a connection between MongoDB and the Express web application framework. To connect the frontend with the backend"
            + " I have used Axios. This app has different types of functionality, you can compose a story, then will appear at home, where you will see a short piece of the content"
            +" ,then if you like it, you can hit the read more text to display in other window the complete story";
            setTextInside(text);
            setTitleInside("Daily Story");
            setBtnUrl("https://github.com/juls0012/dailyStoryApp")
        }
    }
    function closePop(state){
        setImage(false);
    }
    return(
        <div id="portafolioContainer"> 
        <section id = "portafolio">
        <h1 className="titleCarousel">Portafolio</h1>
        <Carousel>
                       
                        <Carousel.Item interval={5000}>
                           <img
                            id="1"
                            className=" imgCarousel"
                            src="/images/reminder.png"
                            alt="reminder"
                            onClick={imageClick}
                            />
                            <Carousel.Caption>
                            <h3>Reminder</h3>
                            <p className="g">An app where you can put all your daily tasks and not forget them </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img
                            id="2"
                            className=" imgCarousel"
                            src="/images/secrets.png"
                            alt="Second slide"
                            onClick={imageClick}
                            />

                            <Carousel.Caption>
                            <h3>Secrets</h3>
                            <p>An app where you can create an account and start to share secrets being anonymous.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img
                            id="3"
                            className=" imgCarousel"
                            src="/images/JournalHome.png"
                            alt="Third slide"
                            onClick={imageClick}
                            />

                            <Carousel.Caption>
                            <h3>Daily Story</h3>
                            <p>An app where you can share any story to the world, so everyone can see it and have a good time rediang.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
            </section>
            <Popup className="" trigger={imagePopup} onClose={closePop}>
                    <h1 id="titlePop">{titleInsidePop}</h1>
                    <hr/>
                    <p>{textInsidePop} </p>
                    <Button className="buttonPop" variant="outline-light" size="lg"><LanguageIcon className="iconPopBtn"/>WebSite</Button>{' '}
                    <form id="formBtnInsidePopup" action={btnUrl}>
                    <Button type="submit" className="buttonPop" variant="outline-light" size="lg"><GitHubIcon className="iconPopBtn"/> Repository</Button>{' '}
          
                    </form>
                    
            </Popup>
        </div>
    )
}

export default Portafolio;

