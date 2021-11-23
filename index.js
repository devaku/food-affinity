// Load the environment variables
if (process.env.NODE_ENV === undefined) {
    require('dotenv').config();
}

// Set the ROOT DIRECTORY
global.ROOT_DIRECTORY = __dirname;

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// For logging purposes on debugging
const morgan = require('morgan');
app.use(morgan('short'));

// Set the PUBLIC folder
app.use(express.static('public'));

// Set the ROUTES that the API will use
const routes = require('./routes');
routes(app);

// Set it to listen
app.listen(PORT, () => {
    console.log(`Server listening at PORT: ${PORT}`);
});
