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
                    <div className={toggleState === 1 ? "tabs active-tabs" : "tabs" } onClick={() => toggleTab(1)} > skills </div>
                    <div className={toggleState === 2 ? "tabs active-tabs" : "tabs" } onClick={() => toggleTab(2)} > education </div>
                    <div className={toggleState === 3 ? "tabs active-tabs" : "tabs" } onClick={() => toggleTab(3)} > experience </div>
                    <div className="tabs" > cv </div>
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
                    Third year student at Newcastle University studying a BEng Hons in Electronic and Computer Engineering
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