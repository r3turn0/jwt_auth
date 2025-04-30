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
const { QueryTypes } = require('sequelize'); // Importing QueryTypes for raw queries.
const db = require("../models"); // Ensure e_product is correctly imported from the models
const tables = db.tables; // Accessing the tables from the database models.
const rejected = db.rejected; // Accessing the rejected model from the database models.

// GET REQUESTS
// Exporting an asynchronous function named `e_product` to handle a specific route or API endpoint.
exports.e_product = async (req, res, t) => {
   try {
      const p = await db.sequelize.query(`SELECT * FROM etc.e_product`, { type: QueryTypes.SELECT, transaction: t });
      // Attempting to fetch all records from the `e_product` model using the `findAll` method.
      // This assumes `e_product` is a Sequelize model or similar ORM model.
      // const ep = await e_product.findAll({
         //    attributes: {
            //       exclude: ['id'] // Excluding certain attributes from the result set.
            //    }
            // });
            // Sending a successful HTTP response (status code 200) with the fetched data in JSON format.
            res.status(200).send(JSON.stringify(p)); // Sending the fetched data as a JSON string response.
            // Logging the fetched data to the console for debugging purposes.
            console.log('data:', p);
         } catch (error) {
            // Logging an error message to the console if an exception occurs during the `findAll` operation.
            console.log("Error fetching products:", error.message);
            // Sending an HTTP error response (status code 500) with a generic error message in JSON format.
            res.status(500).json({message: "An error has occured while fetching products"});
         }
};
      
exports.e_shopify = async (req, res, t) => {
   try {
      const p = await db.sequelize.query(`SELECT * FROM etc.e_shopify`, { type: QueryTypes.SELECT, transaction: t });
      // Sending a successful HTTP response (status code 200) with the fetched data in JSON format.
      res.status(200).send(JSON.stringify(p)); // Sending the fetched data as a JSON string response.
      // Logging the fetched data to the console for debugging purposes.
      console.log('data:', p);
   } catch (error) {
      // Logging an error message to the console if an exception occurs during the `findAll` operation.
      console.log("Error fetching products:", error.message);
      // Sending an HTTP error response (status code 500) with a generic error message in JSON format.
      res.status(500).json({message: "An error has occured while fetching products"});
   }
};

exports.la_nh_product = async (req, res, t) => {
   try {
      const p = await db.sequelize.query(`SELECT * FROM etc.la_nh_product`, { type: QueryTypes.SELECT, transaction: t });
      // Sending a successful HTTP response (status code 200) with the fetched data in JSON format.
      res.status(200).send(JSON.stringify(p)); // Sending the fetched data as a JSON string response.
      // Logging the fetched data to the console for debugging purposes.
      console.log('data:', p);
   } catch (error) {
      // Logging an error message to the console if an exception occurs during the `findAll` operation.
      console.log("Error fetching products:", error.message);
      // Sending an HTTP error response (status code 500) with a generic error message in JSON format.
      res.status(500).json({message: "An error has occured while fetching products"});
   }
};

exports.thd_product = async (req, res, t) => {
   try {
      const p = await db.sequelize.query(`SELECT * FROM etc.thd_product`, { type: QueryTypes.SELECT, transaction: t });
      // Sending a successful HTTP response (status code 200) with the fetched data in JSON format.
      res.status(200).send(JSON.stringify(p)); // Sending the fetched data as a JSON string response.
      // Logging the fetched data to the console for debugging purposes.
      console.log('data:', p);
   } catch (error) {
      // Logging an error message to the console if an exception occurs during the `findAll` operation.
      console.log("Error fetching products:", error.message);
      // Sending an HTTP error response (status code 500) with a generic error message in JSON format.
      res.status(500).json({message: "An error has occured while fetching products"});
   }
};

