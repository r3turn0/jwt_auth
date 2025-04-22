//   id: {
//     type: Sequelize.INTEGER,
//     primaryKey: true
//   },
//   name: {
//     type: Sequelize.STRING
//   }
require('dotenv').config();

module.exports = (sequelize, Sequelize) => {
        const E_Product = sequelize.define("e_product", {
            internal_id: "numeric",
            externalid: "character varying",
            displayname: "character varying",
            item_name : "character varying",
            item_number_and_name : "character varying",
            vendor_name_code : "character varying",
            salesdescription : "character varying",
            sales_packaging_unit : "character varying",
            sales_qty_per_pack_unit : "double precision",
            item_color : "character varying",
            item_size : "character varying",
            pcs_in_a_box : "numeric",
            sqft_by_pcs_sheet : "character varying",
            sqft_by_box : "double precision",
            price_by_uom : "double precision",
            unitstype : "character varying",
            stockunit : "character varying",
            purchaseunit : "character varying",
            saleunits : "character varying",
            parent : "character varying",
            subsidiary : "character varying",
            includechildren : "character varying",
            department : "character varying",
            class : "numeric",
            location : "character varying",
            costingmethod : "character varying",
            cost : "double precision",
            purchasedescription : "character varying",
            stockdescription : "character varying",
            matchbilltoreceipt : "character varying",
            usebins : "character varying",
            reordermultiple : "character varying",
            autoreorderpoint : "character varying",
            autoleadtime : "character varying",
            safetystocklevel : "character varying",
            transferprice : "character varying",
            preferredlocation : "character varying",
            itembinnumber1 : "character varying",
            vendor1_name : "character varying",
            vendor1_purchaseprice : "double precision",
            vendor1_schedule : "character varying",
            vendor1_code : "character varying",
            vendor2_name : "character varying",
            vendor2_purchaseprice : "double precision",
            vendor2_code : "character varying",
            itempriceline1_itemprice : "double precision",
            taxschedule : "character varying",
            product_id : "character varying",
            filename : "character varying",
            load_id : "uuid",
            date_upload : "timestamp without time zone",
            uploaded_by : "character varying",
            running_id : "integer",
            pid : "character varying"
        },
        {
            schema: process.env.SCHEMA,
            timestamps: false, // Disables Sequelize's createdAt and updatedAt fields
            freezeTableName: true, // Ensures Sequelize won't pluralize the table name
            hasPrimaryKey: false // Indicate no primary key
        }
    );
    return E_Product;
  };
  