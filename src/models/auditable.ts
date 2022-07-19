import { DataTypes } from "sequelize/types"

export interface IAuditable {
  createDate: Date
  updateDate: Date
}

export const auditable = {
  createDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  updateDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}