let mongoose = require('mongoose');

// User Roles Schema
let userRolesSchema = mongoose.Schema({
    RoleID: {
        type: Number
    },
    Role: {
        type: String
    },
    Description: {
        type: String
    },
    Category: {
        type: String
    },
    Order: {
        type: Number
    }


});

let UserRoles = module.exports = mongoose.model('UserRoles', userRolesSchema);