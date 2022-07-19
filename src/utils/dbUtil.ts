import { Sequelize } from "sequelize/types";

export const sequelize = new Sequelize(`${process.env.DB_URL}`, {
  logging: (...msg) => console.log(msg),
})

