const User = require('../models/user')

const bcrypt = require('bcryptjs');
require("dotenv").config();
const jwt = require('jsonwebtoken');

const getUser = async(req, res) => {

    const userList = await User.find()
    if (!userList) {
        res.status(500).json({ success: false })
    }
    res.send(userList);
}
const showUser = async(req, res) => {

    const user = await User.findById(req.params.id).select('-passwordHash'); //i don't want show the passwordhash

    if (!user) {
        res.status(500).json({ success: false })
    }
    res.send(user);
}
const creatUser = async(req, res) => { //req qetting the information from frontend & read & creat from the data base
    let user = new User({

        name: req.body.name,
        email: req.body.email,
        passwordHash: bcrypt.hashSync(req.body.password, 15),

    })
    user = await user.save(); //waiting intel the user save in the data base 

    if (!user)
        return res.status(400).send('the user cannot be created!')

    res.send(user);

}
const updateUser = async(req, res) => {


    const userExist = await User.findById(req.params.id)
    let newPassword;
    if (req.params.password) {
        newPassword = bcrypt.hashSync(req.body.password, 15)
    } else {
        newPassword = userExist.passwordHash
    }

    const user = await User.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            email: req.body.email,
            passwordHash: newPassword,

            isAdmin: req.body.isAdmin,

        }, { new: true } //send the current data that updated
    )
    if (!user) return res.status(404).send('the user can not be updated');
    res.send(user);


}
const login = async(req, res) => {

    const user = await User.findOne({ email: req.body.email })
        // const secret = 0;
    if (!user) {
        return res.status(400).send('the User not found!')
    }
    if (user && bcrypt.compareSync(req.body.password, user.passwordHash)) {

        const token = jwt.sign({
                userId: user.id,
                isAdmin: user.isAdmin

            },
            process.env.secret, { expiresIn: '1d' }
        )
        res.status(200).send({ user: user.email, token: token }) //return to me email with token
    } else {
        res.status(400).send('password Wrong');

    }

}
const register = async(req, res) => {

    let user = new User({

        name: req.body.name,
        email: req.body.email,

        passwordHash: bcrypt.hashSync(req.body.password, 10),

        isAdmin: req.body.isAdmin,

    })
    user = await user.save();

    if (!user)
        return res.status(400).send('the user cannot be created!')

    res.send(user);

}
const deleteUser = (req, res) => {
    User.findByIdAndRemove(req.params.id).then(user => {
        if (user) {
            return res.status(200).json({ success: true, message: 'the user is deleted!' })
        } else {
            return res.status(404).json({ success: false, message: "user not found!" })
        }
    }).catch(err => {
        return res.status(500).json({ success: false, error: err })
    })


}


module.exports = {
    login,
    getUser,
    showUser,
    creatUser,
    updateUser,


    register,
    deleteUser
}