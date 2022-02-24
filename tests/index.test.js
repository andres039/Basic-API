import posts from "../routes/posts.js";
import ping from "../routes/ping.js";
import supertest from "supertest";
import express from "express";
import { anyDuplicates } from "../helpers.js";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use("/", posts);
app.use("/ping", ping);

test("ping route works", (done) => {
  supertest(app).get("/ping").expect("Content-Type", /json/).expect(200, done);
});

test("posts route works", (done) => {
  supertest(app)
    .get("/?tag=culture")
    .expect("Content-Type", /json/)
    .expect(200, done);
});

describe("When the tag parameter is incorrect", () => {
  test("Missing the tag parameter, should respond with a status code 400", async () => {
    const response = await supertest(app).get("/");
    expect(response.statusCode).toBe(400);
  }),
    test("Using an invalid tag parameter should respond with status code 400", async () => {
      const response = await supertest(app).get("/?sortBy");
      expect(response.statusCode).toBe(400);
    });
});

describe("When making a request with the tag 'culture'", () => {
  test("The total count of posts should be 20", async () => {
    const response = await supertest(app).get("/?tag=culture")
    expect(response.body.posts.length).toBe(20);
  });
});

describe("When making a request with multiple tags", () => {
  test("There shouldn't be duplicate posts", async () => {
    const response = await supertest(app).get("/?tag=culture,tech,politics,history")
    expect(anyDuplicates(response.body.posts)).toBe(false);
  });
});