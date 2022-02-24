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

export { removeRepeated, anyDuplicates }

