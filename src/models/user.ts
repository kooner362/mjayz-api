import { DataTypes } from "sequelize/types"
import { sequelize } from "../utils/dbUtil"

export const User = sequelize.define('User', {
  id: { type: DataTypes.UUIDV4, allowNull: false },
  name: { type: DataTypes.STRING, allowNull: false },
  isAdmin: { type: DataTypes.BOOLEAN, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  birthday: { type: DataTypes.DATE, allowNull: false },
  phoneNumber: { type: DataTypes.STRING, allowNull: false },
  streetName: { type: DataTypes.STRING, allowNull: false },
  streetNumber: { type: DataTypes.NUMBER, allowNull: false },
  unitNumber: { type: DataTypes.STRING, allowNull: true },
  postalCode: { type: DataTypes.STRING, allowNull: false },
  provice: { type: DataTypes.STRING, allowNull: false },
  country: { type: DataTypes.STRING, allowNull: false }
})

export interface IUserContract {
  id: string
  name: string
  isAdmin: boolean
  email: string
  phoneNumber: string
  address: {
    street: string
    number: number
    postalCode: string
    province: string
    country: string
  }  
}