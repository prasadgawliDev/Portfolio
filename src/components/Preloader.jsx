import { useEffect, useState } from "react";
import "./loader.css";

export default function Preloader() {
//   const [show, setShow] = useState(() => !sessionStorage.getItem("visited"));
const devMode = import.meta.env.DEV;
const [show, setShow] = useState(() => devMode || !sessionStorage.getItem("visited"));

  useEffect(() => {
    if (!sessionStorage.getItem("visited")) {
      sessionStorage.setItem("visited", "true");
      const t = setTimeout(() => setShow(false), 2800);
      return () => clearTimeout(t);
    }
  }, []);

  if (!show) return null;

  return (
    // <div className="preloader-wrapper">
    //   <div className="liquid-blob"></div>
    //   <div className="loading-text">Loading...</div>
    // </div>


  <div className="preloader-wrapper">
  <div className="cube">
    <div className="face front"></div>
    <div className="face back"></div>
    <div className="face right"></div>
    <div className="face left"></div>
    <div className="face top"></div>
    <div className="face bottom"></div>
  </div>

  <div className="loading-text">Loading...</div>
</div>


  );
}
