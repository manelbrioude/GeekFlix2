import React, { useEffect, useState } from 'react';
import "./Nav.css"


function Nav({onOpen,findRandomMovie}) {
const [show, handleShow] = useState(false);

const transitionNavBar = () => {
    if (window.scrollY > 100){
        handleShow(true);
    }
    else {
        handleShow(false);
    }
}


const  openModal = (e) => {
    onOpen()
    findRandomMovie()
}

useEffect (() => {
    window.addEventListener("scroll",transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
},[])

    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <div className='nav_contents'>
            <img 
            className="nav_logo"
            src='geekflix.png' 
            alt='GeekFlixLogo'
            />

            <div className='banner_buttons'>
                <button className='banner_button' onClick={(e)=>openModal()}>Find Random Movie</button>
            </div>      
            {/* <img
            className='nav_avatar' 
            src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' 
            alt='NetflixAvatar'
            /> */}
            </div>
            
            
        </div>
    );
}

export default Nav;