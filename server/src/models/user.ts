import { DataTypes, type Sequelize, Model, type Optional } from "sequelize";
import  sequelize  from "../config/connection.js"; //  Ensure correct import
import bcrypt from "bcrypt";

//  Define the user attributes interface
interface UserAttributes {
  id: number;
  username: string;
  email: string;
  password: string;
}

//  Define creation attributes (id is optional)
interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

export class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  public id!: number;
  public username!: string;
  public email!: string;
  public password!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  //  Hash password before storing in the database
  public async setPassword(password: string) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(password, saltRounds);
  }
}

//  Initialize the User model (No need for a separate factory function)
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "users",
    sequelize, //  Ensure it connects to the database
    hooks: {
      beforeCreate: async (user: User) => {
        await user.setPassword(user.password);
      },
      beforeUpdate: async (user: User) => {
        await user.setPassword(user.password);
      },
    },
  }
);

//  Export the User model directly
export default User;
