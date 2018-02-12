const index = require('express').Router();

index.get('/', (req, res)=>{
    res.send("Hello");
});

module.exports = index;