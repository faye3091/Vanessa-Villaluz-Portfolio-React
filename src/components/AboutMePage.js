import React from "react";
import photo from "../assets/images/Vanessa.jpeg";

export default function AboutMe() {
    return (
        <div>
            <h3>About Me</h3>
            <div className="pix">
                <img className="image" src={photo} alt="Vanessa" />
            </div>
            <div>
                <p>
                Hi! I have been living in New Jersey since I moved from the Philippines after Highschool. I am currently studying at Rutgers for coding bootcamp. I am also working full time as a lead Data Processing of a 4 years of professional experience. Seeking a career change to a position involving Full Stack Developer. Driven self-starter and fast learner.
                </p>
            </div>
        </div>
    )
}