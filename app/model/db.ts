import mysql from "mysql2";
import { mySQLConfig } from "../config/db.config";

export const connection = mysql.createConnection({
  host: mySQLConfig.HOST,
  user: mySQLConfig.USER,
  password: mySQLConfig.PASSWORD,
  database: mySQLConfig.DB,
});

connection.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log("Successfully connected to mysql");
  }
});

// -- create table
// CREATE TABLE post (
// 	post_id INT AUTO_INCREMENT PRIMARY KEY,
//     post_title VARCHAR(255) NOT NULL,
//     post_content VARCHAR(1000) NOT NULL,
//     created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
//     updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
// )
// engine=innodb charset=utf8mb4 COLLATE utf8mb4_general_ci;

// DESCRIBE post;

// -- insert initial datas
// INSERT INTO post(post_title, post_content) VALUES
// ('title1', 'content1'),
// ('title2', 'content2'),
// ('title3', 'content3'),
// ('title4', 'content4'),
// ('title5', 'content5'),
// ('title6', 'content6');

// SELECT * FROM post;
