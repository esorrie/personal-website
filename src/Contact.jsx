import React from 'react'
import './Contact.css'

const Contact = () => {

    return (
        <div className="">
            <div className="contactTitle"> Contact Me </div>
            <div className="flex">
                <div className="mailIcon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="24" viewBox="0 0 34 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M30.7699 0C31.785 0 32.6864 0.439756 33.2537 1.11995L16.7803 13.6051L0.453718 1.34667C0.999603 0.53906 1.98417 0 3.10807 0H30.7699ZM0 20.7837V3.56211L11.7148 12.3579L0.024149 21.1355C0.00821407 21.0202 0 20.9028 0 20.7837ZM1.07139 22.9053C1.61685 23.3333 2.32898 23.5923 3.10807 23.5923H30.7699C31.4395 23.5923 32.0597 23.4009 32.5671 23.0754L20.1188 13.6408L17.8802 15.3374C17.2471 15.8173 16.3248 15.8192 15.6892 15.342L13.4169 13.6359L1.07139 22.9053ZM21.8116 12.3579L33.793 21.4386C33.8485 21.2285 33.8779 21.0092 33.8779 20.7837V3.21277L21.8116 12.3579Z" fill="white"/>
                    </svg>
                </div>
                    <div className="mail"> ed_sorrie@hotmail.co.uk </div>
            </div>
            <div className="flex">
                <div className="profileIcon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                        <g clip-path="url(#clip0_10_228)">
                            <path d="M32.4092 0H2.58398C1.15527 0 0 1.12793 0 2.52246V32.4707C0 33.8652 1.15527 35 2.58398 35H32.4092C33.8379 35 35 33.8652 35 32.4775V2.52246C35 1.12793 33.8379 0 32.4092 0ZM10.3838 29.8252H5.18848V13.1182H10.3838V29.8252ZM7.78613 10.8418C6.11816 10.8418 4.77148 9.49512 4.77148 7.83398C4.77148 6.17285 6.11816 4.82617 7.78613 4.82617C9.44727 4.82617 10.7939 6.17285 10.7939 7.83398C10.7939 9.48828 9.44727 10.8418 7.78613 10.8418ZM29.8252 29.8252H24.6367V21.7041C24.6367 19.7695 24.6025 17.2744 21.9365 17.2744C19.2363 17.2744 18.8262 19.3867 18.8262 21.5674V29.8252H13.6445V13.1182H18.6211V15.4014H18.6895C19.3799 14.0889 21.0752 12.7012 23.5977 12.7012C28.8545 12.7012 29.8252 16.1602 29.8252 20.6582V29.8252Z" fill="white"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_10_228">
                            <rect width="35" height="35" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <a className="profile" href="https://www.linkedin.com/in/edward-sorrie-663705230/" target="_blank"> my linkedin </a><br/>
            </div>
                    
        </div>

    );

}; export default Contact;
