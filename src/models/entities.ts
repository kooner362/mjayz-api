import { DataTypes } from "sequelize/types"
import { sequelize } from "../utils/dbUtil"

export const Entities = sequelize.define('Entities', {
  id: { type: DataTypes.UUIDV4, allowNull: false, primaryKey: true },
  parentEntityId: { type: DataTypes.STRING, allowNull: true },
  entityType: { type: DataTypes.STRING, allowNull: false }
})

export interface IEntityContract {
  id: string
  parentEntityId: string
  entityType: string
}