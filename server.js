const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const database ={
    users: [
        {
            id: "123",
            name: "florin",
            email: "florinemail",
            password: "florinpassword",
            entries: 0,
            joined: new Date()
        },
        {
            id: "1233",
            name: "marian",
            email: "marianemail",
            password: "marianpassword",
            entries: 0,
            joined: new Date()
        }
    ]
}

app.get('/',(req, resp) =>{
    resp.send(database.users)
})

app.post('/signin', (req,res) => {
    if(req.body.email === database.users[0].email && 
        req.body.password ===database.users[0].password) {
            res.json("the signin is working");
        }
        else {
            res.status(404).json('error logging in')

    }
});

app.post('/register', (req, res)=> {
    const {email, name, password} =req.body;
    database.users.push({
        
        id: "125",
        name: name,
        email: email,
        password: password,
        entries: 0,
        joined: new Date()
    })
    res.json(database.users[database.users.length-1]);
})

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