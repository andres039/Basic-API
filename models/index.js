import fetch from "node-fetch";
import { removeRepeated } from "../helpers.js";

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

export { returnBlogs };
