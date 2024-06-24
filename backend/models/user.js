const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true ,
    },
    passwordHash: {
        type: String,
        required: true,
    },
 
    isAdmin: {
        type: Boolean,
        default: false,
    }
})
userSchema.virtual('id').get(function() {
    return this._id.toHexString();
});

userSchema.set('toJSON', {
    virtuals: true,
});
userSchema.plugin(uniqueValidator);


module.exports = mongoose.model('User', userSchema);