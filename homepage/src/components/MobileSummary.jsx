import React from "react";
import about from "./staticfiles/about-photo.png";


function MobileSummary() {
    const summary =
    <div>
        <div class="mobile-summary">
            <div class="container text">
                <h1 class="row justify-content-center mt-5 mb-5">Hi, I'm Igor!</h1>
                <div class="row justify-content-center mt-5 mb-5">
                <img class="portrait px-0" src={about} alt=""/>
                <p class="row text-center mt-5 mb-5">Chemical Engineer turned Computer Scientist, I am a Machine Learning Engineer with a passion for building exciting products, both for work and in my spare time. Having started my career in dynamic startup environments, I enjoy solving complex problems and leveraging cutting-edge technologies to drive innovation and deliver impactful solutions. I'm also an avid traveler, skier and photographer.</p>
                </div>
                
            </div>
        </div>
        
    </div>
    return summary
};

export default MobileSummary;