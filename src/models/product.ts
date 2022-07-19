import { DataTypes } from "sequelize/types"
import { sequelize } from "../utils/dbUtil"
import { Category } from "./category"

export const Product = sequelize.define('Product', {
  id: { type: DataTypes.UUIDV4, allowNull: false, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  categoryId: { type: DataTypes.STRING, references: { model: Category, key: 'id' }, allowNull: true, defaultValue: null },
  cannabisWeight: { type: DataTypes.INTEGER, allowNull: true, defaultValue: null },
  retailPrice: { type: DataTypes.INTEGER, allowNull: false },
  cost: { type: DataTypes.INTEGER, allowNull: false },
  salePrice: { type: DataTypes.INTEGER, allowNull: true, defaultValue: null },
  description: { type: DataTypes.STRING, allowNull: true, defaultValue: null },
  imageUrl: { type: DataTypes.STRING, allowNull: true, defaultValue: null },
  thc: { type: DataTypes.STRING, allowNull: true, defaultValue: null },
  cbd: { type: DataTypes.STRING, allowNull: true, defaultValue: null },
  cannabinoidUnit: { type: DataTypes.STRING, allowNull: true, defaultValue: null }
})

export interface Cannabinoids {
  thc: number
  cbd: number
  unit: string
}

export interface Product {
  id: string
  name: string
  categoryId: string
  cannabisWeight: number
  retailPrice: number
  cost: number
  salePrice?: number
  description?: string
  imageUrl?: string
  cannabinoids?: Cannabinoids
}

