import React from 'react';
import './NavBar.css'

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="menu">
                <div className="navtitle text-custom_blue text-2xl font-semibold">Edward Sorrie</div>
            </div>
            {/* TODO = fix scroll on navbar links */}
            <div className="menu navitem text-white">
                <a href="#about_section" className="navitem font-base font-medium cursor-default hover:text-custom_blue scroll-smooth"> About </a>
                <a href="#portfolio_section" className="navitem font-base font-medium cursor-default hover:text-custom_blue scroll-smooth"> Portfolio </a>
                <a href="#contact_section" className="font-base font-medium cursor-default hover:text-custom_blue scroll-smooth"> Contact Me </a>
            </div>
        </nav>
    );

}; 
export default Navbar;