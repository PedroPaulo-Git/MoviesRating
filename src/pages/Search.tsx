import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import styles from "../styles/Search.module.css";

function Search() {
  const searchURL = import.meta.env.VITE_SEARCH;
  const apiKey = import.meta.env.VITE_API_KEY;
  // const showResultsSearch =  import.meta.env.VITE_API

  const [searchParams] = useSearchParams();
  const [movies, SetMovies] = useState([]);
  const query = searchParams.get("q");
  const imgURL = import.meta.env.VITE_IMG;

  const getSeachQuery = async (url: URL) => {
    const res = await fetch(url);
    const data = await res.json();

    SetMovies(data.results);
    console.log(data.results);
    console.log(url);
  };

  useEffect(() => {
    const searchQuery: any = `${searchURL}?${apiKey}&query=${query}`;
    console.log(searchQuery);

    getSeachQuery(searchQuery);
  }, [query]);

  return (
    <div className={styles.main}>
      <h2
        style={{
          color: "white",
          fontWeight: "500",
          paddingBlock: "2%",
          paddingLeft: "2%",
        }}
      >
        Resultados para: <span>{query}</span>
      </h2>

      <div className={styles.conteinerContent_main}>
        {movies.length > 0 &&
          movies.map((movie: any) => (
            <div className={styles.conteinerContent_main_img}>
              <div className={styles.conteinerContent}>
                <div className={styles.conteinerContent_img}>
                  <img
                    style={{ width: "100%" }}
                    src={imgURL + movie.poster_path}
                    alt=""
                  />
                   <div>
                  <p key={movie.id}>{movie.title}</p>
                  <span className={styles.spanContent}>
                    {movie.vote_average}
                    <p>
                      <FaStar />
                    </p>
                  </span>
                </div>
                </div>
               
                <button
                  onClick={() => {
                    window.location.href = `/MoviesRating/movie/${movie.id}`;
                  }}
                  className={styles.conteinerContent_btn}
                >
                   <Link to={`/MoviesRating/movie/${movie.id}`}>Detalhes</Link>
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Search;
