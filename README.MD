# Information

To be able to run this project, you need to have Postgres installed on your desktop as it is the database for the application.

My first foray into creating a React + Express application.
It's not exactly beautiful and quite frnakly crude, but it demonstrates the connection between the two.

# Usage

- Clone the repository 
```
git clone https://github.com/devaku/food-affinity
cd food-affinity
```

- Do the necessary installs. The root package.json has the commands setup to ease the installation.
```
npm run dev
```

- Make sure to have the npm package of 'concurrently' installed on the machine as it is required to run the application in parallel. 
> https://www.npmjs.com/package/concurrently

- In the event that concurrently is not installed, you can just manually run the application by going into the client folder and server folder respectively and running the separate package.json files.
- Be sure to install the node_modules.
- Afterwards, make sure to run the following knex commands to be able to populate the database
```
// Latest migration
knex migrate:latest

// Populate the database
knex seed:run 
```
# Notes

The application uses localStorage to keep track of user session. If errors occur, just delete the localStorage entry and it should be work. It is the "zCookie" entry.

# Credits
- This Node.js application was created by Alejo Kim Uy.
- If you're interested in working with me, you can find my details on my LinkedIn.
  - https://www.linkedin.com/in/alejo-kim-uy-612319108/
- If you want to see my other coding projects, you can find them on my Github.
  - https://github.com/devaku?tab=repositories