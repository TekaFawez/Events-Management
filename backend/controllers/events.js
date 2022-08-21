// Fawez TEKA 
//     https://www.linkedin.com/in/fawez-teka/
//     https://github.com/TekaFawez
//    Copyright © Fawez TEKA . All rights reserved.

const  Event = require('../models/event')
// const  {Event} = require('../models/event')
const getEvent = async(req, res) => {

    const eventList = await Event.find()
    if (!eventList) {
        res.status(500).json({ success: false })
    }
    res.send(eventList);
}
const showEvent = async(req, res) => {

    const event = await Event.findById(req.params.id)

    if (!event) {
        res.status(500).json({ success: false })
    }
    res.send(event);
}
const creatEvent = async(req, res) => { //req qetting the information from frontend & read & creat from the data base
    let event = new Event({

        name: req.body.name,
        place: req.body.place,
        price: req.body.price,
        date: req.body.date,




    })
    event = await event.save(); //waiting intel the user save in the data base 

    if (!event)
        return res.status(400).send('the user cannot be created!')

    res.send(event);

}
const updateEvent = async(req, res) => {


    const event = await Event.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            place: req.body.place,


            price: req.body.price,
            date: req.body.date,


        }, { new: true } //send the current data that updated
    )
    if (!event) return res.status(404).send('the event can not be updated');
    res.send(event);


}
const updatePlace = async(req, res) => {


    const event = await Event.findByIdAndUpdate(req.params.id, {

            place: req.body.place,





        }, { new: true } //send the current data that updated
    )
    if (!event) return res.status(404).send('the event can not be updated');
    res.send(event);


}
const deleteEvent = (req, res) => {
    Event.findByIdAndRemove(req.params.id).then(event => {
        if (event) {
            return res.status(200).json({ success: true, message: 'the event is deleted!' })
        } else {
            return res.status(404).json({ success: false, message: "event not found!" })
        }
    }).catch(err => {
        return res.status(500).json({ success: false, error: err })
    })


}
module.exports = {
    deleteEvent,
    creatEvent,
    showEvent,
    updateEvent,
    getEvent,
    updatePlace

}