import React from 'react';
// import logo from '../assets/images/logo.svg';
import logoReact from "../assets/images/skills/react-colored.svg"
import logoCss from "../assets/images/skills/css3-colored.svg"
import logoExpress from "../assets/images/skills/express-colored-dark.svg"
import logoGraphql from "../assets/images/skills/graphql-colored.svg"
import logoJavascript from "../assets/images/skills/javascript-colored.svg"
import logoJquery from "../assets/images/skills/jquery-colored.svg"
import logoMongodb from "../assets/images/skills/mongodb-colored.svg"
import logoMysql from "../assets/images/skills/mysql-colored.svg"
import logoNodejs from "../assets/images/skills/nodejs-colored.svg"
import logoTailwind from "../assets/images/skills/tailwindcss-colored.svg"
import logoWebpack from "../assets/images/skills/webpack-colored.svg"
import logoBootstrap from "../assets/images/skills/bootstrap-colored.svg"
import logoApollo from "../assets/images/skills/apollo2.png"
import logoPS from "../assets/images/skills/photoshop-colored.svg"

const Contact = () => {
  return (
    <div>
      <main>
        <div className="title-div textStroke">
          <div className="border-4 bubble bubbleTop">
            <h2>
              Hello World,
            </h2>
            <h2 >
              I'm Lorenzo
            </h2>
          </div>
        </div>
        <div className="desc-div textStroke">
          <div className="border-4 bubble bubbleBot">
            <p>
              Software engineer located in Orlando, FL
            </p>
          </div>
        </div>
      </main>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <section className="skills">
        <div className="bubble skillBox border-4">
          <h2>Proficient in:</h2>
          <div className="gap-4 flex flex-col">
            <div className="skillList">
              <img src={logoCss} alt="css3 logo"></img>
              <img src={logoReact} alt="react framework logo"></img>
              <img src={logoTailwind} alt="Tailwind framework logo"></img>
              <img src={logoBootstrap} alt="Bootstrap logo"></img>
              <img src={logoPS} alt="Photoshop logo"></img>
              <img src={logoJavascript} alt="Javascript logo"></img>
              <img src={logoJquery} alt="Jquery logo"></img>
            </div>
            <div className="skillList">
              <img src={logoWebpack} alt="Webpack logo"></img>
              <img src={logoNodejs} alt="Node JS logo"></img>
              <img src={logoExpress} alt="express js logo"></img>
              <img src={logoApollo} alt="Apollo logo"></img>
              <img src={logoGraphql} alt="Graph ql logo"></img>
              <img src={logoMongodb} alt="MongoDB logo"></img>
              <img src={logoMysql} alt="My SQL logo"></img>
            </div>
          </div>
        </div>
      </section>
      <section className="projects">
        
      </section>
    </div>
    
  );
};

export default Contact;
