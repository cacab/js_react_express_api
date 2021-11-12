const express = require('express');
const router = express.Router();
const path = require('path');
const users = [{name: 'Tony', email: 'tony@mail.com'}]



router.get('/', (req, res) => {

    res.json({message: "your express app"});

});

router.get('/server', (req, res) => {

    res.json({ message: "Hello from the server!" });

});


router.get('/a', (req, res) => {

    res.json({ message: "Idk why this route is called a" });

});

router.get('/users', (req, res) => {

    res.json({ok:true, users});

});

router.get('/user/:name', (req, res) =>{
    const {name} = req.params;
    const user = users.filter((user) => user.name === name)[0];
    res.json({ok:true, user});
})

router.post('/adduser', (req, res) => {

    const {name, email} = req.body;
    if(name && email) {

        users.push({name, email});
        res.json({ok:true, users});
    }

});

router.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../client/src', 'App.js'));
});

module.exports = router;