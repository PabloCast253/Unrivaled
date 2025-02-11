import express from "express";
import {
  getPosts,
  getAllPosts,
  createPost,
  deletePost,
} from "../controllers/postController.js";
import authMiddleware from "../middleware/authMiddleware.js"; // ✅ Protects routes

const router = express.Router();

/**
 * ✅ GET /api/posts
 * Fetch all forum posts.
 * Public route (no authentication required).
 */
router.get("/", getAllPosts);

/**
 * ✅ GET /api/posts/:characterName
 * Fetch all forum posts for a specific character.
 * Public route (no authentication required).
 */
router.get("/:characterName", getPosts);

/**
 * ✅ POST /api/posts/
 * Create a new forum post.
 * Protected route (requires authentication).
 */
router.post("/", authMiddleware, createPost);

/**
 * ✅ DELETE /api/posts/:postId
 * Delete a forum post.
 * Protected route (only post owner can delete).
 */
router.delete("/:postId", authMiddleware, deletePost);

export default router;
