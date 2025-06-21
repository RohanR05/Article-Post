export const myArticlesAPI = (email) => {
  return fetch(`https://assignment11-server-side-lyart.vercel.app/articles?email=${email}`, {
    credentials:'include',
  }).then((res) => res.json());
};
