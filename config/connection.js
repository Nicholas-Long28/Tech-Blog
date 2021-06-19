const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env) {
    sequelize = new Sequelize(process.env);
} else {
    sequelize = new Sequelize(
        process.env.DB_name,
        process.env.DB_user,
        process.env.DB_password,
        {
            host: 'localhost',
            dialiect: 'mysql',
            port: 3306
        }
    );
}
