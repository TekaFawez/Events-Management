// Fawez TEKA 
//     https://www.linkedin.com/in/fawez-teka/
//     https://github.com/TekaFawez
//    Copyright © Fawez TEKA . All rights reserved.

const express = require('express');
const router = express.Router();

const users = require('../controllers/users')
const events = require('../controllers/events')
const takedPlace = require('../controllers/takePlaces')
const mails = require('../controllers/mail')


router.get(`/users`, users.getUser)
router.get(`/users/:id`, users.showUser)
router.get(`/events`, events.getEvent)
router.get(`/events/:id`, events.showEvent)



router.post('/users', users.creatUser)
router.post('/users/login', users.login)
router.post('/users/register', users.register)
router.post('/events', events.creatEvent)
router.post('/takedPlace', takedPlace.takedPlace)
router.post('/mail', mails.sendEmail)




router.put('/users/:id', users.updateUser)
router.put('/events/:id', events.updateEvent)
router.put('/updatePlace/:id', events.updatePlace)


router.delete('/users/:id', users.deleteUser)
router.delete('/events/:id', events.deleteEvent)









module.exports = router;