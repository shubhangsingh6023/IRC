import React from 'react';
import './heading.css';
import dots from './images/dots.jpg';
import kgplogo from './images/kgplogo.jpg';


export const Headingbar=()=>{
    return(
        <div>
         <div className="heading">
            <div className="imglogo">
            <img className="dots" src={dots} alt="logo"/>
            <img className="kgplogo" src={kgplogo} alt="logo"/>
            <div className="IRC">
            <span >Internation Relations Cell<br/><span className="IRC2">IIT Kharagpur</span></span>
            </div>
            </div>
            
            <div className="ul">
            <ul>
            <li><span className="universities">Universities</span></li>
            <li>My Applications</li>
            <li>Edit</li>
            <li>Logout</li>
            </ul>
            </div>
         </div>
        </div>
    )
}