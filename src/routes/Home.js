import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true); // defalt value: true
  const [movies, setMovies] = useState([]); // default value: empty array

  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9.2&sort_by=year"
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []); // []가 비어 있으면 (아무것도 주시하고 있지 않으면) 이 함수는 한 번만 실행 된다.

  return (
    <div>
      <h1>The Movies</h1>
      {loading ? (
        <h1>Loading.....</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              id={movie.id}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
