import { ResultSetHeader, RowDataPacket } from "mysql2";
import { connection } from "./db";

export interface Post extends RowDataPacket {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export const postModel = {
  selectAllPosts: (): Promise<Post[]> => {
    return new Promise((resolve, reject) => {
      connection.query<Post[]>("SELECT * FROM post", (err, rst) => {
        if (err) reject(err);
        else resolve(rst);
      });
    });
  },
  selectPostById: (postId: number): Promise<Post> => {
    return new Promise((resolve, reject) => {
      connection.query<Post[]>(
        "SELECT * FROM post WHERE id = ?",
        [postId],
        (err, rst) => {
          if (err) reject(err);
          else resolve(rst?.[0]);
        }
      );
    });
  },
  insertNewPost: (title: string, content: string): Promise<Post> => {
    return new Promise((resolve, reject) => {
      connection.query<ResultSetHeader>(
        "INSERT INTO post(title, content) VALUES(?, ?)",
        [title, content],
        async (err, rst) => {
          if (err) reject(err);
          else {
            try {
              const newPost = await postModel.selectPostById(rst.insertId);
              resolve(newPost);
            } catch (err) {
              reject(err);
            }
          }
        }
      );
    });
  },
  updatePostById: (
    postId: number,
    title: string,
    content: string
  ): Promise<Post> => {
    return new Promise((resolve, reject) => {
      connection.query<ResultSetHeader>(
        "UPDATE post SET title = ?, content = ? WHERE id = ?",
        [title, content, postId],
        async (err, rst) => {
          if (err) reject(err);
          else {
            try {
              const newPost = await postModel.selectPostById(postId);
              resolve(newPost);
            } catch (err) {
              reject(err);
            }
          }
        }
      );
    });
  },
  deletePostById: (postId: number): Promise<void> => {
    return new Promise((resolve, reject) => {
      connection.query<ResultSetHeader>(
        "DELETE FROM post WHERE id = ?",
        [postId],
        (err, rst) => {
          if (err) reject(err);
          else {
            resolve();
          }
        }
      );
    });
  },
};
