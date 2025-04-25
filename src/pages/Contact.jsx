import React from "react";
import { Form } from "react-router-dom";

export const contactData =async({request})=>{
  try{
    const res = await request.formData();
    const data = Object.fromEntries(res);
    console.log(data);
    return null;
  }catch(error){
    console.log(error);
    
  }
}
const Contact = () => {
  return (
    <div className="section-contact">
      <div className="container1" style={{ paddingLeft: "75px" }}>
        <h2 className="section-common-heading">Contact us</h2>
        <p className="section-common-subheading">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.!
        </p>
      </div>

      <div className=" grid grid-col--two">
        <div className="contact-1">
          <Form action="/contact" method="POST">
            <div className="col-2">
              <div className="col-1">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter full name"
                  required
                  autoComplete="off"
                  autoFocus
                />
              </div>
              <div className="col-1">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Abc@gmail.com"
                  required
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="col-1">
              <label htmlFor="subject">Subject </label>
              <input
                type="text"
                name="subject"
                placeholder="title of your message"
                required
                autoComplete="off"
              />
            </div>
            <div className="col-1">
              <label htmlFor="message">Message </label>
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                placeholder="Enter your message"
                required
                autoComplete="off"
              ></textarea>
            </div>
            <div className="btn btn-submit">
              {/* <a href="index.html">Send message</a> */}
              <button type="submit">Send message</button>
            </div>
          </Form>
        </div>
        <div className="contact-2">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59507.69507678036!2d72.86293409655761!3d21.222688865549006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04ee8c2c34845%3A0x17961f91f6edb62c!2sKiran%20Hospital!5e0!3m2!1sen!2sin!4v1735290677746!5m2!1sen!2sin"
            width="550"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
