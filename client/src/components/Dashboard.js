import { useEffect, useState } from "react";
import axios from "axios";
import "../Dashboard.css";
import { Link } from "react-router-dom";


function App() {
  return (
    <Navbar></Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul class="navbar-nav"> { props.children } </ul>
    </nav>
  );
}

function NavItem(props) {
  return (
      <li className="nav-item">
        <a href="#" className="nav-link">
          {props.icon}
        </a>
      </li>
  );
}

function App() {
    return (
      <>
        <body>
            <nav className="navbar">
                <i className="fa-solid fa-bars"></i>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="fa-brands fa-github"></i>
                      <span className="link-text">Github</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="fa-brands fa-linkedin"></i>
                      <span className="link-text">LinkedIn</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="fa-solid fa-eye-slash"></i>
                      <span className="link-text">reality</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="fa-regular fa-circle-xmark"></i>
                      <span className="link-text"></span>
                    </a>
                  </li>
                </ul>
            </nav>
            <section className="panel-1">
              <h1 className="fancy-font">DILLON SEREDUK.</h1>
                <p>
                  In incididunt nisi nisi fugiat Lorem labore id laboris dolore sunt. 
                  Magna irure cillum amet cupidatat eu do occaecat cupidatat mollit reprehenderit est fugiat. 
                  Aliqua excepteur proident fugiat sunt do. Velit incididunt non in dolor enim et aliqua. 
                  Laborum id minim fugiat id sint labore nulla nulla.
                </p>
            </section>

            <div className="spacer layer1"></div>

            <section className="panel-2">
              <h1>Nice Curves</h1>
                <p>
                  In incididunt nisi nisi fugiat Lorem labore id laboris dolore sunt. 
                  Magna irure cillum amet cupidatat eu do occaecat cupidatat mollit reprehenderit est fugiat. 
                  Aliqua excepteur proident fugiat sunt do. Velit incididunt non in dolor enim et aliqua. 
                  Laborum id minim fugiat id sint labore nulla nulla.
                </p>
            </section>

            <div className="spacer layer2"></div>

            <section className="panel-3">
              <h1>Nice Curves</h1>
                <p>
                  In incididunt nisi nisi fugiat Lorem labore id laboris dolore sunt. 
                  Magna irure cillum amet cupidatat eu do occaecat cupidatat mollit reprehenderit est fugiat. 
                  Aliqua excepteur proident fugiat sunt do. Velit incididunt non in dolor enim et aliqua. 
                  Laborum id minim fugiat id sint labore nulla nulla.
                </p>
            </section>
        </body>
      </>
    );
  };

export default App;

          {/* <section class="nav-bar-main">
            <section class="nav-bar-left">
              
            </section>
            <section class="nav-bar-middle">
              <button class="github-icon">
                <i class="fa-brands fa-github"></i>
              </button>
              <button class="linkedin-icon">
                <i class="fa-brands fa-linkedin"></i>
              </button>
              <button class="twitter-icon">
                <i class="fa-brands fa-twitter"></i>
              </button>
            </section>
          </section> */}
          
          {/* <nav className="navigation-bar-left">
              <button class="hamburger-button">
                <i class="fa-solid fa-bars"></i>
              </button>
            </nav>
            <nav className="navigation-bar-middle">
              <ul>
                <li>
                  <a href="https://github.com/DillonSereduk" className="github-button">
                    <i class="fa-brands fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/DillonSereduk" className="github-button">
                    <i class="fa-brands fa-github"></i>
                  </a>
                </li>
              </ul>
            </nav>
            <nav className="navigation-bar-right"></nav> */}