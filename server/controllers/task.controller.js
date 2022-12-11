const Task = require("../models/tasks.model");

const createNewTask = (req, res) => {
    Task.create(req.body)
        .then((newTask) => {
            res.json({ newTask });
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
};

const getAllTasks = (req, res) => {
    Task.find()
        .then((allTasks) => {
            res.json(allTasks);
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
};

const getOneTask = (req, res) => {
    Task.findOne({ _id: req.params.id })
        .then((queriedTask) => {
            res.json(queriedTask);
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
};

const getOneType = (req, res) => {
    Task.find({ type: {$regex: new RegExp('^' + req.params.type.toLowerCase(), 'i')}})
        .then((queriedTask) => {
            res.json(queriedTask);
            console.log(queriedTask);
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
};

const updateTask = (req, res) => {
    Task.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updatedTask) => {
            res.json({ updatedTask });
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
};

const deleteExistingUser = (req, res) => {
    Task.deleteOne({ _id: req.params.id })
        .then((deletedResponse) => {
            res.json({ deletedResponse });
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
};

module.exports = {
    createNewTask,
    getOneTask,
    getAllTasks,
    updateTask,
    deleteExistingUser,
    getOneType,
};