exports.tm_product = async (req, res, t) => {
   try {
      const p = await db.sequelize.query(`SELECT * FROM etc.tm_product`, { type: QueryTypes.SELECT, transaction: t });
      // Sending a successful HTTP response (status code 200) with the fetched data in JSON format.
      res.status(200).send(JSON.stringify(p)); // Sending the fetched data as a JSON string response.
      // Logging the fetched data to the console for debugging purposes.
      console.log('data:', p);
   } catch (error) {
      // Logging an error message to the console if an exception occurs during the `findAll` operation.
      console.log("Error fetching products:", error.message);
      // Sending an HTTP error response (status code 500) with a generic error message in JSON format.
      res.status(500).json({message: "An error has occured while fetching products"});
   }
};

exports.tm_shopify = async (req, res, t) => {
   try {
      const p = await db.sequelize.query(`SELECT * FROM etc.tm_shopify`, { type: QueryTypes.SELECT, transaction: t });
      // Sending a successful HTTP response (status code 200) with the fetched data in JSON format.
      res.status(200).send(JSON.stringify(p)); // Sending the fetched data as a JSON string response.
      // Logging the fetched data to the console for debugging purposes.
      console.log('data:', p);
   } catch (error) {
      // Logging an error message to the console if an exception occurs during the `findAll` operation.
      console.log("Error fetching products:", error.message);
      // Sending an HTTP error response (status code 500) with a generic error message in JSON format.
      res.status(500).json({message: "An error has occured while fetching products"});
   }
};

// POST REQUESTS
exports.insert_e_product = async (req, res, t) => {
   const e_product = await tables.e_product; // Ensure `e_product` is correctly imported from the database models.
   const data = req.body; // Extracting the request body data.
   console.log('data:', data); // Logging the request body data for debugging purposes.
   let rec = {};
   try {
      // Check if `e_product` has a `create` method.
      if (typeof e_product.create !== 'function') {
         throw new Error("The 'create' method is not available on the 'e_product' model. Ensure it is a valid Sequelize model.");
      }
      // Attempting to insert all records from the `e_product` model using the `create` method.
      for (const record of data) {
         rec = record;
         await e_product.create(record, {transaction: t}); // Inserting each record into the `e_product` model.
         console.log('Inserted into e_product:', record); // Logging the inserted record for debugging purposes.
      }  
      // Sending a successful HTTP response (status code 200) with a success message.
      res.status(200).json({ message: 'Data inserted successfully' });
   } catch (error) {
      await rejected.create({
         data: rec,
         error: error.message
      });
      // Logging an error message to the console if an exception occurs during the `create` operation.
      console.log("Error inserting e_product:", error.message);
      // Sending an HTTP error response (status code 500) with a generic error message in JSON format.
      res.status(500).json({ message: "An error has occurred while inserting into e_product" });
   }
};

exports.insert_e_shopify = async (req, res, t) => {
   const e_shopify = await tables.e_shopify; // Ensure `e_shopify` is correctly imported from the database models.
   const data = req.body; // Extracting the request body data.
   console.log('data:', data); // Logging the request body data for debugging purposes.
   let rec = {};
   try {
      // Check if `e_shopify` has a `create` method.
      if (typeof e_shopify.create !== 'function') {
         throw new Error("The 'create' method is not available on the 'e_shopify' model. Ensure it is a valid Sequelize model.");
      }
      // Attempting to insert all records from the `e_shopify` model using the `create` method.
      for (const record of data) {
         rec = record;
         await e_shopify.create(record, {transaction: t}); // Inserting each record into the `e_shopify` model.
         console.log('Inserted into e_shopify:', record); // Logging the inserted record for debugging purposes.
      }
      // Sending a successful HTTP response (status code 200) with a success message.
      res.status(200).json({ message: 'Data inserted successfully' });
   } catch (error) {
      await rejected.create({
         data: rec,
         error: error.message
      });
      // Logging an error message to the console if an exception occurs during the `create` operation.
      console.log("Error inserting e_shopify:", error.message);
      // Sending an HTTP error response (status code 500) with a generic error message in JSON format.
      res.status(500).json({ message: "An error has occurred while inserting into e_shopify" });
   }
};

