import { DataTypes } from "sequelize/types"
import { sequelize } from "../utils/dbUtil"
import { User } from "./user"

export const EntityUsers = sequelize.define('EntityUsers', {
  entityId: { type: DataTypes.UUIDV4, allowNull: false, primaryKey: true, references: { model: User, key: 'id' } },
  userId: { type: DataTypes.STRING, allowNull: true },
})

export interface IEntityContract {
  userId: string
  entityId: string
}