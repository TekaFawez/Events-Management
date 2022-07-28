// Fawez TEKA 
//     https://www.linkedin.com/in/fawez-teka/
//     https://github.com/TekaFawez
//    Copyright © Fawez TEKA . All rights reserved.

const mongoose = require('mongoose');
const eventSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    place: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
})
eventSchema.virtual('id').get(function() {
    return this._id.toHexString();
});

eventSchema.set('toJSON', {
    virtuals: true,
});


// module.exports = mongoose.model('Event', eventSchema);
exports.Event = mongoose.model('Event', eventSchema)