import { Router } from "express";
import { returnBlogs } from "../models/index.js";
import { sortBy } from "../helpers.js";
const router = Router();

router.get("/", async (req, res) => {
  if (req.query.direction) {
    return res.status(400).json({
      error: "direction parameter is invalid",
    });
  }
  if (!req.query.tag) {
    return res.status(400).json({ error: "Tags parameter is required" });
  }

  const tags = req.query.tag.split(",");
  const content = await returnBlogs(tags);

  if (req.query.sortBy) {
    if (
      req.query.sortBy === "id" ||
      req.query.sortBy === "reads" ||
      req.query.sortBy === "likes" ||
      req.query.sortBy === "popularity"
    ) {
      const orderedPosts = sortBy(content, req.query.sortBy);
      res.status(200).json({ posts: orderedPosts });
      return;
    }
    else {
      res.status(400).json({"error": "sortBy parameter is invalid"})
    }
  } else {
    const orderedPosts = sortBy(content, "id");
    res.status(200).json({ posts: orderedPosts });
  }
});

export default router;
