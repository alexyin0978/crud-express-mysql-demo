// db.config.ts saves the db info, eg: HOST, USER ...etc
export const mySQLConfig = {
  HOST: process.env.DB_HOST,
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
  DB: process.env.DB_NAME,
};
