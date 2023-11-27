/*const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser'); // Import body-parser

// Configure body-parser to handle URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));

const homeRoute = require('./routes/home');
app.use('/', homeRoute);
const loginRoute = require('./routes/login');
app.use('/login', loginRoute);
const registerRoute = require('./routes/register');
app.use('/register', registerRoute);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.set('view engine', 'ejs'); // Specify the view engine
//app.set('views', path.join(__dirname, 'views')); // Set the directory where your views/templates are located

*/
