
let test = [{id: 1}, {id: 5}, {id: 4}, {id: 3}]

const sortBy = (posts, field) => {
  return posts.sort((a, b) => a[field] - b[field])
}

const anyDuplicates = (posts) => {
  let ids = [];
  let result = false
  posts.forEach(post => {
    if (ids.includes(post.id)) {
    	result = true
      return 
    } else {
      ids.push(post.id)
    }
  })
  return result
};

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

export { removeRepeated, anyDuplicates, sortBy }

