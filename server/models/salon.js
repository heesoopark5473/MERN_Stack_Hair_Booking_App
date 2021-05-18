const mongoose  = require('mongoose');

const salonSchema = mongoose.Schema({
    name: {
        type    : String,
        required: true
    },
    address: {
        type    : String,
        required: true
    },
    city: {
        type    : String,
        required: true
    },
    province: {
        type    : String,
        required: true
    },
    postalCode: {
        type    : String,
        required: true
    },
    phoneNumber: {
        type    : String,
        required: true
    },
    employee: {
        type    : Number,
        required: true,
        default : 1
    },
    rating: {
        type    : Number,
        required: true,
        min     : 1,
        max     : 5,
        default : 3
    },

})

const Salon = mongoose.model('Salon', salonSchema);

module.exports = { Salon }