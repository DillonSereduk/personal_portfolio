const taskController = require("../controllers/slime.controller");

module.exports = (app) => {
    app.post("/api/task", taskController.createNewTask);
    app.get("/api/task", taskController.getAllTasks);
    app.get("/api/task/:id", taskController.getOneTask);
    app.get("/api/taskType/:type", taskController.getOneType);
    app.put("/api/task/:id", taskController.updateTask);
    app.delete("/api/task/:id", taskController.deleteExistingUser);
};