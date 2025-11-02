import React,{useState} from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import { toast } from 'react-toastify';
import Footer from "./Footer";

const Contact = () => {
 

     const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      //Web3Forms Access Key 
        formData.append("access_key", "d9b24ee9-bafc-4c8f-a9e1-4a72cd17dfaf");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("");
        toast.success("Form Submitted Successfully")
        event.target.reset();
      } else {
        console.log("Error", data);
        toast.error(data.message)
        setResult("");
      }
    };


  const handleSubmit = (e) => {
    e.preventDefault(); // stop form refresh
        // go to home route
  };


const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};


  return (

    
    <motion.section className="contact-section" id="contact"

       initial={{ opacity: 0}}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1}}
>

      <div className="contact-container">
        {/* Left Side */}
        <motion.div
          // initial={{ opacity: 0, y: 30 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // transition={{ duration: 1 }}
          className="contact-info"
        >
          <motion.h2
          
          initial={{ opacity: 0,x:-30}}
          whileInView={{ opacity: 1 ,x:0}}
          transition={{ duration: 0.4,delay:0.3 }}
          
          >Let’s <span>Connect</span></motion.h2>


          <motion.p
          
          initial={{ opacity: 0,x:-30}}
          whileInView={{ opacity: 1 ,x:0}}
          transition={{ duration: 0.6,delay:0.6 }}
          >


            I’m currently looking for new opportunities - my inbox is always
            open. Whether you have a question or just want to say hi, I’ll try
            my best to get back to you!
          </motion.p>
        </motion.div>




        {/* Right Side */}
        

<form onSubmit={onSubmit} className="contact-form">

     <motion.div
          initial={{ opacity: 0,x:30}}
          whileInView={{ opacity: 1 ,x:0}}
          transition={{ duration: 0.2,delay:0.3 }}
            className="form-group"
          >
            <label htmlFor="subject">Your Name</label>
            <input
              type="text"
              id="name"
              name="Name"
              placeholder="Your Name..."
              required
            />
          </motion.div>

          <motion.div
           initial={{ opacity: 0,x:30}}
          whileInView={{ opacity: 1 ,x:0}}
          transition={{ duration: 0.4,delay:0.6 }}
            className="form-group"
          >
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              required
            />
          </motion.div>

     

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4,delay:0.8}}
            className="form-group"
          >
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Let’s talk about..."
              required
            ></textarea>
          </motion.div>

<div className="center-btn" style={{display:"flex",justifyContent:"center"}}>
          <motion.button
            type="submit" 
            initial={{ opacity: 0,scale:0.6}}
          whileInView={{ opacity: 1,scale:1}}
          transition={{ duration: 0.2, delay:1.1}}
            className="send-btn"
            // onClick={() => { document.querySelector(".contact-form").reset(); scrollToSection("home"); }}

          >
            {result ? result : "Send Message"}
          </motion.button>
          </div>
        </form>
      </div>
     
    </motion.section>
    
  );
};

export default Contact;
