// Import express and cors modules:

// Express is for building the Rest apis
// cors provides Express middleware to enable CORS
// – create an Express  app, then add cors middlewares using app.use() method. Notice that we set origin: http://localhost:8081.
// – define a GET route which is simple for test.
// – listen on port 8080 for incoming requests.

// Now let’s run the app with command: node server.js.
// Open your browser with url http://localhost:8080/, you will see:

const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./models");
// const Role = db.role;
// const User = db.user;
// const Table = db.table;

db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Db');
});

// simple route for homepage
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Elit Tile API."});
});

// function initial() {
//     Role.create({
//       id: 1,
//       name: "user"
//     });
   
//     Role.create({
//       id: 2,
//       name: "moderator"
//     });
   
//     Role.create({
//       id: 3,
//       name: "admin"
//     });
// }


require("./routes/routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