exports.insert_la_nh_product = async (req, res, t) => {
   const la_nh_product = await tables.la_nh_product; // Ensure `la_nh_product` is correctly imported from the database models.
   const data = req.body; // Extracting the request body data.
   console.log('data:', data); // Logging the request body data for debugging purposes.
   let rec = {};
   try {
      // Check if `la_nh_product` has a `create` method.
      if (typeof la_nh_product.create !== 'function') {
         throw new Error("The 'create' method is not available on the 'la_nh_product' model. Ensure it is a valid Sequelize model.");
      }
      // Attempting to insert all records from the `e_product` model using the `create` method.
      for (const record of data) {
         rec = record;
         await la_nh_product.create(record, {transaction: t}); // Inserting each record into the `la_nh_product` model.
         console.log('Inserted into la_nh_product:', record); // Logging the inserted record for debugging purposes.
      }
      // Sending a successful HTTP response (status code 200) with a success message.
      res.status(200).json({ message: 'Data inserted successfully' });
   } catch (error) {
      await rejected.create({
         data: rec,
         error: error.message
      });
      // Logging an error message to the console if an exception occurs during the `create` operation.
      console.log("Error inserting la_nh_product:", error.message);
      // Sending an HTTP error response (status code 500) with a generic error message in JSON format.
      res.status(500).json({ message: "An error has occurred while inserting into la_nh_product" });
   }
};

exports.insert_thd_product = async (req, res, t) => {
   const thd_product = await tables.thd_product; // Ensure `thd_product` is correctly imported from the database models.
   const data = req.body; // Extracting the request body data.
   console.log('data:', data); // Logging the request body data for debugging purposes.
   let rec = {};
   try {
      // Check if `thd_product` has a `create` method.
      if (typeof thd_product.create !== 'function') {
         throw new Error("The 'create' method is not available on the 'thd_product' model. Ensure it is a valid Sequelize model.");
      }
      // Attempting to insert all records from the `thd_product` model using the `create` method.
      for (const record of data) {
         rec = record;
         await thd_product.create(record, {transaction: t}); // Inserting each record into the `thd_product` model.
         console.log('Inserted into thd_product:', record); // Logging the inserted record for debugging purposes.
      }
      // Sending a successful HTTP response (status code 200) with a success message.
      res.status(200).json({ message: 'Data inserted successfully' });
   } catch (error) {
      await rejected.create({
         data: rec,
         error: error.message
      });
      // Logging an error message to the console if an exception occurs during the `create` operation.
      console.log("Error inserting thd_product:", error.message);
      // Sending an HTTP error response (status code 500) with a generic error message in JSON format.
      res.status(500).json({ message: "An error has occurred while inserting into thd_product" });
   }
};

exports.insert_tm_product = async (req, res, t) => {
   const tm_product = await tables.tm_product; // Ensure `tm_product` is correctly imported from the database models.
   const data = req.body; // Extracting the request body data.
   console.log('data:', data); // Logging the request body data for debugging purposes.
   let rec = {};
   try {
      // Check if `tm_product` has a `create` method.
      if (typeof tm_product.create !== 'function') {
         throw new Error("The 'create' method is not available on the 'tm_product' model. Ensure it is a valid Sequelize model.");
      }
      // Attempting to insert all records from the `tm_product` model using the `create` method.
      for (const record of data) {
         rec = record;
         await tm_product.create(record, {transaction: t}); // Inserting each record into the `tm_product` model.
         console.log('Inserted into tm_product:', record); // Logging the inserted record for debugging purposes.
      }
      // Sending a successful HTTP response (status code 200) with a success message.
      res.status(200).json({ message: 'Data inserted successfully' });
   } catch (error) {
      await rejected.create({
         data: rec,
         error: error.message
      });
      // Logging an error message to the console if an exception occurs during the `create` operation.
      console.log("Error inserting tm_product:", error.message);
      // Sending an HTTP error response (status code 500) with a generic error message in JSON format.
      res.status(500).json({ message: "An error has occurred while inserting into tm_product" });
   }
};

