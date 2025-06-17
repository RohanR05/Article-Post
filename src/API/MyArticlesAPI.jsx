export const myArticles = (email) => {
  return fetch(`https://assignment11-server-side-lyart.vercel.app/articles?email=${email}`).then((res) =>
    res.json()
  );
};
