import React from 'react'
import './NavBar.css'



const Navbar = () => {

    const scrollToAbout = () => {
        const contactSection = document.getElementById('about_section');
        
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToPortfolio = () => {
        const contactSection = document.getElementById('portfolio_section');
        
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    const scrollToContact = () => {
        const contactSection = document.getElementById('contact_section');
        
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <nav className="nav">
            <div className="menu">
                <div className="navtitle text-custom_blue text-2xl font-semibold">Edward Sorrie</div>
            </div>
            {/* TODO = fix scroll on navbar links */}
            <div className="navmenu text-white">
                <a href="#" className="navitem font-base font-medium cursor-default hover:text-custom_blue" onClick={scrollToAbout} > About </a>
                <a href="#" className="navitem font-base font-medium cursor-default hover:text-custom_blue" onClick={scrollToPortfolio} > Portfolio </a>
                <a href="#" className="font-base font-medium cursor-default hover:text-custom_blue" onClick={scrollToContact} > Contact Me </a>
            </div>
            <div className="dropdown" >
                <span className='bar'> </span>
                <span className='bar'> </span>
                <span className='bar'> </span>
            </div>
        </nav>
    );

}; 
export default Navbar;