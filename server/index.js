// Set the ROOT DIRECTORY
global.ROOT_DIRECTORY = __dirname;

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Load the environment variables
if (process.env.NODE_ENV === undefined) {
    console.clear();
    require('dotenv').config();
    console.log('Configuration files loaded');

    // For logging purposes on debugging
    const morgan = require('morgan');
    app.use(morgan('short'));
}

// Attach session holder that uses the database
const database = require('./lib_modules/utility/database/knexSetup.js');
database(app);

// Set the PUBLIC folder
app.use(express.static('public'));

const cors = require('cors');
app.use(cors());

// Set the ROUTES that the API will use
const routes = require('./api');
routes(app);

// Set PORT
app.set('port', PORT);
// Set it to listen
app.listen(PORT, () => {
    console.log(`Server listening at PORT: ${PORT}`);
});
