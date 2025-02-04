import dotenv from "dotenv";
dotenv.config();  // ✅ Load environment variables before anything else

import { Sequelize } from "sequelize";

console.log("🔍 DB_USER:", process.env.DB_USER);      // Debugging logs
console.log("🔍 DB_PASSWORD:", process.env.DB_PASSWORD);
console.log("🔍 DB_NAME:", process.env.DB_NAME);

const sequelize = new Sequelize(
  process.env.DB_NAME || "",
  process.env.DB_USER || "",
  process.env.DB_PASSWORD || "",
  {
    host: "localhost",
    dialect: "postgres",
    dialectOptions: {
      decimalNumbers: true,
    },
  }
);

export { sequelize };