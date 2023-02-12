import React, {useState} from "react";
import { validateEmail  } from "../utils/helpers";

export default function Contact() {
    const [contactName, setContactName] = useState("");
    const [contactEmail, setContactEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [contactMsg, setContactMsg] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === "contact-name") {
          setContactName(value);
        } else if (name === "contact-email") {
          setContactEmail(value);
        } else {
          setContactMsg(value);
        }
    };


    const handleFormSubmit = (e) => {
        e.preventDefault();
        if(!validateEmail(contactEmail)) {
          setErrorMessage('Email is invalid');
          return;
        }

        setContactName("");
        setContactEmail("");
        setContactMsg("");
        setErrorMessage("");
    };

    return (
        <div className="row justify-content-center text-center mt-4">
            <h3>Contact</h3>
            <form className="flex-row" onSubmit={handleFormSubmit}>
            <div className="form-group col-6">
              <label htmlFor="contact-name">Name: </label>
              <input
                className="form-control"
                type="text"
                id="contact-name"
                name="contact-name"
                value={contactName}
                required
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group col-6">
              <label htmlFor="contact-email">Email: </label>
              <input
                className="form-control"
                type="email"
                id="contact-email"
                name="contact-email"
                value={contactEmail}
                required
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group col-6">
              <label htmlFor="contact-msg">Message: </label>
              <textarea
                className="form-control"
                id="contact-msg"
                rows="5"
              ></textarea>
            </div>
            <div className="col-12">
              <button
                className="btn btn-primary mb-5"
                type="submit"
                onSubmit={handleFormSubmit}
              >
                Send an Email
              </button>
            </div>
          </form>
          {errorMessage && (
            <div>
              <p className="error-message">{errorMessage}</p>
            </div>
          )}
            </div>
        )
}