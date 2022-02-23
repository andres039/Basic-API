import fetch from "node-fetch";
import { removeRepeated } from "../helpers.js";

const obj = [
  {
    author: "Rylee Paul",
    authorId: 9,
    id: 92,
    likes: 203,
    popularity: 0.49,
    reads: 82099,
    tags: ["health"],
  },
  {
    author: "Jon Abbott",
    authorId: 4,
    id: 95,
    likes: 985,
    popularity: 0.42,
    reads: 55875,
    tags: ["politics", "tech", "health", "history"],
  },
];

const fetchData = async (tag) => {
  return await fetch(
    `https://api.hatchways.io/assessment/blog/posts?tag=${tag}`
  )
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    })
    .catch((reason) => console.error("error:", reason));
};

const returnBlogs = async (tags) => {
  const collection = [];
  const promises = collection.concat(tags.map((tag) => fetchData(tag)));
  const result = await Promise.all(promises);
  return removeRepeated(result.flat());
};

const result = await returnBlogs(["tech", "health", "politics"])
console.log(result);

export { obj as default, returnBlogs };
