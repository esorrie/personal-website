import React from 'react';
import './Portfolio.css'

const Portfolio = () => {

    {/* TODO = add description of projects to each section and fix the hover area below the cards */}
    return (
        <a id="portfolio_section">
            <div className="ml-136 mt-270">
                <div className="title "> portfolio </div>
                <div className="flex ">
                    <div className="gitImage"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                            <g clip-path="url(#clip0_10_230)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0199 0C10.7375 0 0 10.8167 0 24.1983C0 34.895 6.87988 43.9495 16.4241 47.1542C17.6174 47.3951 18.0545 46.6335 18.0545 45.9929C18.0545 45.4319 18.0151 43.509 18.0151 41.5055C11.3334 42.948 9.94198 38.6209 9.94198 38.6209C8.86818 35.8164 7.27715 35.0956 7.27715 35.0956C5.09022 33.6132 7.43645 33.6132 7.43645 33.6132C9.86233 33.7735 11.1353 36.0971 11.1353 36.0971C13.2824 39.7827 16.7422 38.7413 18.1341 38.1002C18.3328 36.5377 18.9695 35.456 19.6455 34.8552C14.3163 34.2942 8.70937 32.211 8.70937 22.9161C8.70937 20.2719 9.66321 18.1086 11.1746 16.4261C10.9361 15.8253 10.1008 13.3409 11.4135 10.0157C11.4135 10.0157 13.4417 9.3746 18.0146 12.4996C19.9725 11.9699 21.9916 11.7005 24.0199 11.6982C26.048 11.6982 28.1154 11.979 30.0246 12.4996C34.5981 9.3746 36.6262 10.0157 36.6262 10.0157C37.9389 13.3409 37.1031 15.8253 36.8646 16.4261C38.4158 18.1086 39.3303 20.2719 39.3303 22.9161C39.3303 32.211 33.7234 34.2539 28.3544 34.8552C29.2296 35.6163 29.9848 37.0583 29.9848 39.3421C29.9848 42.5871 29.9454 45.1915 29.9454 45.9924C29.9454 46.6335 30.383 47.3951 31.5758 47.1547C41.12 43.9491 47.9999 34.895 47.9999 24.1983C48.0392 10.8167 37.2624 0 24.0199 0Z" fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_10_230">
                                <rect width="48" height="48" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <a href="https://github.com/esorrie" target="_blank" className="gitLink uppercase"> My GitHub </a>
                </div>
                <div class="flex items-center ">
                    <div class="grid gap-14 grid-cols-4 ">
                        <div class="group relative cursor-pointer justify-center">
                            <div className='rounded-3xl'>
                                <img className="sectionHolder object-cover transition-transform duration-500 group-hover:rotate-3" src="https://res.cloudinary.com/practicaldev/image/fetch/s--HGPHjjIL--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1o81e4cmk8vbjna0bf7s.jpg" alt="" />
                            </div>
                            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                <h1 class="cardText uppercase"> frontend </h1>
                                <p class="mb-3 text-lg text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
                            </div>
                        </div>
                        <div class="group relative cursor-pointer justify-center">
                            <div className='rounded-3xl'>
                                <img className="sectionHolder object-cover transition-transform duration-500 group-hover:rotate-3" src="https://blog.tubikstudio.com/wp-content/uploads/2016/11/back-end-development-1.jpg" alt="" />
                            </div>
                            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                <h1 class="cardText uppercase"> backend </h1>
                                <p class="mb-3 text-lg text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
                            </div>
                        </div>
                        <div class="group relative cursor-pointer justify-center">
                            <div className='rounded-3xl'>
                                <img className="sectionHolder object-cover transition-transform duration-500 group-hover:rotate-3" src="https://assets.aboutamazon.com/dims4/default/6e85f6a/2147483647/strip/true/crop/2000x1126+0+0/resize/1320x743!/format/webp/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F98%2F39%2Fe7ca5d5e477bac7a49fb49110220%2Fpredictions-hero-01.jpg" alt="" />
                            </div>
                            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                <h1 class="cardText uppercase"> DevOps </h1>
                                <p class="mb-3 text-lg text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
                            </div>
                        </div>
                        <div class="group relative cursor-pointer justify-center">
                            <div className='rounded-3xl'>
                                <img className="sectionHolder object-cover transition-transform duration-500 group-hover:rotate-3" src="https://cdn.dribbble.com/userupload/9353283/file/original-c04d3c27600407f35d41ab8d9330eff7.jpg?resize=752x" alt="" />
                            </div>
                            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                <h1 class="cardText uppercase mb-9"> UI/UX Design </h1>
                                <p class="mb-3 text-lg text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </a>
        
    );
}; 
export default Portfolio;