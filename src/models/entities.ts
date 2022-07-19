import { DataTypes } from "sequelize/types"
import { sequelize } from "../utils/dbUtil"
import { auditable } from "./auditable"

export const Entities = sequelize.define('Entities', {
  id: { type: DataTypes.UUIDV4, allowNull: false, primaryKey: true },
  parentEntityId: { type: DataTypes.STRING, allowNull: true, defaultValue: null },
  entityType: { type: DataTypes.STRING, allowNull: false },
  ...auditable
})

export interface IEntityContract {
  id: string
  parentEntityId: string
  entityType: string
}