import React, { useState } from 'react'
import './tabs.css'

function Tabs()  {

    const expand = () => {
        const dropdown2 = document.querySelector(".dropdown2");
        const blocTabs = document.querySelector(".bloc-tabs");

        dropdown2.addEventListener("click", () => {
            console.log("Dropdown clicked"); 
            dropdown2.classList.toggle("active");
            blocTabs.classList.toggle("active");
        })
    };
    
    const [toggleState, setToggleState] = useState(1);
    
    const toggleTab = (index) => {
        setToggleState(index);
        console.log(index);
    }

    return (
        <>        
            <div className="">
                <div className="text-center">
                    <div className="card4 title"> About Me </div>
                    <div className="px-18.9% card5 body"> From designing elegant user interfaces using HTML, CSS, and JavaScript, to creating robust server systems with Node.js and databases like MySQL, I possess the skills to bring ambitious projects to life. My curiosity drives me to stay up to date with the latest industry trends and integrate cutting-edge tools and frameworks into my work.</div>  
                </div>
            </div>
                <div className="bloc-tabs flex-wrap ml-30%">
                    <div className={toggleState === 1 ? "tabs cursor-default active-tabs" : "tabs cursor-default" } onClick={() => toggleTab(1)} > skills </div>
                    <div className={toggleState === 2 ? "tabs cursor-default active-tabs" : "tabs cursor-default" } onClick={() => toggleTab(2)} > education </div>
                    <div className={toggleState === 3 ? "tabs cursor-default active-tabs" : "tabs cursor-default" } onClick={() => toggleTab(3)} > experience </div>
                    <a href="https://www.overleaf.com/read/nnypfvcswpnq#654d56" target="_blank" className="CVtabs cursor-pointer" > cv </a>
                </div>
            <div className="dropdown2" onClick={expand}>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </div>

                <div className="content-tabs mx-22.5%">
                    <div className={toggleState === 1 ? "content active-content" : "content" } >
                        <ul>
                            <div className=""> HTML </div>
                            <div className=""> CSS </div> 
                            <div className=""> Tailwind CSS </div> 
                            <div className=""> React.js </div>
                            <div className=""> Node.js </div>
                            <div className=""> Docker </div>
                            <div className=""> PHP </div> {/* Used for my EdScore website */}
                            <div className=""> Laravel </div>
                            <div className=""> MySQL </div>
                            <div className=""> Figma </div>
                            <div className=""> Python </div> {/* Used for my hybrid encryption project */}
                            <div className=""> Flask </div>
                            <div className=""> MongoDB </div>
                        </ul>
                    </div>
                    <div className={toggleState === 2 ? "content active-content text-center" : "content" } >
                        I recently completed my Bachelor of Engineering with Honours in Electronic and Computer Engineering at Newcastle University, graduating with an Upper Second-Class degree (2:1) <br/> <br/>
                        Studied at King Edwards VI high school for my GCSE's and A-levels; <br/>
                        A-levels;
                        I achieved a B in Business Studies and C in both Mathematics and Physics. <br/>
                        GCSE's; <br/>
                        I passed all 10 subjects achieving three 7's, two 6's, two 5's, three 4's, along with an optional 11th subject of Further Mathematics achieving a C. <br/>
                    </div>
                    <div className={toggleState === 3 ? "content active-content text-center" : "content" } >
                        8 week internship at Woods&Walker; <br/>
                        During my internship I learned the basics of PHP, Laravel, Docker, MySQL and Tailwind CSS from Laracasts, Laravel 8 from scratch videos and then proceeded to build on the basics by developing my own website that was designed by the companies UI designer. I used a free football API to call league, team, player and manager data to fill the relative database tables. I was able to do this by creating a custom PHP artisan command that can be run in the terminal to update information (at the end I auto ran the command every minute as this was when my API calls were reset). My plan for this website is to host it on AWS using Elastic Container Services. Along with brief QA testing on a product that was nearing release. 
                    </div>
                </div>
        </>
    )
};
export default Tabs;