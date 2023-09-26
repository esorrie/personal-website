import React from 'react';
import './NavBar.css'

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="menu">
                <div className="navtitle text-custom_blue text-2xl font-semibold">Edward Sorrie</div>
            </div>
            <div className="menu navitem text-white">
                <div className="navitem font-base font-medium cursor-default hover:text-custom_blue"> Home </div>
                <div className="navitem font-base font-medium cursor-default hover:text-custom_blue"> About </div>
                <div className="navitem font-base font-medium cursor-default hover:text-custom_blue"> Portfolio </div>
                <div className="font-base font-medium cursor-default hover:text-custom_blue"> Contact Me </div>
            </div>
        </nav>
    );

}; 
export default Navbar;