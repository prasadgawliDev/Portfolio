

import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Project from "./components/Project";

import "./App.css";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Preloader from "./components/Preloader";


export default function App() {
  return (



<motion.div className="app-wrapper"



        
        animate={{
          background: [
            "linear-gradient(135deg, #0a0f1f, #101935, #0b132b)",
            "linear-gradient(135deg, #0d1226, #132347, #0b132b)",
            "linear-gradient(135deg, #0a0f1f, #101935, #0b132b)"
          ]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      >
 <ToastContainer position="top-right" theme="light" />
 <Preloader/>
  <Navbar />
  <Hero />
  <About/>
  <Project />
 <Skills/>
 <Experience/>
 <Contact/>
  <Footer/>
 
</motion.div>

  );
}



// sessionStorage.removeItem("visited");
// location.reload();
