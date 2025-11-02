import { motion } from "framer-motion";
import "./Projects.css";
import { useEffect } from "react";

const projects = [


  {
    title: "Tourify",
    description: "Tourify brings travel inspiration to life, browse trips, explore destinations, and plan your next adventure.",
    image: "/Tourify.jpg",
    link: "https://prasad-tourify.netlify.app/",
    github:"https://github.com/prasadgawliDev/Tourify"
  },

  {
    title: "EduPath",
    description: "EduPath is a responsive university website designed to showcase academic programs and student services.",
    image: "/Edu.jpg",
    link: "https://prasadedupath.netlify.app/",
    github:"https://github.com/prasadgawliDev/EduPath"
    
  },

  {
    title: "Luxora",
    description: "Modern React.js E-Commerce Application with authentication, cart system, and checkout flow.",
    image: "/Luxora.jpg",
    link: "https://prasad-luxora.netlify.app/",
    github:"https://github.com/prasadgawliDev/Luxora"
  },
  {
    title: "Real Estate",
    description: "A sleek single-page real estate app for browsing and showcasing premium properties.",
    image: "/estate.jpg",
    link: "https://prasad-estate.netlify.app/",
    github:"https://github.com/prasadgawliDev/Estate"
    
  },
  
  
];










export default function Project() {






    useEffect(() => {
    
    if (typeof window === "undefined") return;

    const cards = document.querySelectorAll(".project-card");
    if (!cards.length) return;

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add("show-shimmer");
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach(c => io.observe(c));

    // Cleanup (important for React Strict Mode in dev)
    return () => io.disconnect();
  }, []);












  return (
    <section id="projects" className="projects-section">
      <motion.h2
        className="projects-title"

         initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1,y:0 }}
          transition={{ duration: 0.5 ,delay:0.5}}
      >
       Personal <span>Projects</span>
      </motion.h2>


<motion.p

initial={{ opacity: 0,}}
          whileInView={{ opacity: 1}}
          transition={{ duration: 0.7 ,delay:0.5}}
style={{letterSpacing:"0.5px",lineHeight:"25px"}}
>
  Welcome to my web development portfolio!  Explore a collection of projects showcasing 
  <br/>my expertise in front-end development. 
</motion.p>



    <div className="projects-grid"
    
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      // whileHover={{ y: -8 }}
      transition={{ delay:0.9,duration: 0.6 }}
    
    >
  {projects.map((p, i) => (
    <motion.div
      key={i}
      className="project-card"

      
whileHover={{ scale:1.04 }}
transition={{duration:0.3}}
    
    >
      {/* Image → Live Site */}
      <motion.a href={p.link} target="_blank" rel="noopener noreferrer"
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      >
        <img src={p.image} alt={p.title} />
      </motion.a>

      {/* Info Section */}
      <div className="project-info">
        <h3>{p.title}</h3>
        <span>{p.description}</span>



<div className="project-links">

 <a
    href={p.github}
    className="github-link"
    target="_blank"
    rel="noopener noreferrer"
  >
    Source Code
  </a>

  <a
    href={p.link}
    className="live-link"
    target="_blank"
    rel="noopener noreferrer"
  >
    Live
  </a>

 
</div>

      </div>
    </motion.div>
  ))}
</div>

    </section>
  );
}
