import { Router } from "express";
import { postController } from "../controller/post.controller";

const router = Router();

router.get("/", postController.getAllPosts);
router.get("/:postId", postController.getPostById);
router.post("/", postController.createNewPost);
router.put("/:postId", postController.updatePostById);
router.delete("/:postId", postController.deletePostById);

export const postRouter = router;
