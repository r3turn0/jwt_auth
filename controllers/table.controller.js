// const ep = await e_product.findAll({
//    attributes: [
//      "internal_id", 
//      "externalid", 
//      "displayname", 
//      "item_name", 
//      "item_number_and_name",
//      "vendor_name_code",
//      "salesdescription",
//      "sales_packaging_unit",
//      "sales_qty_per_pack_unit",
//      "item_color",
//      "item_size",
//      "pcs_in_a_box",
//      "sqft_by_pcs_sheet",
//      "sqft_by_box",
//      "price_by_uom",
//      "unitstype",
//      "stockunit",
//      "purchaseunit",
//      "saleunits",
//      "parent",
//      "subsidiary",
//      "includechildren",
//      "department",
//      "class",
//      "location",
//      "costingmethod",
//      "cost",
//      "purchasedescription",
//      "stockdescription",
//      "matchbilltoreceipt",
//      "usebins",
//      "reordermultiple",
//      "autoreorderpoint",
//      "autoleadtime",
//      "safetystocklevel",
//      "transferprice",
//      "preferredlocation",
//      "itembinnumber1",
//      "vendor1_name",
//      "vendor1_purchaseprice",
//      "vendor1_schedule",
//      "vendor1_code",
//      "vendor2_name",
//      "vendor2_purchaseprice",
//      "vendor2_code",
//      "itempriceline1_itemprice",
//      "taxschedule",
//      "product_id",
//      "filename",
//      "load_id",
//      "date_upload",
//      "uploaded_by",
//      "running_id",
//      "pid",
//    ],
//  });
const db = require("../models"); // Ensure e_product is correctly imported from the models
const e_product = db.e_product; // Accessing the `e_product` model from the database models.
const { QueryTypes } = require('sequelize'); // Importing QueryTypes for raw queries.

// Exporting an asynchronous function named `e_product` to handle a specific route or API endpoint.
exports.e_product = async (req, res) => {
   try {
      const ep = await db.sequelize.query(`SELECT * FROM etc.e_product`, { type: QueryTypes.SELECT });
      // Attempting to fetch all records from the `e_product` model using the `findAll` method.
      // This assumes `e_product` is a Sequelize model or similar ORM model.
      // const ep = await e_product.findAll({
      //    attributes: {
      //       exclude: ['id'] // Excluding certain attributes from the result set.
      //    }
      // });
      // Sending a successful HTTP response (status code 200) with the fetched data in JSON format.
      res.status(200).send(JSON.stringify(ep)); // Sending the fetched data as a JSON string response.
      // Logging the fetched data to the console for debugging purposes.
      console.log('data:', ep);
   } catch (error) {
      // Logging an error message to the console if an exception occurs during the `findAll` operation.
      console.log("Error fetching products:", error.message);
      // Sending an HTTP error response (status code 500) with a generic error message in JSON format.
      res.status(500).json({message: "An error has occured while fetching products"});
   }
};

exports.insert_e_product = async (req, res) => {
   const data = req.body; // Extracting the request body data.
   console.log('data:', data); // Logging the request body data for debugging purposes.
   try {
      // Attempting to insert all records from the `e_product` model using the `create` method.
      // This assumes `e_product` is a Sequelize model or similar ORM model.
      for(const record of data) {
         let keys = Object.keys(record); // Extracting the keys from the record object.
         let values = Object.values(record); // Extracting the values from the record object.
         console.log('keys:', keys); // Logging the keys for debugging purposes.
         console.log('values:', values); // Logging the values for debugging purposes.
         const ep = await e_product.create({
            keys: values // Creating a new record in the `e_product` table with the extracted keys and values.
         });
         console.log('Inserting record:', ep)
      }
      // Sending a successful HTTP response (status code 200) with the fetched data in JSON format.
      res.status(200).json({ 'message': 'Data inserted successfully'});
      // Logging the fetched data to the console for debugging purposes.
   } catch (error) {
      // Logging an error message to the console if an exception occurs during the `findAll` operation.
      console.log("Error inserting e_product:", error.message);
      // Sending an HTTP error response (status code 500) with a generic error message in JSON format.
      res.status(500).json({message: "An error has occured while inserting into e_product"});
   }
};