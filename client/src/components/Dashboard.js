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
        <body class = "background">
          <section class = "container">
            <div class = "col-container">
              <div class = "col-1">

              </div>
              <div class = "col-2">

              </div>
            </div>
          </section>
        </body>
      </>
    );
    };

export default DisplayAll;