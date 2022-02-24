import { Router } from "express";
import { returnBlogs } from "../models/index.js";

const router = Router();

router.get("/", async (req, res) => {
  if (req.query.sortBy || req.query.direction) {
    return res.status(400).json({
      error: "sortBy parameter is invalid",
    });
  }
  if (!req.query.tag) {
    return res.status(400).json({ error: "Tags parameter is required" });
  }

  const tags = req.query.tag.split(",");
  const content = await returnBlogs(tags);
  console.log(tags);
  res.status(200).json({ posts: content });
});

export default router;
