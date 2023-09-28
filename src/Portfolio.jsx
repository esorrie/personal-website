import React from 'react';
import './Portfolio.css'

const Portfolio = () => {

    return (
        <a id="portfolio_section">
            <div className="ml-136 mt-270">
                <div className="title "> portfolio </div>
                <div className="text-white font-semibold text-2xl font"> Frontend + Backend Web Development and API Integration </div>
            </div>
            <div className="grid grid-cols-2">
                <div className="ml-136 ">
                    <div className="mt-16 text-white text-3xl font-bold"> <span className="text-orange-600"> Eds</span>Score </div>
                    <div className="mt-3 text-custom_blue font-semibold text-xl"> Overview </div>
                    <div className="mt-3 text-l text-white w-96 ">A small website that  pulls football data from a free football API for multiple leagues with live updates of scores and match data. </div>
                    <div className="mt-3 text-custom_blue font-semibold text-xl"> Created Using </div>
                    <div className="mt-3 text-l text-white w-96"> Laravel, Tailwind CSS, football-data API </div>
                    <button className="mt-3 bg-custom_blue rounded-lg px-4 py-1 text-xs font-semibold text-white"> 
                        <a href="https://github.com/esorrie/EdSCore" > View Code </a> 
                    </button>
                </div>
                <div className="mt-16 mr-136 rounded-lg">
                    <img className="rounded-xl" src="https://i.ibb.co/fX1pPHV/Screenshot-2023-09-28-at-16-21-50.png" target="_blank" alt="Screenshot-2023-09-28-at-16-21-50" border="0" />
                </div>
            </div>
        </a>
        
    );
}; 
export default Portfolio;