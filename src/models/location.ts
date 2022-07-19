import { DataTypes } from "sequelize/types"
import { sequelize } from "../utils/dbUtil"
import { auditable, IAuditable } from "./auditable"
import { Company } from "./company"

export const Location = sequelize.define('Location', {
  id: { type: DataTypes.UUIDV4, allowNull: false, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  province: { type: DataTypes.STRING, allowNull: true },
  companyId: { type: DataTypes.STRING, references: { model: Company, key: 'id' }, allowNull: false},
  ...auditable
})

export interface ILocationContract extends IAuditable {
  id: string
  name: string
  province: string
  companyId: string
}