import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from 'react-icons/fa';
import styles from '../styles/Movie.module.css';

function Movie() {
    const { id } = useParams();

    const movieURL = import.meta.env.VITE_API;
    const apiKey = import.meta.env.VITE_API_KEY;
    const imgURL = import.meta.env.VITE_IMG;

    const [movie, setMovie]: any = useState(null);
    const getMovie = async (url: URL) => {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data)
        setMovie(data)
        console.log('URL > ',url)
    }
    useEffect(() => {
        const movieUrl: any = `${movieURL}${id}?${apiKey}`;
        getMovie(movieUrl)
        console.log(movieUrl)
    }, [])
    return (
        <main className={styles.ContainerMovie}>
            <div className={styles.ContainerMovie_content}>
                {movie &&
                    <div className={styles.conteinerContent_img}>
                        <div className={styles.conteinerContent}>
                            <img className={styles.img} src={imgURL + movie.poster_path} alt="" />


                            <div className={styles.conteinerContent_info}>
                                <div>
                                <p className={styles.movie_title} style={{ color: '#FFFF' }} key={movie.id}>{movie.title} </p>
                                <span style={{ color: '#FFFF'}}>
                                    <span style={{display:'flex',paddingBottom:'5%',height:'10px'}}>
                                    <p>{movie.vote_average}</p>
                                    <FaStar />
                                    </span>
                                    <p className={styles.overview}> {movie.overview}</p>
                                </span>  
                                </div>
                               
                               
                                <div className={styles.conteinerContent_otherInfo}>
                                    <div className={styles.content_info}>
                                    
                                    <p className={styles.popularity}>  <span style={{color:' aquamarine',position:'relative',paddingRight:'0.5%'}}>Popularidade:</span> {movie.popularity}</p>
                                    <p className={styles.runtime}>     <span style={{color:' aquamarine',position:'relative',paddingRight:'0.5%'}}>Tempo:</span> {movie.runtime}h</p>
                                    <p className={styles.release_date}><span style={{color:' aquamarine',position:'relative',paddingRight:'0.5%'}}>Data:</span> {movie.release_date}</p>
                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>

                }
            </div>
        </main>
    );
}

export default Movie;