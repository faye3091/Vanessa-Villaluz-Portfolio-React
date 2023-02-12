import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    // const styles = {
    //     footerStyle: {
    //         position: "fixed",
    //     left: "0",
    //     bottom: "0",
    //     width: "100%",
    //     }
    // }

    return (
        <footer>
            <div className="footer row justify-content-center text-center">
                <div className="row col-3">
                    <div className="col">
                    <a href="https://github.com/faye3091" target="_blank"><img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Github"/></a>
                    </div>
                    <div className="col">
                        <a href="https://www.linkedin.com/in/vanessa-villaluz-599643112/" target="_blank"><img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn"/></a>
                    </div>
                    <div className="col">
                        <a href="mailto:faye_3091@yahoo.com"><img src="https://img.icons8.com/color/48/000000/filled-message.png"/></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}