exports.insert_tm_shopify = async (req, res, t) => {
   const tm_shopify = await tables.tm_shopify; // Ensure `tm_shopify` is correctly imported from the database models.
   const data = req.body; // Extracting the request body data.
   console.log('data:', data); // Logging the request body data for debugging purposes.
   let rec = {};
   try {
      // Check if `tm_shopify` has a `create` method.
      if (typeof tm_shopify.create !== 'function') {
         throw new Error("The 'create' method is not available on the 'tm_shopify' model. Ensure it is a valid Sequelize model.");
      }
      // Attempting to insert all records from the `tm_shopify` model using the `create` method.
      for (const record of data) {
         rec = record;
         await tm_shopify.create(record, {transaction: t}); // Inserting each record into the `tm_shopify` model.
         console.log('Inserted into tm_shopify:', record); // Logging the inserted record for debugging purposes.
      }
      // Sending a successful HTTP response (status code 200) with a success message.
      res.status(200).json({ message: 'Data inserted successfully' });
   } catch (error) {
      await rejected.create({
         data: rec,
         error: error.message
      });
      // Logging an error message to the console if an exception occurs during the `create` operation.
      console.log("Error inserting tm_shopify:", error.message);
      // Sending an HTTP error response (status code 500) with a generic error message in JSON format.
      res.status(500).json({ message: "An error has occurred while inserting into tm_shopify" });
   }
};

// PUT REQUESTS
exports.update_e_product = async (req, res, t) => {
   const e_product = await tables.e_product; // Ensure `e_product` is correctly imported from the database models.
   const id = req.query.param //:id 
   const data = req.body; // Extracting the request body data.
   console.log('data:', data); // Logging the request body data for debugging purposes.
   let rec = {};
   try {
      // Attempting to insert all records from the `e_product` model using the `update` method.
      for (const record of data) {
         rec = record;
         if(id === record.internal_id) {
            await e_product.update(record, {
               transaction: t,
               where: { 
                  internal_id: record.internal_id 
               } 
            }); // Updating each record into the `e_product` model.
            console.log('Updated e_product:', record); // Logging the inserted record for debugging purposes.
         }
      }
      // Sending a successful HTTP response (status code 200) with a success message.
      res.status(200).json({ message: 'Data updated successfully' });
   } catch (error) {
      await rejected.create({
         data: rec,
         error: error.message
      });
      // Logging an error message to the console if an exception occurs during the `update` operation.
      console.log("Error update e_product:", error.message);
      // Sending an HTTP error response (status code 500) with a generic error message in JSON format.
      res.status(500).json({ message: "An error has occurred while updating e_product" });
   }
};

exports.update_e_shopify = async (req, res, t) => {
   const e_shopify = await tables.e_shopify; // Ensure `e_shopify` is correctly imported from the database models.
   const id = req.query.param //:id
   const data = req.body; // Extracting the request body data.
   console.log('data:', data); // Logging the request body data for debugging purposes.
   let rec = {};
   try {
      // Attempting to insert all records from the `e_shopify` model using the `update` method.
      if(id === record.variant_sku) {
         for (const record of data) {
            rec = record;
            await e_shopify.update(record, {
               transaction: t,
               where: { 
                  variant_sku: id
               } 
            }); // Updating each record into the `e_shopify` model.
            console.log('Updated e_shopify:', record); // Logging the inserted record for debugging purposes.
         }
      }
      // Sending a successful HTTP response (status code 200) with a success message.
      res.status(200).json({ message: 'Data updated successfully' });
   } catch (error) {
      await rejected.create({
         data: rec,
         error: error.message
      });
      // Logging an error message to the console if an exception occurs during the `update` operation.
      console.log("Error update e_shopify:", error.message);
      // Sending an HTTP error response (status code 500) with a generic error message in JSON format.
      res.status(500).json({ message: "An error has occurred while updating e_shopify" });
   }
};

