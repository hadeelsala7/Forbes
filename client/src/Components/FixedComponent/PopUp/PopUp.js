import React from "react";
import './popup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {faWindowClose } from '@fortawesome/free-solid-svg-icons';

function Popup(props){  
    return (  
        <div className='popup'>  
           <h1>Forbes</h1>
        <div className='inner'> 
              <div className="content">
                  <input
                  placeholder="Search">
                  </input>
                  <hr></hr>
                  <FontAwesomeIcon className="icon" icon= {faArrowRight} />

             </div>
                 
           
        </div>  
        <FontAwesomeIcon className="icon" icon= {faWindowClose} onClick={props.closePopup}/>

    </div>   
        );  
    }  
     

export default Popup;