const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get(['/', '/about'], (req, res) => {
    res.render('about', { title: 'About Us' });
});


app.get('/services', (req, res) => res.send('<h1>Services Page Coming Soon</h1>'));
app.get('/contact', (req, res) => res.send('<h1>Contact Us Page Coming Soon</h1>'));

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
