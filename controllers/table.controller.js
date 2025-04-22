const db = require("../models");
const e_product = db.e_product;

// Exporting an asynchronous function named `e_product` to handle a specific route or API endpoint.
exports.e_product = async (req, res) => {
   try {
      // Attempting to fetch all records from the `e_product` model using the `findAll` method.
      // This assumes `e_product` is a Sequelize model or similar ORM model.
      const ep = await e_product.findAll();

      // Sending a successful HTTP response (status code 200) with the fetched data in JSON format.
      res.status(200).json({'data': ep});

      // Logging the fetched data to the console for debugging purposes.
      console.log('data:', ep);
   } catch (error) {
      // Logging an error message to the console if an exception occurs during the `findAll` operation.
      console.log("Error fetching products:", error.message);

      // Sending an HTTP error response (status code 500) with a generic error message in JSON format.
      res.status(500).json({message: "An error has occured while fetching products"});
   }
};