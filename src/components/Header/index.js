import React from 'react';
// import { Link } from 'react-router-dom';

import "../../index.css";
import { Link } from "react-scroll";

const styles = {
  navigation: {
    margin: "auto",
    textAlign: 'center',
    justifyContent: "flex-end",
  },
  headerContent: {
    padding: "15px",
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: "100%",
  },
  title: {
    color: 'white',
    fontSize: '3rem',
    fontFamily: 'Segoe UI'
  },
  link: {
    textDecoration: 'none'
  },
  button: {
    margin: 20
  }
};

const Header = () => {
  return (
    <div className="navContainer">
      <div
        className="bluredNav"
        filter={"blur(10px) sepia(50%)"}
        canvasFallback={true}
        html2canvasOpts={{ allowTaint: true }}
        onDraw={() => { console.log("Rendered !"); }}
        style={{ position: "sticky", backdropFilter: "blur"}}
        >
        <div style={styles.headerContent} className="flex textStroke">
          <h3 style={{ fontSize: '1.75rem', fontWeight: '700', marginLeft: "25px" }}>
            Lorenzo Ferri
          </h3>
          <div style={{ marginRight: "150px" }} className="flex">
            <Link
              style={styles.button}
              className="btn hover-underline-animation"
              to="home"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              Home
            </Link>
            <Link
              style={styles.button}
              className="btn hover-underline-animation"
              to="skills"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              Skills
            </Link>
            <Link
              style={styles.button}
              className="btn hover-underline-animation"
              to="projects"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              Projects
            </Link>
            <Link
              style={styles.button}
              className="btn hover-underline-animation"
              to="contactMe"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Header;
