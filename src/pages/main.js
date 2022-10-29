import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


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

import smallLFcoders from "../assets/images/projects/lfcoders.jpg"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  border: '2px solid',
  boxShadow: 24,
  p: 4,
};



const Contact = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <main id="home">
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
      
      <section className="skills" id="skills">
        <div className="bubble skillBox border-4">
          <h2 className="bubbleHeader">Proficient in:</h2>
          <div className="gap-4 flex flex-col">
            <div className="skillList">
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"  target="_blank" rel="noreferrer">
                <img src={logoCss} alt="css3 logo"></img>
              </a>
              <a href="https://reactjs.org/"  target="_blank" rel="noreferrer">
                <img src={logoReact} alt="react framework logo"></img>
              </a>
              <a href="https://tailwindcss.com/"  target="_blank" rel="noreferrer">
                <img src={logoTailwind} alt="Tailwind framework logo"></img>
              </a>
              <a href="https://getbootstrap.com/"  target="_blank" rel="noreferrer">
                <img src={logoBootstrap} alt="Bootstrap logo"></img>
              </a>
              <a href="https://www.adobe.com/products/photoshop.html"  target="_blank" rel="noreferrer">
                <img src={logoPS} alt="Photoshop logo"></img>
              </a>
              <a href="https://www.javascript.com/"  target="_blank" rel="noreferrer">
                <img src={logoJavascript} alt="Javascript logo"></img>
              </a>
              <a href="https://jquery.com/"  target="_blank" rel="noreferrer">
                <img src={logoJquery} alt="Jquery logo"></img>
              </a>
            </div>
            <div className="skillList">
              <a href="https://webpack.js.org/"  target="_blank" rel="noreferrer">
                <img src={logoWebpack} alt="Webpack logo"></img>
              </a>
              <a href="https://nodejs.org/en/"  target="_blank" rel="noreferrer">
                <img src={logoNodejs} alt="Node JS logo"></img>
              </a>
              <a href="https://expressjs.com/"  target="_blank" rel="noreferrer">
                <img src={logoExpress} alt="express js logo"></img>
              </a>
              <a href="https://www.apollographql.com/"  target="_blank" rel="noreferrer">
                <img src={logoApollo} alt="Apollo logo"></img>
              </a>
              <a href="https://graphql.org/"  target="_blank" rel="noreferrer">
                <img src={logoGraphql} alt="Graph ql logo"></img>
              </a>
              <a href="https://www.mongodb.com/"  target="_blank" rel="noreferrer">
                <img src={logoMongodb} alt="MongoDB logo"></img>
              </a>
              <a href="https://www.mysql.com/"  target="_blank" rel="noreferrer">
                <img src={logoMysql} alt="My SQL logo"></img>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="projects">
        <div className="bubble skillbox border-4 w-3/4">
          <h2 className="bubbleHeader flex justify-center">Major Completed Projects:</h2>
          <div className="projectBox">
            <div className="singleProject flex">
              <img src={smallLFcoders} alt="collaboration stock img" className="border-4 w-4/12"></img>
              <div className="projectText w-10/12">
                <h2>LFCoders</h2>
                <p> Looking For Coders or LFCoders for short is a fullstack application made through collaboration using Github for version control that works similarly to a social media site for coding. 
                  Once registered, you can look for projects that are seeking collaborators, or look for collaborators if you have a project 
                  in mind. All of which can be filtered by various criteria such as what tech stack is sought after/being used, availability, etc.
                </p>
              </div>
              <button className="nextButton w-2/12 border-4" onClick={handleOpen}>More</button>
              <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              >
                <Box sx={style} className="bubble">
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    LFCoders
                  </Typography>

                  <p className="modalRole" id="modal-modal-description">
                    My Primary role in this project involved <span className="inlineHighlight">building the backend</span> using <span className="inlineHighlight">Apollo</span>, <span className="inlineHighlight">GraphQL</span>,
                     and <span className="inlineHighlight">MongoDB</span> for the majority of the project, 
                    during the last few days moving over to <span className="inlineHighlight">integrate funcitonality on the front-end</span> including buttons, text inputs, and so on.
                  </p>
                  {/* <Typography id="modal-modal-description" sx={{ mt: 2 }} >
                    This project uses various technologies from front-end to back-end packages such as Apollo client, MaterialUI, Axios, Github API, Bootstrap, JWT Authentication, GraphQL, and React being the primary ones.
                  </Typography> */}
                  <p className="modalTech" id="modal-modal-description">
                    This app was built using <span className="inlineHighlight">MongoDB</span>, <span className="inlineHighlight">Express</span>, <span className="inlineHighlight">React</span>, 
                    <span className="inlineHighlight">NodeJs</span>, <span className="inlineHighlight">GraphQL</span>, <span className="inlineHighlight">Apollo</span>, <span className="inlineHighlight">Material-ui</span>, 
                    <span className="inlineHighlight">Bootstrap</span>, <span className="inlineHighlight">Axios</span>, and the <span className="inlineHighlight">Github API</span>.
                  </p>
                  <div className="flex justify-center">
                    <button className="border-4 modalButton">
                      <a href="https://github.com/LorenzoFTSIC/LFCoders" target="_blank" rel="noreferrer" >Repository</a>
                    </button>
                  </div>
                </Box>
              </Modal>
            </div>
          </div>
        </div>
        
      </section>
    </div>
    
  );
};

export default Contact;
