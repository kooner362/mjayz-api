import { DataTypes } from "sequelize/types"
import { sequelize } from "../utils/dbUtil"
import { auditable, IAuditable } from "./auditable"

export const Customer = sequelize.define('Customer', {
  id: { type: DataTypes.UUIDV4, allowNull: false, unique: 'id_email_indx' },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: 'id_email_indx' },
  birthday: { type: DataTypes.DATE, allowNull: false },
  phoneNumber: { type: DataTypes.STRING, allowNull: false },
  streetName: { type: DataTypes.STRING, allowNull: false },
  streetNumber: { type: DataTypes.NUMBER, allowNull: false },
  unitNumber: { type: DataTypes.STRING, allowNull: true, defaultValue: null },
  postalCode: { type: DataTypes.STRING, allowNull: false },
  provice: { type: DataTypes.STRING, allowNull: false },
  country: { type: DataTypes.STRING, allowNull: false },
  totalSpend: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  ...auditable
})

export interface IUserContract extends IAuditable {
  id: string
  name: string
  email: string
  phoneNumber: string
  address: {
    street: string
    number: number
    postalCode: string
    province: string
    country: string
  },
  totalSpend: number  
}