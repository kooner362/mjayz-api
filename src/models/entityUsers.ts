import { DataTypes } from "sequelize/types"
import { sequelize } from "../utils/dbUtil"
import { User } from "./user"

export const EntityUsers = sequelize.define('EntityUsers', {
  entityId: { type: DataTypes.UUIDV4, allowNull: false, primaryKey: true },
  userId: { type: DataTypes.STRING, allowNull: false, references: { model: User, key: 'id' }  },
})

export interface IEntityContract {
  userId: string
  entityId: string
}