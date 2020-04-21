import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import databaseInstance from "./index";

export class User extends Model {
  public id!: number;
  public firstName!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    firstName: {
      type: new DataTypes.STRING(128),
      allowNull: false
    },
    lastName: {
      type: new DataTypes.STRING(128),
      allowNull: false
    },
    email: {
      type: new DataTypes.STRING(128),
      allowNull: false
    },
    password: {
      type: new DataTypes.STRING(128),
      allowNull: false
    }
  },
  {
    tableName: "users",
    sequelize: databaseInstance // this bit is important
  }
);

// User.sync({ force: true }).then(() => '');
// This is to create the table alternative for migration.