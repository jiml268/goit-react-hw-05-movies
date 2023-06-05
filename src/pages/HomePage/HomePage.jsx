import Container from 'components/Container';
import HeadingPage from 'pages/HeadingPage';
import { Link } from "react-router-dom";

import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'services/API';
import s from './HomePage.module.css'

const HomePage = () => {
  
    const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
        getTrendingMovies().then(setTrendingMovies);
    }, []);
        console.log(trendingMovies)

    

    return (
        

    <Container>
      <HeadingPage text={'Trending Movies for Today'}></HeadingPage>
            <ul className={s.homePageList}>
        {trendingMovies.map((movie) => (
            <li className={s.homePageItem} key={movie.id}>
                <Link to={`/movies/${movie.id}`}>
                    <div>
                    <img className={s.homePageImage} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    </div>
                    <div className = {s.movieDetails}>
                        <h3> {movie.title}  </h3>
                        <h4> Release Date: {movie.release_date}</h4>
                        </div>
                                       </Link>
          </li>
        ))}
      </ul>
    </Container> 
    )
};

export default HomePage;
