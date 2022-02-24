import express from "express";
import "dotenv/config";
import cors from "cors";
import posts from "./routes/posts.js";

const app = express();
const PORT = process.env.PORT || 8081;

//built in middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//third party middleware
app.use(cors());

//Custom middleware

// app.use((req, res, next) => {
//   req.context = {
//     models,
//   };
//   next();
// });
// GET route

app.use("/api/posts", posts)
// start!

app.listen(PORT, () => console.log(`😃 listening on port ${PORT} 👍`));

/*
[x] Get data from online API with a function
[] Refine it with params with a function:
 [x] using the param request data with a fetch request
 [x] once you have the array of objects return it
 [ ] Take on an array of tags
 [ ] For every tag make a request an concat to obj except if the id is already there. 
[] Present that data to the user on clg


*/