exports.update_la_nh_product = async (req, res, t) => {
   const la_nh_product = await tables.la_nh_product; // Ensure `la_nh_product` is correctly imported from the database models.
   const id = req.query.param //:id
   const data = req.body; // Extracting the request body data.
   console.log('data:', data); // Logging the request body data for debugging purposes.
   let rec = {};
   try {
      if (id === record.externalid) {
      // Attempting to insert all records from the `la_nh_product` model using the `update` method.
         for (const record of data) {
            rec = record;
            await la_nh_product.update(record, {
               transaction: t,
               where: { 
                  externalid: id
               } 
            }); // Updating each record into the `la_nh_product` model.
            console.log('Updated la_nh_product:', record); // Logging the inserted record for debugging purposes.
         }
      }
      // Sending a successful HTTP response (status code 200) with a success message.
      res.status(200).json({ message: 'Data updated successfully' });
   } catch (error) {
      await rejected.create({
         data: rec,
         error: error.message
      });
      // Logging an error message to the console if an exception occurs during the `update` operation.
      console.log("Error update la_nh_product:", error.message);
      // Sending an HTTP error response (status code 500) with a generic error message in JSON format.
      res.status(500).json({ message: "An error has occurred while updating la_nh_product" });
   }
};

exports.update_thd_product = async (req, res, t) => {
   const thd_product = await tables.thd_product; // Ensure `thd_product` is correctly imported from the database models.
   const id = req.query.param //:id
   const data = req.body; // Extracting the request body data.
   console.log('data:', data); // Logging the request body data for debugging purposes.
   let rec = {};
   try {
      if(id === record.internal_id) {
         // Attempting to insert all records from the `thd_product` model using the `update` method.
         for (const record of data) {
            rec = record;
            await thd_product.update(record, {
               transaction: t,
               where: { 
                  internal_id: id
               } 
            }); // Updating each record into the `thd_product` model.
            console.log('Updated thd_product:', record); // Logging the inserted record for debugging purposes.
         }
      }
      // Sending a successful HTTP response (status code 200) with a success message.
      res.status(200).json({ message: 'Data updated successfully' });
   } catch (error) {
      await rejected.create({
         data: rec,
         error: error.message
      });
      // Logging an error message to the console if an exception occurs during the `update` operation.
      console.log("Error update thd_product:", error.message);
      // Sending an HTTP error response (status code 500) with a generic error message in JSON format.
      res.status(500).json({ message: "An error has occurred while updating thd_product" });
   }
};

exports.update_tm_product = async (req, res, t) => {
   const tm_product = await tables.tm_product; // Ensure `tm_product` is correctly imported from the database models.
   const id = req.query.param //:id
   const data = req.body; // Extracting the request body data.
   console.log('data:', data); // Logging the request body data for debugging purposes.
   let rec = {};
   try {
      if(id === record.externalid) {
         // Attempting to insert all records from the `tm_product` model using the `update` method.
         for (const record of data) {
            rec = record;
            await tm_product.update(record, {
               transaction: t,
               where: { 
                  externalid: id
               } 
            }); // Updating each record into the `tm_product` model.
            console.log('Updated tm_product:', record); // Logging the inserted record for debugging purposes.
         }
      }
      // Sending a successful HTTP response (status code 200) with a success message.
      res.status(200).json({ message: 'Data updated successfully' });
   } catch (error) {
      await rejected.create({
         data: rec,
         error: error.message
      });
      // Logging an error message to the console if an exception occurs during the `update` operation.
      console.log("Error update tm_product:", error.message);
      // Sending an HTTP error response (status code 500) with a generic error message in JSON format.
      res.status(500).json({ message: "An error has occurred while updating tm_product" });
   }
};

