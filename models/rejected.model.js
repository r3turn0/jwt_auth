require('dotenv').config();

module.exports = (sequelize, Sequelize) => {
    const Rejected = sequelize.define("rejected", 
      {
        data: {
            type: Sequelize.JSONB // Use JSONB for PostgreSQL to store JSON data
        },
        error: {
            type: Sequelize.STRING
        }
      },
      {
        schema: 'etc',
        timestamps: false, // Disables Sequelize's createdAt and updatedAt fields
        freezeTableName: true, // Ensures Sequelize won't pluralize the table name
        hasPrimaryKey: false, // Indicate no primary key
        noPrimaryKey: true // Indicate no primary key
      }
    );
    Rejected.removeAttribute('id'); // Remove the default 'id' attribute if it exists
    return Rejected;
};