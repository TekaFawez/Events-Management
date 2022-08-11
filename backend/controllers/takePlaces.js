// Fawez TEKA 
//     https://www.linkedin.com/in/fawez-teka/
//     https://github.com/TekaFawez
//    Copyright © Fawez TEKA . All rights reserved.

const { Event } = require('../models/event')



const TakedPlace = require('../models/takedPlace')


const takedPlace = async(req, res) => { //req qetting the information from frontend & read & creat from the data 
    const event_ID = await Event.findById(req.body.event_ID);
    if (!event_ID) return res.status(400).send('Invalid event_ID')
    let takeEvent = new TakedPlace({
        nbPlace: req.body.nbPlace,
        event_ID: req.body.event_ID,

    })


    takeEvent = await takeEvent.save(); //waiting intel the user save in the data base 

    if (!takeEvent)
        return res.status(400).send('the takeEvent cannot be created!')

    res.send(takeEvent);

}
module.exports = {
    takedPlace
}