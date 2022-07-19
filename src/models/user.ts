import { DataTypes } from "sequelize/types"
import { sequelize } from "../utils/dbUtil"

export const User = sequelize.define('User', {
  id: { type: DataTypes.UUIDV4, allowNull: false, unique: 'id_email_indx' },
  name: { type: DataTypes.STRING, allowNull: false },
  isAdmin: { type: DataTypes.BOOLEAN, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: 'id_email_indx' },
  password: { type: DataTypes.STRING, allowNull: false },
})

export interface IUserContract {
  id: string
  name: string
  isAdmin: boolean
  email: string
  password: string
}