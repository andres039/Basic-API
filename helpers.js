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

