// import autoprefixer from 'autoprefixer';
import React from 'react';
import { Link } from 'react-router-dom';

import "../../index.css";

import BackdropFilter from "react-backdrop-filter";
// import Auth from '../../utils/auth';

const styles = {
  navigation: {
    margin: "auto",
    textAlign: 'center',
    justifyContent: "flex-end",
    // backgroundImage: 'linear-gradient(to right, rgb(52, 9, 138) , rgb(236, 185, 236))',
    // BackdropFilter
  },
  headerContent: {
    padding: "15px",
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: "100%"
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
    width: 100,
    margin: 20
  }
};

const Header = () => {
  return (
    <div className="navContainer">
      <BackdropFilter
        className="bluredNav"
        filter={"blur(10px) sepia(50%)"}
        canvasFallback={true}
        html2canvasOpts={{ allowTaint: true }}
        onDraw={() => { console.log("Rendered !"); }}
        style={{ position: "sticky"}}
        >
        <div style={styles.headerContent} className="flex">
          <h3 style={{ fontSize: '1.75rem', fontWeight: '700' }}>
            Lorenzo Ferri
          </h3>
          <div style={{ marginRight: "150px" }}>
            <Link
              style={styles.button}
              className="btn"
              to="/login">
              Learning
            </Link>
            <Link
              style={styles.button}
              className="btn"
              to="/signup">
              Passion Projects
            </Link>
            <Link
              style={styles.button}
              className="btn"
              to="/signup">
              Contact me
            </Link>
            <Link
              style={styles.button}
              className="btn"
              to="/signup">
              Skills
            </Link>
          </div>
        </div>
      </BackdropFilter>
    </div>
  );
};


export default Header;