exports.update_tm_shopify = async (req, res, t) => {
   const tm_shopify = await tables.tm_shopify; // Ensure `tm_shopify` is correctly imported from the database models.
   const id = req.query.param //:id
   const data = req.body; // Extracting the request body data.
   console.log('data:', data); // Logging the request body data for debugging purposes.
   let rec = {};
   try {
      if(id === record.variant_sku) {
         // Attempting to insert all records from the `tm_shopify` model using the `update` method.
         for (const record of data) {
            rec = record;
            await tm_shopify.update(record, {
               transaction: t,
               where: { 
                  variant_sku: id
               } 
            }); // Updating each record into the `tm_shopify` model.
            console.log('Updated tm_shopify:', record); // Logging the inserted record for debugging purposes.
         }
      }
      // Sending a successful HTTP response (status code 200) with a success message.
      res.status(200).json({ message: 'Data updated successfully' });
   } catch (error) {
      await rejected.create({
         data: rec,
         error: error.message
      });
      // Logging an error message to the console if an exception occurs during the `update` operation.
      console.log("Error update tm_shopify:", error.message);
      // Sending an HTTP error response (status code 500) with a generic error message in JSON format.
      res.status(500).json({ message: "An error has occurred while updating tm_shopify" });
   }
};

// DELETE REQUESTS

exports.delete_e_product = async (req, res, t) => {
   const e_product = await tables.e_product; // Ensure `e_product` is correctly imported from the database models.
   const id = req.params.id || req.query.id; // Extracting the parameter from the route or query string.
   if (!id) {
      console.log("Error: Missing 'param' in query.");
      return res.status(400).json({ message: "Missing 'param' in query." });
   }
   //const data = req.body; // Extracting the request body data.
   console.log('Finding record with id:', id); 
   let data;
   try {
      data = await e_product.findAll({
         where: {
            internal_id: id // Filtering records based on the `internal_id` field.
         }
      });
   }
   catch (error) {
      console.log("Error fetching e_product:", error.message);
   }
   console.log('data:', data); // Logging the request body data for debugging purposes.
   let rec = {};
   try {
      // Attempting to delete a record from the `e_product` model using the `delete` method.
      for (const record of data) {
         rec = record;
         if(id === record.internal_id) {
            await e_product.destroy({
               transaction: t,
               where: { 
                  internal_id: id
               } 
            }); // Deleting each record in the `e_product` model.
            console.log('Deleted e_product:', record); // Logging the inserted record for debugging purposes.
         }
      }
      // Sending a successful HTTP response (status code 200) with a success message.
      res.status(200).json({ message: 'Record deleted successfully' });
   } catch (error) {
      await rejected.create({
         data: rec,
         error: error.message
      });
      // Logging an error message to the console if an exception occurs during the `delete` operation.
      console.log("Error delete e_product:", error.message);
      // Sending an HTTP error response (status code 500) with a generic error message in JSON format.
      res.status(500).json({ message: "An error has occurred while deleting e_product" });
   }
};

exports.delete_e_shopify = async (req, res, t) => {
   const e_shopify = await tables.e_shopify; // Ensure `e_shopify` is correctly imported from the database models.
   const id = req.params.id || req.query.id; // Extracting the parameter from the route or query string.
   if (!id) {
      console.log("Error: Missing 'param' in query.");
      return res.status(400).json({ message: "Missing 'param' in query." });
   }
   //const data = req.body; // Extracting the request body data.
   console.log('Finding record with id:', id); 
   let data;
   try {
      data = await e_shopify.findAll({
         where: {
            variant_sku: id // Filtering records based on the `internal_id` field.
         }
      });
   }
   catch (error) {
      console.log("Error fetching e_shopify:", error.message);
   }
   console.log('data:', data); // Logging the request body data for debugging purposes.
   let rec = {};
   try {
      // Attempting to delete a record from the `e_shopify` model using the `delete` method.
      for (const record of data) {
         rec = record;
         if(id === record.internal_id) {
            await e_shopify.destroy({
               transaction: t,
               where: { 
                  variant_sku: id
               } 
            }); // Deleting each record in the `e_shopify` model.
            console.log('Deleted e_shopify:', record); // Logging the inserted record for debugging purposes.
         }
      }
      // Sending a successful HTTP response (status code 200) with a success message.
      res.status(200).json({ message: 'Record deleted successfully' });
   } catch (error) {
      await rejected.create({
         data: rec,
         error: error.message
      });
      // Logging an error message to the console if an exception occurs during the `delete` operation.
      console.log("Error delete e_shopify:", error.message);
      // Sending an HTTP error response (status code 500) with a generic error message in JSON format.
      res.status(500).json({ message: "An error has occurred while deleting e_shopify" });
   }
};

