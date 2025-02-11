import  sequelize  from "../config/connection.js"; // ✅ Ensure correct import
import { User } from "../models/User.js"; // ✅ Ensure proper import
import { Post } from "../models/Post.js";
import bcrypt from "bcrypt";

/**
 * Function to seed the database with initial users and posts.
 */
const seedDatabase = async () => {
  try {
    console.log("🌱 Starting database seeding...");

    // ✅ Ensure database connection before seeding
    await sequelize.authenticate();
    console.log("✅ Database connection successful");

    // ✅ Sync database: Drops & recreates tables if `force: true`
    await sequelize.sync({ force: true }); // ⚠ WARNING: This deletes all existing data!
    console.log("✅ Database schema reset & synced!");

    // ✅ Hash passwords before storing in the database
    const hashedPassword = await bcrypt.hash("password123", 10);

    // ✅ Create two users in the `users` table
    const user1 = await User.create({
      username: "admin",
      email: "admin@example.com",
      password: hashedPassword, // ✅ Store hashed password for security
    });

    const user2 = await User.create({
      username: "player1",
      email: "player1@example.com",
      password: hashedPassword,
    });

    console.log("✅ Users seeded!");

    // ✅ Seed initial posts for forum discussions
    await Post.bulkCreate([
      {
        character_name: "Hela",
        user_id: user1.id, // ✅ Link post to user1 (admin)
        content: "Hela is my main! Her abilities are insane!",
      },
      {
        character_name: "Iron Man",
        user_id: user2.id, // ✅ Link post to user2 (player1)
        content: "Iron Man's aerial combat is really strong. Thoughts?",
      },
      {
        character_name: "Black Panther",
        user_id: user1.id, // ✅ Link another post to user1
        content: "Black Panther's mobility makes him a top-tier hero!",
      },
    ]);

    console.log("✅ Posts seeded!");
    console.log("🚀 Seeding complete!");

    // ✅ Exit the script after successful seeding
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1); // Exit with error code
  }
};

// ✅ Run the function when executing `ts-node server/seeds/seeds.ts`
seedDatabase();