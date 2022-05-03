import React from "react";
import './Home.css';
import { BsChevronCompactDown } from 'react-icons/bs';
import { IconContext } from "react-icons";

export function Home() {
  return (
    <>
      <div className='banner-text' style={{ height: "85vh" }}>
        <div className='banner-text' style={{ paddingTop: "25vh", paddingBottom: "0px" }}>
          <h1 className="title">Drew Bodmer</h1>
          <h5 className="subtitle">Software Engineer | Levee Industries</h5>
          <p className="subtitle piccreds">Background: Dominican Republic (taken by me)</p>
          <IconContext.Provider value={{ color: "white", size: "10vh", className: "global-class-name" }}>
            <h3 style={{ paddingTop: "5vh", textAlign: "center" }}><BsChevronCompactDown /></h3>
          </IconContext.Provider>
        </div>

      </div>
      <div style={{ width: "100vw", height: "100vh", background: "#303030", marginTop: "10vh", }}>
        <h1 style={{ paddingTop: "5vh" }} className="subtitle aboutheader">
          About Me
        </h1>
        <hr className="solid" style={{ color: "white", width: "80%", margin: "auto", marginBottom: "5vh" }}></hr>
        <div style={{ width: "40vw", margin: "auto" }}>
          <div style={{ float: "left" }}>
            <img src="/assets/profile.jpg" style={{ width: "10vw", borderRadius: "50%" }} />
          </div>
          <div >
            <p className="subtitle aboutbody">
              I'm a recent BSCS graduate from Northeastern University, with minors in physics and mathematics. I'm
              most interested in AI, Blockchain, and utilization of software to improve healthcare research.
            </p>
          </div>
          <hr className="solid" style={{ color: "white", width: "80%", margin: "auto", marginBottom: "5vh" }}></hr>
          <ul id="Homelist">
            <li id="Homelistitem" className="subtitle socials-links">
              <a className="subtitle socials-links" style={{ textDecoration: "none" }} href="https://www.linkedin.com/in/drew-bodmer">Linkedin</a>
            </li>
            <li id="Homelistitem" className="subtitle socials-links" >
              <a className="subtitle socials-links" style={{ textDecoration: "none" }} href="https://github.com/drewbodmer">GitHub</a>
            </li>
            <li id="Homelistitem" className="subtitle socials-links" >
              drew.bodmer@gmail.com
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}