exports.delete_la_nh_product = async (req, res, t) => {
   const la_nh_product = await tables.la_nh_product; // Ensure `la_nh_product` is correctly imported from the database models.
   const id = req.params.id || req.query.id; // Extracting the parameter from the route or query string.
   if (!id) {
      console.log("Error: Missing 'param' in query.");
      return res.status(400).json({ message: "Missing 'param' in query." });
   }
   //const data = req.body; // Extracting the request body data.
   console.log('Finding record with id:', id); 
   let data;
   try {
      data = await la_nh_product.findAll({
         where: {
            external_id: id // Filtering records based on the `external_id` field.
         }
      });
   }
   catch (error) {
      console.log("Error fetching la_nh_product:", error.message);
   }
   console.log('data:', data); // Logging the request body data for debugging purposes.
   let rec = {};
   try {
      // Attempting to delete a record from the `la_nh_product` model using the `delete` method.
      for (const record of data) {
         rec = record;
         if(id === record.external_id) {
            await la_nh_product.destroy({
               transaction: t,
               where: { 
                  external_id: id
               } 
            }); // Deleting each record in the `la_nh_product` model.
            console.log('Deleted la_nh_product:', record); // Logging the inserted record for debugging purposes.
         }
      }
      // Sending a successful HTTP response (status code 200) with a success message.
      res.status(200).json({ message: 'Record deleted successfully' });
   } catch (error) {
      await rejected.create({
         data: rec,
         error: error.message
      });
      // Logging an error message to the console if an exception occurs during the `delete` operation.
      console.log("Error delete la_nh_product:", error.message);
      // Sending an HTTP error response (status code 500) with a generic error message in JSON format.
      res.status(500).json({ message: "An error has occurred while deleting la_nh_product" });
   }
};

exports.delete_thd_product = async (req, res, t) => {
   const thd_product = await tables.thd_product; // Ensure `thd_product` is correctly imported from the database models.
   const id = req.params.id || req.query.id; // Extracting the parameter from the route or query string.
   if (!id) {
      console.log("Error: Missing 'param' in query.");
      return res.status(400).json({ message: "Missing 'param' in query." });
   }
   //const data = req.body; // Extracting the request body data.
   console.log('Finding record with id:', id); 
   let data;
   try {
      data = await thd_product.findAll({
         where: {
            internal_id: id // Filtering records based on the `internal_id` field.
         }
      });
   }
   catch (error) {
      console.log("Error fetching thd_product:", error.message);
   }
   console.log('data:', data); // Logging the request body data for debugging purposes.
   let rec = {};
   try {
      // Attempting to delete a record from the `thd_product` model using the `delete` method.
      for (const record of data) {
         rec = record;
         if(id === record.internal_id) {
            await thd_product.destroy({
               transaction: t,
               where: { 
                  internal_id: id
               } 
            }); // Deleting each record in the `thd_product` model.
            console.log('Deleted thd_product:', record); // Logging the inserted record for debugging purposes.
         }
      }
      // Sending a successful HTTP response (status code 200) with a success message.
      res.status(200).json({ message: 'Record deleted successfully' });
   } catch (error) {
      await rejected.create({
         data: rec,
         error: error.message
      });
      // Logging an error message to the console if an exception occurs during the `delete` operation.
      console.log("Error delete thd_product:", error.message);
      // Sending an HTTP error response (status code 500) with a generic error message in JSON format.
      res.status(500).json({ message: "An error has occurred while deleting thd_product" });
   }
};

