import { Sequelize } from "sequelize";
 
const db = new Sequelize('base_db', 'newuser', 'password', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;