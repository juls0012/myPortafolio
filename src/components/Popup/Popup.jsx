import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function Popup(props) {

  function btnClose(){
    props.onClose(false)
  }

  return (props.trigger)?(
    <div className='popup'>
        <div className='insidePopup'>
            {props.children}
        </div>
        <button className='close-btn' onClick={btnClose}> <FontAwesomeIcon id = "iconDelete" icon={faXmark} /> </button>
    
    </div>
  ) : "";
}

export default Popup

