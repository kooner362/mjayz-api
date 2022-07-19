import { DataTypes } from "sequelize/types"
import { sequelize } from "../utils/dbUtil"
import { auditable, IAuditable } from "./auditable"
import { Product } from "./product"

export const Category = sequelize.define('Category', {
  id: { type: DataTypes.UUIDV4, allowNull: false, primaryKey: true },
  productId: { type: DataTypes.STRING, allowNull: false, references: { model: Product, key: 'id'} },
  quantity: { type: DataTypes.INTEGER, allowNull: false},
  ...auditable
})

export interface IInventoryContract extends IAuditable {
  id: string
  productId: string
  quantity: number
}