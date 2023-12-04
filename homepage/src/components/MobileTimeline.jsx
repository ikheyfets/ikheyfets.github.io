import React from "react";
import python from "./staticfiles/python.png";
import js from "./staticfiles/js.png";
import java from "./staticfiles/java.png";
import scala from "./staticfiles/scala.png";
import r from "./staticfiles/Rlogo.png";
import evil_incarnate from "./staticfiles/matlab.png";
import pytorch from "./staticfiles/pytorch.svg.png";
import skl from "./staticfiles/skl.png";
import keras from "./staticfiles/keras.svg.png";
import tf from "./staticfiles/tf.svg.png";
import pandas from "./staticfiles/pandas.png";
import numpy from "./staticfiles/numpy.png";
import seaborn from "./staticfiles/seaborn.png";

function MobileTimeline() {
    const timeline = 
    <div class="">
        <div class="text tile my-5 mx-3 px-2 py-2">
            <h4>Current Projects:</h4>
            <a href="https://github.com/unboredify">
                <div class="link">
                <p>Check out Unboredify</p>
                </div>
            </a>   
        </div>
        <div class="text tile my-5 mx-3 px-2 py-2">
        <h4>Tech Stack</h4>
        <table>
            <tr>
                <td colSpan="6">Software Development:</td>
            </tr>
            <tr> 
                <td><img src={python} alt="" class="icon"/></td>
                <td><img src={r} alt="" class="icon"/></td>
                <td><img src={scala} alt="" class="icon"/></td>
                <td><img src={java} alt="" class="icon"/></td>
                <td><img src={js} alt="" class="icon"/></td>
                <td><img src={evil_incarnate} alt="" class="icon"/></td>
            </tr>
            <tr>
                <td colSpan="6">Machine Learning:</td>
            </tr>
            <tr>
                <td><img src={pytorch} alt="" class="icon"/></td>
                <td><img src={skl} alt="" class="icon"/></td>
                <td><img src={tf} alt="" class="icon"/></td>
                <td><img src={keras} alt="" class="icon"/></td>
            </tr>
            <tr>
                <td colSpan="6">Data Science:</td>
            </tr>
            <tr>
                <td><img src={pandas} alt="" class="icon"/></td>
                <td><img src={numpy} alt="" class="icon"/></td>
                <td><img src={seaborn} alt="" class="icon"/></td>
            </tr>
        </table>
        </div>
    </div>
    return timeline
};

export default MobileTimeline;