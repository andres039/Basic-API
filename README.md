# BASIC API

Basic API is an exercise that applies express.js, jest and Supertest to create an API that customizes the way in which we retrieve data from another API, allowing the user customization through query parameters on the URL

# Install, run and test

This API was built in JavaScript in the Node environment. To install the dependencies from the main folder `npm install`.
To run the API you can use the default PORT which is 8081, or setup your own on an .env file, then, from the root, `npm start`.
To see the results of the test suite, `npm test` from the root directory.

# Sample the Routes

The tag query is required

`GET /api/posts?tag=tech`

```json
{
 "posts": [
 {
  "author": "Rylee Paul",
  "authorId": 9,
  "id": 1,
  "likes": 960,
  "popularity": 0.13,
  "reads": 50361,
  "tags": [
    "tech",
    "health"
  ]
 },
 ...
}
```

Using the sortBy query

`GET /api/posts?tag=tech&sortBy=likes`

```json
{
"posts": [
{
"author": "Bryson Bowers",
"authorId": 6,
"id": 85,
"likes": 25,
"popularity": 0.18,
"reads": 16861,
"tags": [
"tech"
]
},
{
"author": "Jon Abbott",
"authorId": 4,
"id": 46,
"likes": 89,
"popularity": 0.96,
"reads": 79298,
"tags": [
"culture",
"tech"
]
},
 ...
}
```