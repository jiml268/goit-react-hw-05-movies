import SearchBox from "../../components/SearchBox"
import HeadingPage from 'pages/HeadingPage';
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"
import { getSearchMovies } from "../../services/API"
import { Link, useLocation} from "react-router-dom";
import s from './MoviesPage.module.css'


const MoviesPage = () => {
    const [searchParams,setSearchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
  const location = useLocation();

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
        <HeadingPage text={'Movie Search'}></HeadingPage>
                 <SearchBox value={query} onChange={updateQueryString} />    
            <ul className = {s.moviesPageList}>
                
                {movies.map((movie) => (
       <li className={s.moviesPageItem} key={movie.id}>
                        <Link to={`/movies/${movie.id}`} state={{from: location.pathname+ location.search}}>
                    <div>
                    <img className={s.moviesPageeImage} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    </div>
                    <div className = {s.moviesPageDetails}>
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
