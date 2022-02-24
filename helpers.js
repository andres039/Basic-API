const sortBy = (posts, field) => {
  return posts.sort((a, b) => a[field] - b[field]);
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

export { removeRepeated, sortBy };
