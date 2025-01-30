import { db } from "../database";

const init = async () => {
  const response = await db.trendingMovies.list();

  console.log(response);
};

function App() {
  init();

  return (
    <>
      <h1>React & Appwrite</h1>
    </>
  );
}

export default App;
