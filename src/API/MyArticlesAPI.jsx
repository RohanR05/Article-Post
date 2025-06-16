export const myArticles = (email) => {
  return fetch(`http://localhost:222/articles?email=${email}`).then((res) =>
    res.json()
  );
};
