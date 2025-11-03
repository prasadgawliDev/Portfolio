import React, { useState } from "react";
import "./About.css";
import {motion} from 'framer-motion'



const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.section className="about-section" id="about"
    
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1}}



    
    >


      <div className="about-container">
        {/* Left Side - Image */}
        <div className="about-image-wrapper">
          <motion.img
            src="/Prasad.png"
            alt="Prasad"
            className={`about-image ${isLoaded ? "loaded" : "loading"}`}
            onLoad={() => setIsLoaded(true)}


             initial={{ opacity: 0,scale:0.1}}
          whileInView={{ opacity: 1,scale:1}}
          transition={{ duration: 0.2 }}
          />
        </div>

        {/* Right Side - About Text */}
        <div className="about-content">
          <motion.h2 className="about-title"
          
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1,y:0 }}
          transition={{ duration: 0.5 ,delay:0.5}}
          
          >About Me</motion.h2>



          <motion.p className="about-text"
          initial={{ opacity: 0,x:40}}
          whileInView={{ opacity: 1 ,x:0}}
          transition={{ duration: 0.5,delay:0.6 }}
          
          >
            Hi! I'm Prasad Gawli, a Software Engineer specializing in
            Frontend Development, with hands-on experience in React.js and other
            modern web technologies.
          
          
            I’m skilled in UI/UX design, performance optimization,
            and Agile methodologies, with a focus on building scalable,
            high-performance, and user-friendly applications.
          </motion.p>

          <motion.p
          
initial={{ opacity: 0,y:30}}
          whileInView={{ opacity: 1,y:0}}
          transition={{ duration: 0.6,delay:0.7 }}

          
          className="about-text">
            My approach blends clean code, thoughtful design, and efficient workflows to deliver
            seamless digital experiences that not only look great but perform beautifully across all
            platforms.
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
