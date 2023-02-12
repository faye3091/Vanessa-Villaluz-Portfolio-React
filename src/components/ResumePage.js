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
        <div className="flex-row mt-4">
            <div className="row justify-content-center">
                <h3 className="row resume-title">Resume</h3>
                <h4 className="resume row">
                    Download Vanessa's {" "} <a href={ResumeDoc} download="VanessaVillaluzResume.pdf" className="row justify-content-center"> Resume
                    </a>
                </h4>
            </div>
            <div>
                <h5 className="row justify-content-center mt-3">Front-End Experience</h5>
                <ul className="experience">
                    {frontEndSkills.map((frontEndSkills, index) => (
                        <li className="experience" key={index}>
                            {frontEndSkills}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h5 className="row justify-content-center mt-3">Back-End Experience</h5>
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