import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {});
router.get("/:postId", (req, res) => {});
router.post("/", (req, res) => {});
router.put("/:postId", (req, res) => {});
router.delete("/:postId", (req, res) => {});

export const postRouter = router;
