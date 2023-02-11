import React from "react";
import ResumeDoc from "../assets/VanessaVillaluzResume.pdf";

const frontEndSkills = [
    "HTML",
    "CSS",
    "Bootstrap",
    "JavaScript",
    "jQuery",
    "AJAX",
    "React"
];

const backEndSkills = [
    "Node.js",
    "Express.js",
    "MySQL",
    "Mongoose ODM",
    "MongoDB",
];

export default function Resume() {
    return (
        <div className="flex-row">
            <div className="col-6">
                <h3>Resume</h3>
                <h4 className="resume">
                    Download Vanessa's {" "} <a href={ResumeDoc} download="VanessaVillaluzResume.pdf"> Resume
                    </a>
                </h4>
            </div>
            <div>
                <h5>Front-End Experience</h5>
                <ul className="experience">
                    {frontEndSkills.map((frontEndSkills, index) => (
                        <li className="experience" key={index}>
                            {frontEndSkills}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h5>Back-End Experience</h5>
                <ul className="experience">
                    {backEndSkills.map((backEndSkills, index) => (
                        <li className="experience" key={index}>
                            {backEndSkills}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}