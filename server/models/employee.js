const mongoose  = require('mongoose');

const employeeSchema = mongoose.Schema({
    firstname: {
        type    : String,
        required: true
    },
    lastname: {
        type    : String,
        required: true
    },
    salon: {
        type    : String,
        required: true
    },
    gender: {
        type    : String,
        required: true
    },
    rating: {
        type    : Number,
        required: true,
        min     : 1,
        max     : 5,
        default : 3
    },

})

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = { Employee }