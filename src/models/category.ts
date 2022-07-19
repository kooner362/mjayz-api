import { DataTypes } from "sequelize/types"
import { sequelize } from "../utils/dbUtil"
import { auditable, IAuditable } from "./auditable"

export const Category = sequelize.define('Category', {
  id: { type: DataTypes.UUIDV4, allowNull: false, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  hexColor: { type: DataTypes.STRING, allowNull: true},
  ...auditable
})

export interface ICategoryContract extends IAuditable {
  id: string
  name: string
  hexColor: string
}