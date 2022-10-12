import autoprefixer from 'autoprefixer';
import React from 'react';
import { Link } from 'react-router-dom';

import "../../index.css";

import BackdropFilter from "react-backdrop-filter";
// import Auth from '../../utils/auth';

const styles = {
  nav: {
    margin: "auto",
    textAlign: 'center',
    minHeight: '250px',
    // backgroundImage: 'linear-gradient(to right, rgb(52, 9, 138) , rgb(236, 185, 236))',
    // BackdropFilter

  },
  headerContent: {
    padding: "70px",
    margin: "auto",
    color: 'white',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  headerSides: {
    width: '50%',
    height: '100%'
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
      <BackdropFilter
          className="bluredNav"
          filter={"blur(10px) sepia(50%)"}
          canvasFallback={true}
          html2canvasOpts={{
              allowTaint: true
          }}
          onDraw={() => {
              console.log("Rendered !");
          }}
          >
          <header style={styles.nav} className="display-flex align-center headerFade">
            <div style={styles.headerContent} className="container">
              <div style={styles.headerSides}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: '700' }}>
                  Lorenzo Ferri
                </h3>
                <div>
                  <Link
                    style={styles.button}
                    className="btn"
                    to="/login"
                    data-toggle="modal"
                    data-target=".bd-example-modal-lg-login"
                  >
                    Login
                  </Link>
                  <Link
                    style={styles.button}
                    className="btn"
                    to="/signup"
                    data-toggle="modal"
                    data-target=".bd-example-modal-lg-signup"
                  >
                    Signup
                  </Link>
                  </div>
                </div>
              </div>
        </header>
            </BackdropFilter>
  );
};


export default Header;
