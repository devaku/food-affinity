// Load the environment variables
if (process.env.NODE_ENV === undefined) {
    require('dotenv').config();
}

// Set the ROOT DIRECTORY
global.ROOT_DIRECTORY = __dirname;

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

const session = require('express-session');
app.use(
    session({
        // Key that will sign the cookie
        secret: 'dragons',

        // For every request to the server, we want to create a new session, even if we don't care if it's the same user or browser
        // We don't want this, so it'll be false
        resave: false,

        // If we have not touched or modified the session, we don't want it to save
        saveUninitialized: false,
    })
);

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
