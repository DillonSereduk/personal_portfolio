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
          <section class="nav-bar">
            <div class="hamburger-icon">
              <i class="fa-solid fa-bars"></i>
            </div>
            <div class="github-icon">
              <i class="fa-brands fa-github"></i>
            </div>
            <div class="linkedin-icon">
              <i class="fa-brands fa-linkedin"></i>
            </div>
            <div class="twitter-icon">
              <i class="fa-brands fa-twitter"></i>
            </div>
            <div class="about">
            </div>
          </section>
          
        </body>
      </>
    );
    };

export default DisplayAll;