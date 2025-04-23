// {
//     internal_id: "numeric", 
//     externalid: "character varying",
//     displayname: "character varying",
//     item_name : "character varying",
//     item_number_and_name : "character varying",
//     vendor_name_code : "character varying",
//     salesdescription : "character varying",
//     sales_packaging_unit : "character varying",
//     sales_qty_per_pack_unit : "double precision",
//     item_color : "character varying",
//     item_size : "character varying",
//     pcs_in_a_box : "numeric",
//     sqft_by_pcs_sheet : "character varying",
//     sqft_by_box : "double precision",
//     price_by_uom : "double precision",
//     unitstype : "character varying",
//     stockunit : "character varying",
//     purchaseunit : "character varying",
//     saleunits : "character varying",
//     parent : "character varying",
//     subsidiary : "character varying",
//     includechildren : "character varying",
//     department : "character varying",
//     class : "numeric",
//     location : "character varying",
//     costingmethod : "character varying",
//     cost : "double precision",
//     purchasedescription : "character varying",
//     stockdescription : "character varying",
//     matchbilltoreceipt : "character varying",
//     usebins : "character varying",
//     reordermultiple : "character varying",
//     autoreorderpoint : "character varying",
//     autoleadtime : "character varying",
//     safetystocklevel : "character varying",
//     transferprice : "character varying",
//     preferredlocation : "character varying",
//     itembinnumber1 : "character varying",
//     vendor1_name : "character varying",
//     vendor1_purchaseprice : "double precision",
//     vendor1_schedule : "character varying",
//     vendor1_code : "character varying",
//     vendor2_name : "character varying",
//     vendor2_purchaseprice : "double precision",
//     vendor2_code : "character varying",
//     itempriceline1_itemprice : "double precision",
//     taxschedule : "character varying",
//     product_id : "character varying",
//     filename : "character varying",
//     load_id : "uuid",
//     date_upload : "timestamp without time zone",
//     uploaded_by : "character varying",
//     running_id : "integer",
//     pid : "character varying"
// }, 

require('dotenv').config();
const { QueryTypes } = require('sequelize'); // Importing QueryTypes for raw queries.

