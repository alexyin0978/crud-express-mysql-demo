import { Request, Response } from "express";
import { Post, postModel } from "../model/post.model";

export const postController = {
  getAllPosts: async (req: Request, res: Response) => {
    try {
      const rst = await postModel.selectAllPosts();
      res.send(rst);
    } catch (err) {
      res.status(500).send({
        message: "Some error occurred while retrieving post list.",
      });
    }
  },
  getPostById: async (req: Request, res: Response) => {
    const postId = Number(req.params.postId);
    try {
      const rst = await postModel.selectPostById(postId);
    } catch (err) {
      res.status(500).send({
        message: `Some error occurred while retrieving post ${postId}`,
      });
    }
  },
  createNewPost: async (req: Request, res: Response) => {
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty",
      });
    }

    try {
      const newPost = await postModel.insertNewPost(
        req.body.title,
        req.body.content
      );
      res.send(newPost);
    } catch (err) {
      res.status(500).send({
        message: `Some error occurred while creating new post`,
      });
    }
  },
  updatePostById: async (req: Request, res: Response) => {
    const postId = Number(req.params.postId);
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty",
      });
    }

    try {
      const { title, content }: Pick<Post, "title" | "content"> = req.body;
      const updatedPost = await postModel.updatePostById(
        postId,
        title,
        content
      );
      res.send(updatedPost);
    } catch (err) {
      res.status(500).send({
        message: `Some error occurred while updating post ${postId}`,
      });
    }
  },
  deletePostById: async (req: Request, res: Response) => {
    const postId = Number(req.params.postId);
    try {
      const rst = postModel.deletePostById(postId);
      res.send(rst);
    } catch (err) {
      res.status(500).send({
        message: `Some error occurred while deleting post ${postId}`,
      });
    }
  },
};
