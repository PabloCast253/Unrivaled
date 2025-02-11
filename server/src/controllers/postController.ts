import { Request, Response } from "express";
import { Post } from "../models/Post.js";
import { User } from "../models/user.js";

/**
 *  Controller: Fetch all posts from the database.
 * 
 * @param req - Express request object
 * @param res - Express response object returning all posts
 */
export const getAllPosts = async (req: Request, res: Response) => {
  try {
    // Find all posts and include the associated user (to get the username)
    const posts = await Post.findAll({
      include: [{ model: User, attributes: ["username"] }], // Exclude sensitive info
      order: [["createdAt", "DESC"]], // Order posts from newest to oldest
    });

    res.json(posts); // Send retrieved posts as JSON response
  } catch (error) {
    console.error("❌ Error fetching all posts:", error);
    res.status(500).json({ error: "Failed to retrieve all posts" });
  }
};

/**
 *  Controller: Fetch posts related to a specific character.
 * 
 * @param req - Express request object containing characterName in URL params.
 * @param res - Express response object returning posts for that character.
 */
export const getPosts = async (req: Request, res: Response) => {
  try {
    const { characterName } = req.params; // Extract character name from URL

    // Find all posts that match the character name
    const posts = await Post.findAll({
      where: { character_name: characterName },
      include: [{ model: User, attributes: ["username"] }], // Include user info
      order: [["createdAt", "DESC"]],
    });

    res.json(posts); // Send retrieved posts as JSON response
  } catch (error) {
    console.error("❌ Error fetching posts:", error);
    res.status(500).json({ error: "Failed to retrieve posts" });
  }
};

/**
 *  Controller: Create a new post.
 * Only authenticated users can create posts.
 * 
 * @param req - Express request object containing post data in the body.
 * @param res - Express response object confirming post creation.
 */
export const createPost = async (req: Request, res: Response) => {
  try {
    // Extract post details from request body
    const { character_name, content } = req.body;

    // Extract user ID from JWT authentication middleware
    if (!req.user) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const user_id = req.user.id;

    // Create a new post in the database
    const newPost = await Post.create({ character_name, user_id, content });

    res.status(201).json({ message: "Post added successfully", post: newPost });
  } catch (error) {
    console.error("❌ Error creating post:", error);
    res.status(500).json({ error: "Failed to create post" });
  }
};

/**
 *  Controller: Delete a post.
 * Only the user who created the post can delete it.
 * 
 * @param req - Express request object containing post ID in URL params.
 * @param res - Express response object confirming deletion.
 */
export const deletePost = async (req: Request, res: Response) => {
  try {
    const { postId } = req.params; // Extract post ID from URL

    // Find the post by ID
    const post = await Post.findByPk(postId);

    // If post is not found, return an error
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    // Ensure the authenticated user is defined and is the owner of the post before deleting
    if (!req.user || post.user_id !== req.user.id) {
      return res.status(403).json({ error: "Unauthorized to delete this post" });
    }

    // Delete the post
    await post.destroy();

    res.json({ message: "Post deleted successfully" });
  } catch (error) {
    console.error("❌ Error deleting post:", error);
    res.status(500).json({ error: "Failed to delete post" });
  }
};
