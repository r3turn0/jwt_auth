require('dotenv').config();

module.exports = (sequelize, Sequelize) => {
    const Info = sequelize.define("columns", 
      {
        column_name: {
            type: Sequelize.STRING
        },
        data_type: {
            type: Sequelize.STRING
        }
      },
      {
        schema: 'information_schema',
        timestamps: false, // Disables Sequelize's createdAt and updatedAt fields
        freezeTableName: true, // Ensures Sequelize won't pluralize the table name
        hasPrimaryKey: false, // Indicate no primary key
        noPrimaryKey: true // Indicate no primary key
      }
    );
return Info;
};