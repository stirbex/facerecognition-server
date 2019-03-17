const express = require('express');

const app = express();


const database ={
    users: [
        {
            id: "123",
            name: "florin",
            email: "florinemail",
            passowr: "florinpassword",
            entries: 0,
            joined: new Date()
        },
        {
            id: "1233",
            name: "marian",
            email: "marianemail",
            passowr: "marianpassword",
            entries: 0,
            joined: new Date()
        }
    ]
}

app.get('/',(req, resp) =>{
    resp.send("this is working")
})

app.post('/signin', (req,res) => {
    res.json("the signin is working");
});

app.listen(3000, () => {
    console.log("app is running on port 3000")
});


/*
Vrem sa avem un root request 
un signin sa fie de tipul poost req.post si sa raspunda cu succes sau fail
un register --> post req.post = return the new created user object
sa avem abilitatea de a accesa profilul userului creat, deci ne putem folo
si de user id cu GET.req.params /profile/:userID
/image --> PUt pt ca in felul asta putem updata userul care deja exista


*/

// Bulding routes for app