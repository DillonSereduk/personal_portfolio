import { useEffect, useState } from "react";
import axios from "axios";
import "../Dashboard.css";
import { Link } from "react-router-dom";


function App() {
    return (
      <>
        <body>
            <nav class="navbar">
                <i class="fa-solid fa-bars"></i>
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="fa-brands fa-github"></i>
                      <span class="link-text">Github</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="fa-brands fa-linkedin"></i>
                      <span class="link-text">LinkedIn</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="fa-solid fa-eye-slash"></i>
                      <span class="link-text">reality</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="fa-regular fa-circle-xmark"></i>
                      <span class="link-text"></span>
                    </a>
                  </li>
                </ul>
            </nav>
            <section class="panel-1">
              <h1 class="fancy-font">DILLON SEREDUK.</h1>
                <p>
                  In incididunt nisi nisi fugiat Lorem labore id laboris dolore sunt. 
                  Magna irure cillum amet cupidatat eu do occaecat cupidatat mollit reprehenderit est fugiat. 
                  Aliqua excepteur proident fugiat sunt do. Velit incididunt non in dolor enim et aliqua. 
                  Laborum id minim fugiat id sint labore nulla nulla.
                </p>
            </section>

            <div class="spacer layer1"></div>

            <section class="panel-2">
              <h1>Nice Curves</h1>
                <p>
                  In incididunt nisi nisi fugiat Lorem labore id laboris dolore sunt. 
                  Magna irure cillum amet cupidatat eu do occaecat cupidatat mollit reprehenderit est fugiat. 
                  Aliqua excepteur proident fugiat sunt do. Velit incididunt non in dolor enim et aliqua. 
                  Laborum id minim fugiat id sint labore nulla nulla.
                </p>
            </section>

            <div class="spacer layer2"></div>

            <section class="panel-3">
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