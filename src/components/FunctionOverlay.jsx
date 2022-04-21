import {Card,Button,OverlayTrigger,Tooltip} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Overlay(props){


    return(
        <OverlayTrigger
                    key={'top'}
                    placement={'top'}
                    overlay={
                        <Tooltip id={`tooltip-${'top'}`}>
                        {props.info}
                        </Tooltip>
                    }
                    >
                    <img className="imgIcon" alt="imgIcon" src={props.img}/>
                </OverlayTrigger>

    )
}

export default Overlay;