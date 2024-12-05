const mongoose = require('mongoose');
mongoose.connect(
    'mongodb://localhost:27017/employeeDB',
);
const empSchema = new mongoose.Schema({
    empName: String,
    empPass: String,
    created: {type: Date, default: Date.now()},
});