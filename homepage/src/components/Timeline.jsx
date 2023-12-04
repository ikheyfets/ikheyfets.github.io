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


function Timeline() {
    const timeline = 
    <div class="timeline text">
        <div class="container h-100 d-flex">
            <div class="d-flex gap-5 d-flex justify-content-sm-center">
                <div class="lead current">
                    <h3>Current Projects</h3>
                    <div>
                        <a href="https://github.com/unboredify">
                            <div class="link">
                            <p>Check out Unboredify</p>
                            </div>
                            
                        </a>
                    </div>
                </div>
                <div class="lead">
                    <h3>Tech Stack</h3>
                    <table>
                        <tr>
                            <td>Software Development:</td>    
                            <td><img src={python} alt="" class="icon"/></td>
                            <td><img src={r} alt="" class="icon"/></td>
                            <td><img src={scala} alt="" class="icon"/></td>
                            <td><img src={java} alt="" class="icon"/></td>
                            <td><img src={js} alt="" class="icon"/></td>
                            <td><img src={evil_incarnate} alt="" class="icon"/></td>
                        </tr>
                        <tr>
                            <td>Machine Learning:</td>
                            <td><img src={pytorch} alt="" class="icon"/></td>
                            <td><img src={skl} alt="" class="icon"/></td>
                            <td><img src={tf} alt="" class="icon"/></td>
                            <td><img src={keras} alt="" class="icon"/></td>
                        </tr>
                        <tr>
                            <td>Data Science:</td>
                            <td><img src={pandas} alt="" class="icon"/></td>
                            <td><img src={numpy} alt="" class="icon"/></td>
                            <td><img src={seaborn} alt="" class="icon"/></td>
                        </tr>
                    </table>


                </div>
            </div>
        </div>
    </div>
    return timeline;
}

export default Timeline;