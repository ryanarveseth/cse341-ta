//TA04 PLACEHOLDER
const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    if (!req.session.theme) {
        req.session.theme = "dark";
    };
    res.render('pages/ta05', { 
        theme: req.session.theme,
        counter: req.session.counter,
        title: 'Team Activity 05', 
        path: '/ta05', // For pug, EJS 
        activeTA05: true, // For HBS
        contentCSS: true, // For HBS
    });
});

router.post('/change-style',(req, res, next) => {
    if (req.session.theme == "light") {
        req.session.theme = "dark";
    } else {
        req.session.theme = "light";
    }
    res.redirect('/ta05');
});

router.post('/counter',(req, res, next) => {
    if (req.session.counter) {
        req.session.counter += 1;
        console.log(req.session.counter);
    } else {
        req.session.counter = 1;
    }
    res.redirect('/ta05');
});

router.get('/reset',(req, res, next) => {
    req.session.destroy();
    res.redirect('/ta05');
});

module.exports = router;