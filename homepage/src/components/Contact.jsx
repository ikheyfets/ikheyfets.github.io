import React from "react";
import gmail from "./staticfiles/gmail.png";
import linkedin from "./staticfiles/linkedin.png";
import github from "./staticfiles/github.png";
import cv from "./staticfiles/cv.png";
import pdf from "./staticfiles/cv.pdf"


function Contact() {
    const contact = 
    <div class="contact text d-flex d-flex justify-content-center">
        <div class="my-auto d-flex gap-2">
            <a href="mailto::i.a.kheyfets@gmail.com" target="_blank">
                <div class="d-flex gap-2 link">
                    <img src={gmail} class="icon" alt=""/>
                    <p>Email</p>
                </div>
            </a>
            <span class="break"> || </span>
            <a href="https://www.linkedin.com/in/ikheyfets/" target="_blank">
                <div class="d-flex gap-2 link">
                    <img src={linkedin} class="icon" alt="" id="linkedin"/>
                    <p>LinkedIn</p>
                </div>
            </a>
            <span class="break"> || </span>
            <a href="https://github.com/ikheyfets" target="_blank">
                <div class="d-flex gap-2 link">
                    <img src={github} class="icon" alt=""/>
                    <p>GitHub</p>
                </div>
            </a>
            <span class="break"> || </span>
            <a href={pdf} target="_blank">
                <div class="d-flex gap-2 link">
                    <img src={cv} class="icon" alt=""/>
                    <p>Resumé</p>
                </div>
            </a>
        </div>
    </div>
    return contact
}

export default Contact;