// Table: e_product
module.exports = async (sequelize, Sequelize) => {
    const i = await sequelize.query(
        `SELECT column_name, data_type 
         FROM information_schema.columns 
         WHERE table_name = 'e_product' AND column_name != 'id'`, // Excluding the column named 'id'
        { type: QueryTypes.SELECT }
    ).then((result) => {
        return result.map((item) => {
            return {
                column_name: item.column_name,
                data_type: item.data_type
            };
        });
    });
    const columns = await i; // Awaiting the result of the promise to get the columns.
    const columnNames = columns.map((item) => item.column_name); // Extracting column names from the result.
    const columnTypes = columns.map((item) => item.data_type); // Extracting data types from the result.
    const obj = {};
    for (let i = 0; i < columnNames.length; i++) {
        obj[columnNames[i]] = columnTypes[i]; // Creating an object with column names as keys and data types as values.
    }
    const e_product = sequelize.define("e_product",
    obj, // replace this with hardcoded columns if needed from the top of this file
    {
        schema: process.env.SCHEMA,
        timestamps: false, // Disables Sequelize's createdAt and updatedAt fields
        freezeTableName: true, // Ensures Sequelize won't pluralize the table name
        hasPrimaryKey: false, // Indicate no primary key
        noPrimaryKey: true // Indicate no primary key
    });
    return e_product;
  };

  // Table: e_shopify
  module.exports = async (sequelize, Sequelize) => {
    const i = await sequelize.query(
        `SELECT column_name, data_type 
         FROM information_schema.columns 
         WHERE table_name = 'e_shopify' AND column_name != 'id'`, // Excluding the column named 'id'
        { type: QueryTypes.SELECT }
    ).then((result) => {
        return result.map((item) => {
            return {
                column_name: item.column_name,
                data_type: item.data_type
            };
        });
    });
    const columns = await i; // Awaiting the result of the promise to get the columns.
    const columnNames = columns.map((item) => item.column_name); // Extracting column names from the result.
    const columnTypes = columns.map((item) => item.data_type); // Extracting data types from the result.
    const obj = {};
    for (let i = 0; i < columnNames.length; i++) {
        obj[columnNames[i]] = columnTypes[i]; // Creating an object with column names as keys and data types as values.
    }
    const e_shopify = sequelize.define("e_shopify",
    obj, // replace this with hardcoded columns if needed from the top of this file
    {
        schema: process.env.SCHEMA,
        timestamps: false, // Disables Sequelize's createdAt and updatedAt fields
        freezeTableName: true, // Ensures Sequelize won't pluralize the table name
        hasPrimaryKey: false, // Indicate no primary key
        noPrimaryKey: true // Indicate no primary key
    });
    return e_shopify;
  };

  // Table: la_nh_product
  module.exports = async (sequelize, Sequelize) => {
    const i = await sequelize.query(
        `SELECT column_name, data_type 
         FROM information_schema.columns 
         WHERE table_name = 'la_nh_product' AND column_name != 'id'`, // Excluding the column named 'id'
        { type: QueryTypes.SELECT }
    ).then((result) => {
        return result.map((item) => {
            return {
                column_name: item.column_name,
                data_type: item.data_type
            };
        });
    });
    const columns = await i; // Awaiting the result of the promise to get the columns.
    const columnNames = columns.map((item) => item.column_name); // Extracting column names from the result.
    const columnTypes = columns.map((item) => item.data_type); // Extracting data types from the result.
    const obj = {};
    for (let i = 0; i < columnNames.length; i++) {
        obj[columnNames[i]] = columnTypes[i]; // Creating an object with column names as keys and data types as values.
    }
    const la_nh_product = sequelize.define("la_nh_product",
    obj, // replace this with hardcoded columns if needed from the top of this file
    {
        schema: process.env.SCHEMA,
        timestamps: false, // Disables Sequelize's createdAt and updatedAt fields
        freezeTableName: true, // Ensures Sequelize won't pluralize the table name
        hasPrimaryKey: false, // Indicate no primary key
        noPrimaryKey: true // Indicate no primary key
    });
    return la_nh_product;
  };

  // Table: thd_product
  module.exports = async (sequelize, Sequelize) => {
    const i = await sequelize.query(
        `SELECT column_name, data_type 
         FROM information_schema.columns 
         WHERE table_name = 'thd_product' AND column_name != 'id'`, // Excluding the column named 'id'
        { type: QueryTypes.SELECT }
    ).then((result) => {
        return result.map((item) => {
            return {
                column_name: item.column_name,
                data_type: item.data_type
            };
        });
    });
    const columns = await i; // Awaiting the result of the promise to get the columns.
    const columnNames = columns.map((item) => item.column_name); // Extracting column names from the result.
    const columnTypes = columns.map((item) => item.data_type); // Extracting data types from the result.
    const obj = {};
    for (let i = 0; i < columnNames.length; i++) {
        obj[columnNames[i]] = columnTypes[i]; // Creating an object with column names as keys and data types as values.
    }
    const thd_product = sequelize.define("thd_product",
    obj, // replace this with hardcoded columns if needed from the top of this file
    {
        schema: process.env.SCHEMA,
        timestamps: false, // Disables Sequelize's createdAt and updatedAt fields
        freezeTableName: true, // Ensures Sequelize won't pluralize the table name
        hasPrimaryKey: false, // Indicate no primary key
        noPrimaryKey: true // Indicate no primary key
    });
    return thd_product;
  };

  // Table: tm_product
  module.exports = async (sequelize, Sequelize) => {
    const i = await sequelize.query(
        `SELECT column_name, data_type 
         FROM information_schema.columns 
         WHERE table_name = 'tm_product' AND column_name != 'id'`, // Excluding the column named 'id'
        { type: QueryTypes.SELECT }
    ).then((result) => {
        return result.map((item) => {
            return {
                column_name: item.column_name,
                data_type: item.data_type
            };
        });
    });
    const columns = await i; // Awaiting the result of the promise to get the columns.
    const columnNames = columns.map((item) => item.column_name); // Extracting column names from the result.
    const columnTypes = columns.map((item) => item.data_type); // Extracting data types from the result.
    const obj = {};
    for (let i = 0; i < columnNames.length; i++) {
        obj[columnNames[i]] = columnTypes[i]; // Creating an object with column names as keys and data types as values.
    }
    const tm_product = sequelize.define("tm_product",
    obj, // replace this with hardcoded columns if needed from the top of this file
    {
        schema: process.env.SCHEMA,
        timestamps: false, // Disables Sequelize's createdAt and updatedAt fields
        freezeTableName: true, // Ensures Sequelize won't pluralize the table name
        hasPrimaryKey: false, // Indicate no primary key
        noPrimaryKey: true // Indicate no primary key
    });
    return tm_product;
  };

  // Table: tm_shopify
  module.exports = async (sequelize, Sequelize) => {
    const i = await sequelize.query(
        `SELECT column_name, data_type 
         FROM information_schema.columns 
         WHERE table_name = 'tm_shopify' AND column_name != 'id'`, // Excluding the column named 'id'
        { type: QueryTypes.SELECT }
    ).then((result) => {
        return result.map((item) => {
            return {
                column_name: item.column_name,
                data_type: item.data_type
            };
        });
    });
    const columns = await i; // Awaiting the result of the promise to get the columns.
    const columnNames = columns.map((item) => item.column_name); // Extracting column names from the result.
    const columnTypes = columns.map((item) => item.data_type); // Extracting data types from the result.
    const obj = {};
    for (let i = 0; i < columnNames.length; i++) {
        obj[columnNames[i]] = columnTypes[i]; // Creating an object with column names as keys and data types as values.
    }
    const tm_shopify = sequelize.define("tm_shopify",
    obj, // replace this with hardcoded columns if needed from the top of this file
    {
        schema: process.env.SCHEMA,
        timestamps: false, // Disables Sequelize's createdAt and updatedAt fields
        freezeTableName: true, // Ensures Sequelize won't pluralize the table name
        hasPrimaryKey: false, // Indicate no primary key
        noPrimaryKey: true // Indicate no primary key
    });
    return tm_shopify;
  };
  