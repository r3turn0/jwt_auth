// Import the express and cors modules
const express = require("express"); // Express is a web framework for building REST APIs.
const cors = require("cors"); // CORS (Cross-Origin Resource Sharing) middleware allows requests from different origins.

// Create an Express application
const app = express();

// Define CORS options to configure allowed origins, methods, and headers
var corsOptions = {
  origin: "http://localhost:8081", // Allow requests only from this origin.
  methods: ["GET", "POST", "PUT", "DELETE"], // Allow these HTTP methods.
  allowedHeaders: ["Content-Type", "x-access-token"] // Allow these headers in requests.
};

// Apply the CORS middleware to the app
app.use(cors(corsOptions));

// Middleware to parse JSON requests
app.use(express.json()); // Parses incoming requests with JSON payloads.

// Middleware to parse URL-encoded requests
app.use(express.urlencoded({ extended: true })); // Parses requests with URL-encoded payloads (e.g., form submissions).

// Import database models
const db = require("./models"); // Import the database configuration and models.
const Role = db.role; // Access the Role model.
const User = db.user; // Access the User model.
const Tables = db.tables; // Access the Table model (if applicable).

// Sync the database and optionally drop existing tables
db.sequelize.sync({ force: false }).then(() => {
  //console.log('Drop and Resync Db'); // Log a message when the database is reset.
  //initial(); // Call the `initial` function to populate the database with default roles.
});

// Define a simple GET route for the homepage
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Elit Tile API." }); // Respond with a JSON message.
});

// Function to initialize the database with default roles
function initial() {
    Role.create({
      id: 1, // Assign a unique ID for the role.
      name: "user" // Define the role name.
    });
   
    Role.create({
      id: 2,
      name: "moderator"
    });
   
    Role.create({
      id: 3,
      name: "admin"
    });
}

// Import and register routes from the routes folder
require("./routes/routes")(app); // Pass the app instance to the routes module.

// Set the port for the server
const PORT = process.env.PORT || 8080; // Use the PORT environment variable or default to 8080.

// Start the server and listen for incoming requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`); // Log a message when the server starts.
});