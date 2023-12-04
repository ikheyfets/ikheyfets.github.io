import React from "react";
import about from "./staticfiles/about-photo.png";

function Summary() {
  const summary = 
  <div class="summary">
    <div class="container h-100 d-flex align-items-center">
      <div class="d-flex gap-5 d-sm-flex justify-content-sm-center">
        <img class="portrait" src={about} alt=""/>
        <div class="container text align-items-center">
          <h1 class="row justify-content-center">Hi, I'm Igor!</h1>
          <p class="row align-items-center h-75 lead mb-4 text-wrap text-break">
            Chemical Engineer turned Computer Scientist, I am a Machine Learning Engineer with a passion for building exciting products, both for work and in my spare time. Having started my career in dynamic startup environments, I enjoy solving complex problems and leveraging cutting-edge technologies to drive innovation and deliver impactful solutions. I'm also an avid traveler, skier and photographer. 
          </p>
        </div>
      </div>
    </div>
  </div>

  return summary;
}

export default Summary;