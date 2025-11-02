import './Experience.css'
import { motion } from "framer-motion";


export default function Experience() {
  const items = [
    {
      role: "Software Engineer",
      dates: "Dec 2024 - Present",
      company: "Company : TRRev",
      bullets: [
        "Designed a responsive website for a training institute using ReactJS, emphasizing usercentric design and ensuring seamless accessibility across mobile devices.",
        "Developed secure user authentication using JWT & bcrypt in Node.js/Express, reducing unauthorized access incidents by 100% and strengthening application security.",
        "Implemented reusable custom React hooks to standardize API fetching, error handling, and local state management resulting in a 40% reduction in repetitive component logic and significantly improved maintainability.",
        "Mentored 2 junior developers, enhancing team productivity and accelerating feature delivery."
      ]
    },
    {
      role: "Software Engineer",
      dates: "May 2024",
      company: "Company : Blacksoil",
      bullets: [
        "Optimized a Credit Assessment Dashboard using route-based code splitting and lazy loading, reducing load time by 45% and improving user efficiency.",
        "Designed MongoDB schemas and optimized queries, reducing database response time, ensuring scalability for growing datasets",
        "Collaborated with cross-functional teams to refine UI workflows for credit assessment, improving analyst efficiency by 25%."
      ]
    },
    {
      role: "Senior Software Engineer",
      dates: "April 2021 - August 2023",
      company: "Company : Capgemini",
      bullets: [
        "Engineered responsive, document-management interfaces with React, delivering pixel-perfect UIs and improving user satisfaction across devices.",
        "Contributed to 21+ successful production releases, collaborating with QA and backend teams to ensure timely, stable deployments.",
        "Integrated role-based access control (RBAC), strengthening system security and compliance.",
        "Enhanced user experience in React applications through effective caching, ensuring faster content rendering.",
        "Implemented modular Sass-based CSS for Chrome, Firefox, and Safari , cutting cross-browser inconsistencies by 30% and improving UI reliability."
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="exp-container">

        
        <motion.h3 className="exp-title"
        
       
        initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1,y:0 }}
          transition={{ duration: 0.5 ,delay:0.5}}


        >Work <span>Experience</span> 
        
        </motion.h3>

        <div className="exp-list">
          {items.map((it, i) => (
            <motion.article className="exp-card" key={i}
            
initial={{ opacity: 0,y:30}}
          whileInView={{ opacity: 1,y:0}}
          transition={{ duration: 0.4,delay:0.3 }}
            >
              <header className="exp-header">
                <h4 className="exp-role">{it.role}</h4>
                <span className="exp-dates">{it.dates}</span>
              </header>

              <div className="exp-company">{it.company}</div>

              <ul className="exp-bullets">
                {it.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
