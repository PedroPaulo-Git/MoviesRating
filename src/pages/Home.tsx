import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {FaStar} from 'react-icons/fa';
import styles from '../styles/Home.module.css'
const movieURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

function Home() {

    const imgURL = import.meta.env.VITE_IMG;

    const [topMovies, setTopMovies]: any = useState([]);
    const getTopRate = async (url: URL) => {
        const res = await fetch(url);
        const data = await res.json();

        setTopMovies(data.results);
        console.log(url)

    }

    useEffect(() => {
        const topRateUrl: any = `${movieURL}top_rated?${apiKey}`
        console.log(topRateUrl);

        getTopRate(topRateUrl);

    }, [])
    return (
        <div className={styles.conteinerContent_main}>
            <div className={styles.conteinerContent}>

                {topMovies && topMovies.map((movie: any) => (
                    <div className={styles.conteinerContent_img}>
                        <div>
                            <img className={styles.imgMovie} src={imgURL + movie.poster_path} alt="" />
                          
                        </div>
                       
                        <p className={styles.tittlemovie}  key={movie.id}>{movie.title}</p> 
                        <span className={styles.spanContent}> 
                            
                            {movie.vote_average}
                           <p><FaStar/></p>
                        </span>

                        <button onClick={()=>{
                                    window.location.href = `/MoviesRating/movie/${movie.id}`;
                                }} className={styles.conteinerContent_btn }> 

                        <Link to={`/MoviesRating/movie/${movie.id}`}>Detalhes</Link>   </button>
                    </div>

                )

                )}

            </div>
        </div>
    );
}

export default Home;