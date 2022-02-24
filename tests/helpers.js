const sorted = (posts, field) => {
  let fields = []
  //collect all the fields
  posts.forEach(post => fields.push(post[field]))
  //check fields order
  let value = 0
  let boolean = true
  for (let field of fields) {
    if (field > value) {
      value = field
      continue
    } else {
      boolean = false
      break
    }
  }
  return boolean
}

const anyDuplicates = (posts) => {
  let ids = [];
  let result = false;
  posts.forEach((post) => {
    if (ids.includes(post.id)) {
      result = true;
      return;
    } else {
      ids.push(post.id);
    }
  });
  return result;
};

export { sorted, anyDuplicates }