import { DataTypes, Sequelize, Model, Optional } from "sequelize";
import  sequelize from "../config/connection.js"; // ✅ Ensure correct import
import { User } from "./User.js";

/**
 * Defines the attributes for the Post model.
 */
interface PostAttributes {
  id: number;
  character_name: string;
  user_id: number;
  content: string;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * Defines the attributes required when creating a new post.
 * The "id" field is optional because it is auto-generated.
 */
interface PostCreationAttributes extends Optional<PostAttributes, "id"> {}

/**
 * Post Model: Represents a forum post in the database.
 */
class Post
  extends Model<PostAttributes, PostCreationAttributes>
  implements PostAttributes
{
  public id!: number;
  public character_name!: string;
  public user_id!: number;
  public content!: string;
  
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

/**
 * ✅ Initialize the Post model immediately upon import.
 */
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    character_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "posts",
    sequelize, // ✅ Ensure it's connected to the database
    timestamps: true,
  }
);

/**
 * ✅ Define relationships:
 * - Each post belongs to a user.
 * - If a user is deleted, all their posts are removed (CASCADE).
 */
Post.belongsTo(User, { foreignKey: "user_id", onDelete: "CASCADE" });

export { Post }; // ✅ Properly export the initialized Post model