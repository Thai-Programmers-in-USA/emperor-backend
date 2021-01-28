const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize(
    process.env.DB_SCHEMA || 'postgres',
    process.env.DB_USER || 'postgres',
    process.env.DB_PASSWORD || 'postgres',
    {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 5432,
        dialect: 'postgres',
        dialectOptions: {
            ssl: process.env.DB_SSL == "true"
        }
    });
const Product = sequelize.define('Product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    code: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rating: {
        type: DataTypes.DOUBLE,
        allowNull: true
    }
});
const Category = sequelize.define('Category', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})
module.exports = {
    sequelize: sequelize,
    Product: Product,
    Category: Category
}
