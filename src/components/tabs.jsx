import React, { useState } from 'react'
import './tabs.css'

function Tabs()  {

    const [toggleState, setToggleState] = useState(1);
    
    const toggleTab = (index) => {
        setToggleState(index);
        console.log(index);
    }

    return (
        <>        
            <div className="flex">
                <div className="card3 w-372">
                    <div className="cardHolder"></div>
                </div>
                <div className="">
                    <div className="card4 title"> About Me </div>
                    <div className="card5 body"> From designing elegant user interfaces using HTML, CSS, and JavaScript, to creating robust server systems with Node.js and databases like MySQL, I possess the skills to bring ambitious projects to life. My curiosity drives me to stay up to date with the latest industry trends and integrate cutting-edge tools and frameworks into my work.</div>  
                
                <div className="bloc-tabs">
                    <div className={toggleState === 1 ? "tabs cursor-default active-tabs" : "tabs cursor-default" } onClick={() => toggleTab(1)} > skills </div>
                    <div className={toggleState === 2 ? "tabs cursor-default active-tabs" : "tabs cursor-default" } onClick={() => toggleTab(2)} > education </div>
                    <div className={toggleState === 3 ? "tabs cursor-default active-tabs" : "tabs cursor-default" } onClick={() => toggleTab(3)} > experience </div>
                    <a href="https://1drv.ms/w/s!AsrSQj_iC3W5g1blTLW0n05iwYRl?e=k9ltRL" className="tabs cursor-pointer" > cv </a>
                </div>

                <div className="content-tabs w-552">
                    <div className={toggleState === 1 ? "content active-content" : "content" } >
                        <ul>
                            HTML <br />
                            CSS <br />
                            Tailwind CSS<br />
                            Node.js<br />
                            Docker<br />
                            PHP<br />
                            Laravel<br /> 
                            MySQL
                        </ul>
                    </div>
                    <div className={toggleState === 2 ? "content active-content" : "content" } >
                        Studied at King Edwards VI high school for mmy GCSE's and A-levels; <br/>
                        GCSE's; <br/>
                        I passed all 10 subjects achieving three 7's, two 6's, two 5's, three 4's, along with an optional 11th subject of Further Mathematics achieving a C. <br/>
                        A-levels; <br/> 
                        I achieved a B in Business Studies and C in both Mathematics and Physics. <br/> <br/>
                        I am currently a third year student at Newcastle University studying a BEng Hons in Electronic and Computer Engineering achieving a 2:1 in my second year.
                    </div>
                    <div className={toggleState === 3 ? "content active-content" : "content" } >
                        6 week internship at Woods&Walker
                    </div>
                </div>
                </div>
            </div>
        </>
    )
};
export default Tabs;