const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Serve static files (like HTML form)
app.use(express.static(__dirname));

// Route to serve the HTML form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Route to handle form submission
app.post('/submit', (req, res) => {
    // Extract form data from req.body
    const userData = {
        name: req.body.name,
        gender: req.body.gender,  
        dob: req.body.dob,
        country: req.body.country,
        phone: req.body.phone,
        email: req.body.email,
    };

    // Render the EJS response page with the submitted data
    res.render('response', userData);
});

// Start the server on port 5500
app.listen(5500, () => {
    console.log('Server is running at http://localhost:5500');
});
