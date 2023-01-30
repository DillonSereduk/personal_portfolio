import { useEffect, useState } from "react";
import axios from "axios";
import "../Dashboard.css";
import { Link } from "react-router-dom";


const DisplayAll = () => {
    const tasks=["High", "Medium", "Low"];
    const [allTasks, setAllTasks] = useState([]);
    useEffect(() => {
        axios
        .get("http://localhost:8000/api/task")
        .then((response) => {
            console.log(response.data);
            setAllTasks(response.data);
        })
        .catch((err) => {
            console.log(err.response);
        });
    }, []);

    const handleDeleteTask = (idFromBelow) => {
        axios
        .delete(`http://localhost:8000/api/task/${idFromBelow}`)
        .then((response) => {
            console.log("successfully removed task");
            console.log(response);
            const filteredTasks = allTasks.filter((task) => {
            return task._id !== idFromBelow;
            });
            setAllTasks(filteredTasks);
        })
        .catch((err) => {
            console.log("error deleting task", err.response);
        });
    };

    return (
      <>
        <body>
          <div className="header">
            
          </div>
        </body>
      </>
    );
    };

export default DisplayAll;

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