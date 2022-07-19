import { DataTypes } from "sequelize/types"
import { sequelize } from "../utils/dbUtil"

export const Company = sequelize.define('Company', {
  id: { type: DataTypes.UUIDV4, allowNull: false, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
})

export interface ILocationContract {
  id: string
  name: string
}