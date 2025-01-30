import { db } from "./database";

const init = async () => {
  const response = await db.trendingMovies.list();

  console.log(response);
};

init();
