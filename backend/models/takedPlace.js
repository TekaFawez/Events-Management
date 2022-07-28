// Fawez TEKA 
//     https://www.linkedin.com/in/fawez-teka/
//     https://github.com/TekaFawez
//    Copyright © Fawez TEKA . All rights reserved.

const mongoose = require('mongoose');
const User = require('./user');
const Event = require('./event')

const takedPlaceSchema = mongoose.Schema({
    nbPlace: {
        type: Number,
        required: true,
    },
    user_ID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    event_ID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
    },

})
takedPlaceSchema.virtual('id').get(function() {
    return this._id.toHexString();
});

takedPlaceSchema.set('toJSON', {
    virtuals: true,
});


module.exports = mongoose.model('TakedPlace', takedPlaceSchema);