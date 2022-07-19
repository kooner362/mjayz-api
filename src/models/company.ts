import { DataTypes } from "sequelize/types"
import { sequelize } from "../utils/dbUtil"
import { auditable, IAuditable } from "./auditable"

export const Company = sequelize.define('Company', {
  id: { type: DataTypes.UUIDV4, allowNull: false, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  ...auditable
})

export interface ILocationContract extends IAuditable {
  id: string
  name: string
}