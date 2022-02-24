import express from "express";
import "dotenv/config";
import cors from "cors";
import posts from "./routes/posts.js";
import ping from "./routes/ping.js";

const app = express();
const PORT = process.env.PORT || 8081;

//built in middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/ping", ping);
app.use("/api/posts", posts);

// start!

app.listen(PORT, () => console.log(`😃 listening on port ${PORT} 👍`));
