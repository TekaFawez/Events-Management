// Fawez TEKA 
//     https://www.linkedin.com/in/fawez-teka/
//     https://github.com/TekaFawez
//    Copyright © Fawez TEKA . All rights reserved.


// const expressJwt = require('express-jwt'); //problem version 6.6.1
const { expressjwt: expressJwt } = require("express-jwt");

function authJwt() {
    const secret = process.env.secret

    return expressJwt({
        secret, //compare with the secret 
        algorithms: ['HS256'],
        // spicfy if the user is admin or not
        isRevoked: isRevoked
            //isRevoked: isRevoked
    }).unless({
        path: [
            { url: /\/api\/v1\/events(.*)/, methods: ['GET', , 'OPTIONS'] },
            { url: /\/api\/v1\/updatePlace(.*)/, methods: ['PUT', 'OPTIONS'] },
            { url: /\/api\/v1\/takedPlace(.*)/, methods: ['POST', 'OPTIONS'] },
            { url: /\/api\/v1\/events(.*)/, methods: ['GET', , 'OPTIONS'] },
            '/api/v1/users/login',
            '/api/v1/mail',
            '/api/v1/users/register'
            // { url: /(.*)/ },
        ]

    })
}
async function isRevoked(req, token) {
    // if (!payload.isAdmin) {
    //     done(null, true)
    // }
    // done();  
    if (!token.payload.isAdmin) { 
        return true;  
    } 

};
module.exports = authJwt;