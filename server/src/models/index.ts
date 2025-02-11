import  sequelize  from '../config/connection.js'; // ✅ Ensure correct import
import User from './User.js'; // ✅ Import `User` directly (no factory function)

export { sequelize, User }; // ✅ Export both the database connection & models