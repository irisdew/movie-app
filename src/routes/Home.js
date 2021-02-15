import React from "react";
import axios from "axios";
import Movie from "../components/Movie"
import { API_URL, API_KEY, IMG_URL } from "../Config";
import "./Home.css"

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      movies: []
    }
  }
  getMovies = async () => {
    const { data: {results} }  = await axios.get(`${API_URL}trending/movie/week?api_key=${API_KEY}&language=ko&page=1%C2%AEion=KR`);
    this.setState({isLoading: false, movies: results});
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return <div>{isLoading ? "Loading..." : movies.map(movie => {
      console.log(movie);
      const poster = `${IMG_URL}w200${movie.poster_path}`
      return <Movie 
                id={movie.id} 
                title={movie.title} 
                summary={movie.overview}
                poster={poster}
                year={movie.release_date} />
    })
    }</div>;
  }
}

export default Home;