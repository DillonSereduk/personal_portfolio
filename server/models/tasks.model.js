const mongoose = require("mongoose");

const TaskSchema = {
    name: {
        type: String,
        required: [true, "name of product is required"],
        minLength: [4, "Name must be at least 4 characters"],
    },
    priority: {
        type: String,
        required: [true, "type of meat is required"],
        minLength: [4, "Type must be at least 4 characters"],
    },
    description: {
        type: String,
        required: [true, "product description is required"],
        minLength: [10, "Description must be at least 10 characters"],
    },
};

module.exports = mongoose.model("Task", TaskSchema);