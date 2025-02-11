import express from "express";
import cors from "cors"; //  Import cors to allow frontend requests
import sequelize from "./config/connection.js";
import routes from "./routes/index.js";

const forceDatabaseRefresh = false;
const app = express();
const PORT = process.env.PORT || 3001;

//  Middleware
app.use(cors()); // Prevents frontend/backend CORS issues
app.use(express.json()); // Parses incoming JSON requests

//  Serves frontend static files (only after running `npm run build` in frontend)
app.use(express.static("../client/dist"));

//  Attach all API routes
app.use("/", routes);

//  Connect to database
sequelize.sync({ force: forceDatabaseRefresh }).then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
  });
});