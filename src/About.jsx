import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="grid grid-cols-2">
            <div className="card3">
                <div className="cardHolder"></div>
            </div>
            <div className="">
                <div className="card4 title"> About Me </div>
                <div className="card5 body"> From designing elegant user interfaces using HTML, CSS, and JavaScript, to creating robust server systems with Node.js and databases like MySQL, I possess the skills to bring ambitious projects to life. My curiosity drives me to stay up to date with the latest industry trends and integrate cutting-edge tools and frameworks into my work.</div>
                <div className="card6 flex flex-wrap align-items-center uppercase text-white mt-5">
                    <div className="mr-75"> skills </div>
                    <div className="mr-75"> experience </div>
                    <div className="mr-75"> education </div>
                    <div className=""> cv </div>
                </div>
            </div>
        </div>
    );
};
export default About;