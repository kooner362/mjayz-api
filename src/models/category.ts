import { DataTypes } from "sequelize/types"
import { sequelize } from "../utils/dbUtil"

export const Category = sequelize.define('Category', {
  id: { type: DataTypes.UUIDV4, allowNull: false, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  hexColor: { type: DataTypes.STRING, allowNull: true}
})

export interface ICategoryContract {
  id: string
  name: string
  hexColor: string
}