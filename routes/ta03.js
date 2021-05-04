//TA03 PLACEHOLDER
const express = require('express');
const router = express.Router();

const items = require('../public/data/ta03.json');

const fs = require('fs');

const path = require('path');

const p = path.join(path.dirname(process.mainModule.filename), 'public', 'data', 'ta03.json');

const getDataFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    }); 
};

router.get('/',(req, res, next) => {
    getDataFromFile(data => {
        res.render('pages/ta03', { 
                title: 'Team Activity 03', 
                path: '/ta03', // For pug, EJS 
                activeTA03: true, // For HBS
                contentCSS: true, // For HBS
                data: data
            });
            console.log(data);
    });
});

router.post('/', (req, res, next) => {
    getDataFromFile(data => {
        res.render('pages/ta03', { 
                title: 'Team Activity 03', 
                path: '/ta03', // For pug, EJS 
                activeTA03: true, // For HBS
                contentCSS: true, // For HBS
                data: data.filter(item => item.tags.includes(req.body.search))
            });
            console.log(data);
    });
})

module.exports = router;