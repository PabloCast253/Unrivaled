import { Sequelize } from "sequelize";
import fs from "fs/promises";
import path from "path"; // To work with file paths
import User from "./user.js"; // Import User model

const sequelize = new Sequelize("unrivaled_db", "your_db_username", "your_db_password", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

const initializeDatabase = async () => {
  try {
    const schemaPath = path.join(__dirname, "../db/schema.sql");
    const schema = await fs.readFile(schemaPath, "utf8");

    const queries = schema.split(";").filter((query) => query.trim());
    for (const query of queries) {
      await sequelize.query(query);
    }

    console.log("Database initialized successfully.");
  } catch (err) {
    if (err instanceof Error) {
      console.error("Failed to initialize database:", err.message);
    } else {
      console.error("Failed to initialize database:", err);
    }
    process.exit(1);
  }
};

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully.");

    await initializeDatabase();

    await sequelize.sync({ force: false });
    console.log("Models synchronized successfully.");
  } catch (err) {
    if (err instanceof Error) {
      console.error("Error starting server:", err.message);
    } else {
      console.error("Error starting server:", err);
    }
  }
};

startServer();

export { sequelize, User }; // ✅ Export both the database connection & models