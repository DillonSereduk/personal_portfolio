import { useEffect, useState } from "react";
import axios from "axios";
import "../stylesheets/App.css";
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
            <body class="body-display">
                <section class="header">
                    <div class="nav-bar">
                        <section>
                            <img class="search-icon" src={require("../images/search-dark.png")} alt="search icon" />
                        </section>
                        <div>
                            <p class="log-out"><strong>Log Out</strong></p>
                        </div>
                    </div>

                    <div class="main-box">

                            <div class="table-header">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Task</th>
                                            <th>Description</th>
                                            <th>Type</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                            <div class="table-content">
                                <table>
                                    <tbody>
                                        {allTasks.map((task, index) => {
                                            return (
                                            <tr key={task._id}>
                                                <td>{task.name}</td>
                                                <td>{task.description}</td>
                                                <td>{task.type}</td>
                                                <td>
                                                    <Link to={`/task/${task._id}`}>
                                                        <button className="table-button">Details</button>
                                                    </Link>

                                                    <Link to={`/edit/${task._id}`}>
                                                        <button className="table-button">Edit</button>
                                                    </Link>

                                                    <button onClick={() => handleDeleteTask(task._id)}className="danger-button">
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                    </div>
                    <div class="table-ender">
                        <Link to="/new"><button class="add-product-button"><strong>Add Product</strong></button></Link>
                    </div>
                    <div class="task-types">
                        <Link to={`/taskType/High`}><button class="task-type-button"><strong>High</strong></button></Link>
                        <Link to={`/taskType/Medium`}><button class="task-type-button"><strong>Medium</strong></button></Link>
                        <Link to={`/taskType/Low`}><button class="task-type-button"><strong>Low</strong></button></Link>
                    </div>
                </section>
            </body>
        </>
    );
    };

export default DisplayAll;