exports.delete_tm_product = async (req, res, t) => {
   const tm_product = await tables.tm_product; // Ensure `tm_product` is correctly imported from the database models.
   const id = req.params.id || req.query.id; // Extracting the parameter from the route or query string.
   if (!id) {
      console.log("Error: Missing 'param' in query.");
      return res.status(400).json({ message: "Missing 'param' in query." });
   }
   //const data = req.body; // Extracting the request body data.
   console.log('Finding record with id:', id); 
   let data;
   try {
      data = await tm_product.findAll({
         where: {
            externalid: id // Filtering records based on the `externalid` field.
         }
      });
   }
   catch (error) {
      console.log("Error fetching tm_product:", error.message);
   }
   console.log('data:', data); // Logging the request body data for debugging purposes.
   let rec = {};
   try {
      // Attempting to delete a record from the `tm_product` model using the `delete` method.
      for (const record of data) {
         rec = record;
         if(id === record.externalid) {
            await tm_product.destroy({
               transaction: t,
               where: { 
                  externalid: id
               } 
            }); // Deleting each record in the `tm_product` model.
            console.log('Deleted tm_product:', record); // Logging the inserted record for debugging purposes.
         }
      }
      // Sending a successful HTTP response (status code 200) with a success message.
      res.status(200).json({ message: 'Record deleted successfully' });
   } catch (error) {
      await rejected.create({
         data: rec,
         error: error.message
      });
      // Logging an error message to the console if an exception occurs during the `delete` operation.
      console.log("Error delete tm_product:", error.message);
      // Sending an HTTP error response (status code 500) with a generic error message in JSON format.
      res.status(500).json({ message: "An error has occurred while deleting tm_product" });
   }
};

exports.delete_tm_shopify = async (req, res, t) => {
   const tm_shopify = await tables.tm_shopify; // Ensure `tm_shopify` is correctly imported from the database models.
   const id = req.params.id || req.query.id; // Extracting the parameter from the route or query string.
   if (!id) {
      console.log("Error: Missing 'param' in query.");
      return res.status(400).json({ message: "Missing 'param' in query." });
   }
   //const data = req.body; // Extracting the request body data.
   console.log('Finding record with id:', id); 
   let data;
   try {
      data = await tm_shopify.findAll({
         where: {
            variant_sku: id // Filtering records based on the `externalid` field.
         }
      });
   }
   catch (error) {
      console.log("Error fetching tm_shopify:", error.message);
   }
   console.log('data:', data); // Logging the request body data for debugging purposes.
   let rec = {};
   try {
      // Attempting to delete a record from the `tm_shopify` model using the `delete` method.
      for (const record of data) {
         rec = record;
         if(id === record.externalid) {
            await tm_shopify.destroy({
               transaction: t,
               where: { 
                  variant_sku: id
               } 
            }); // Deleting each record in the `tm_shopify` model.
            console.log('Deleted tm_shopify:', record); // Logging the inserted record for debugging purposes.
         }
      }
      // Sending a successful HTTP response (status code 200) with a success message.
      res.status(200).json({ message: 'Record deleted successfully' });
   } catch (error) {
      await rejected.create({
         data: rec,
         error: error.message
      });
      // Logging an error message to the console if an exception occurs during the `deleted` operation.
      console.log("Error deleting tm_shopify:", error.message);
      // Sending an HTTP error response (status code 500) with a generic error message in JSON format.
      res.status(500).json({ message: "An error has occurred while deleting tm_shopify" });
   }
};