export default function Footer() {
  const toTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    // <footer  id="footer">
    //   <div className="footer-parent" style={{display:"flex",justifyContent:"space-between",padding:"10px 15px",borderTop: "2px solid rgba(255,255,255,0.4)"}} >
    //     <span className="footer-style" style={{color:"white",lineHeight:"1.5",fontSize:"1.1rem"}}>© 2026 Prasad Gawli. All rights reserved.</span>

       
    
    //   </div>
    // </footer>
<footer
  className="footer-parent"
  style={{
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 15px",
    borderTop: "2px solid rgba(255,255,255,0.4)",
  }}
>
  <span className="footer-style" style={{color:"white",lineHeight:"1.5",fontSize:"1rem", whiteSpace: "nowrap"}}>
    © 2026 Prasad Gawli.
  </span>

  <a
    href="https://www.justacademy.co/"
    target="_blank"
    rel="noopener noreferrer"
    className="justacademy-link"

    style={{color:"white",lineHeight:"1.5",fontSize:"1rem",textDecoration:"none"}}
  >
    JustAcademy <span className="arrow" >↗</span>
  </a>
  
</footer>


  );
}
