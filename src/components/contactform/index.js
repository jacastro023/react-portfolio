// import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import 'font-awesome/css/font-awesome.min.css';
import "./style.css"

/* <form ref={form} onSubmit={sendEmail}>
        <Form.Group controlId="name">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            // value={state.name}
            placeholder="Enter your full name"
            // onChange={onInputChange}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            name="email"
            // value={state.email}
            placeholder="Enter your email"
            // onChange={onInputChange}
          />
        </Form.Group>
        <Form.Group controlId="subject">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            type="text"
            name="subject"
            // value={state.subject}
            placeholder="Enter subject"
            // onChange={onInputChange}
          />
        </Form.Group>
        <Form.Group controlId="subject">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            // value={state.message}
            rows="3"
            placeholder="Enter your message"
            // onChange={onInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>
    </div> */


const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jngd3wd', 'template_6k8opje', form.current, 'user_Wg6uB5ioDePTkUW1xXd7W')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
      <div className="contactform">
        <h1 className="contactme">Contact Me</h1>
        <p>Contact or leave a message</p>
        <div id="contact-container">
          <div className="contact-info">
            <h4>Contact Information</h4>
            <p className="sub-title">feel free to contact me</p>
            <div className="icon-text">
              <i className="fa fa-phone" aria-hidden="true"></i>
              <span>(773)947-4854</span>
            </div>
            <div className="icon-text">
              <i className="fa fa-envelope-o" aria-hidden="true"></i>
              <span>jacastro023@gmail.com</span>
            </div>
            <div className="icon-text">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <span>4518 S ST Louis</span>
            </div>
            <div className="social-media">
              <a href="https://www.linkedin.com/in/jose-castro-webdev/" className="icon-circle" target="_blank" rel="noreferrer">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
              <a href="https://github.com/jacastro023" className="icon-circle" target="_blank" rel="noreferrer">
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className="formdiv">
          <form ref={form} onSubmit={sendEmail}>
        <Form.Group controlId="name">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            // value={state.name}
            placeholder="Enter your full name"
            // onChange={onInputChange}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            name="email"
            // value={state.email}
            placeholder="Enter your email"
            // onChange={onInputChange}
          />
        </Form.Group>
        <Form.Group controlId="subject">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            type="text"
            name="subject"
            // value={state.subject}
            placeholder="Enter subject"
            // onChange={onInputChange}
          />
        </Form.Group>
        <Form.Group controlId="subject">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            // value={state.message}
            rows="3"
            placeholder="Enter your message"
            // onChange={onInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        </form>
        </div>
        </div>
      </div>
      );
};

      export default ContactForm;