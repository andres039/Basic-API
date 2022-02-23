const tags = ["health", "tech"];


const removeRepeated = (posts) => {
  let ids = [];
  return posts.reduce((result, post) => {
    if (!ids.includes(post.id)) {
      result.push(post);
      ids.push(post.id);
    }
    return result;
  }, []);
};

export { removeRepeated }
// const fetchData = (description) => {
//   let result = [];
//   description.forEach((tag) =>
//     obj.forEach((post) => {
//       if (post.tags.includes(tag)) {
//         result.push(post);
//       }
//     })
//   );
//   return result;
// };

//console.log(test)
//console.log(removeRepeated(fetchData(tags)));

 
//console.log(removeRepeated(fetchData(["politics", "tech", "health"])));
/*
[x] Get data from online API with a function
[] Refine it with params with a function:
 [x] using the param request data with a fetch request
 [x] once you have the array of objects return it
 [ ] Take on an array of tags
 [x] For every tag make a request an concat to obj except if the id is already there. 
[] Present that data to the user on clg


*/
