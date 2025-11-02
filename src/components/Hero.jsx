import { motion } from "framer-motion";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-container" id="home">
      {/* <div className="gradient-bg"></div> */}

      <motion.div
        className="hero-content"
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 ,delay:0.3}}
      >
        <h1
           className="hero-title"
          initial={{ opacity: 0}}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
           I'm <span className="highlight">Prasad Gawli</span>.
        </h1>

        <p
          className="hero-subtitle"
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          // transition={{ delay: 0.4, duration: 1.2 }}
        >
        | Software Engineer  | Frontend Developer  | ReactJS

        </p>

        <div
          className="hero-buttons"
          // initial={{ opacity: 0}}
          // animate={{ opacity: 1 }}
          // transition={{ delay: 0.4, duration: 1 }}
        >
          <motion.a  href="/Prasad Gawli Resume.pdf"

          initial={{ opacity: 0,scale:0}}
          animate={{ opacity: 1 ,scale:1}}
          transition={{ delay: 0.4, duration: 0.5 }}

            download className="btn primary"> Download CV 
            
            </motion.a>

       

   
       

        </div>

          <motion.div className="site-links"
          

initial={{ opacity: 0,y:40}}
          animate={{ opacity: 1,y:0 }}
          transition={{ delay: 2.7, duration: 1 }}

          >
 <a href="https://www.linkedin.com/in/prasad-gawli/" target="_blank" rel="noopener noreferrer" >
        <img src='/linkedin.png' alt="linkedin" style={{height:"45px"}} />
      </a>

<a href="https://github.com/prasadgawliDev" target="_blank" rel="noopener noreferrer">
        <img src='/github.png' alt="github" style={{height:"50px"}} />
      </a>

      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=prasad.gawli.s@gmail.com" target="_blank" rel="noopener noreferrer">
        <img src='/email.png' alt="email" style={{height:"50px"}} />
      </a>
     </motion.div>
      </motion.div>
    </section>
  );
}
