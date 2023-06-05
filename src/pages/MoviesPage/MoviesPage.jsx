import SearchBox from "../../components/SearchBox"
import HeadingPage from 'pages/HeadingPage';
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"
import { getSearchMovies } from "../../services/API"
import { Link } from "react-router-dom";
import s from './MoviesPage.module.css'


const MoviesPage = () => {
    const [searchParams,setSearchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);

    const query = searchParams.get("query")?? "";

    useEffect(() => {
        if (query) {
        getSearchMovies(query).then(setMovies)};
    }, [query, searchParams]);


    const updateQueryString = (query) => {
    const nextParams = query !== "" ? { query} : {};
    setSearchParams(nextParams);
  };
    
    return (
        <>          
            <ul>
                <HeadingPage text={'Movie Search'}></HeadingPage>
                 <SearchBox value={query} onChange={updateQueryString} />
                {movies.map((movie) => (
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
    </>
    );
};

export default MoviesPage;
