import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie'
import { throws } from 'assert';

class App extends Component {
// Render: componentWillMount() -> render() -> componentDidMount()
// Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

  state = {  }

  componentDidMount() {
    this._getMovies();
 
  }

  _getMovies = async () => {
    const movies = await this._callApi() // await mode : this.setState : 
    this.setState({
      movies // callApi() 이 완료되기 전까지 실행되지 않는다. 
    })
  }

  _callApi = () => {
    // fetch 라는 이름의 promise 를 return 한다. 
    return fetch('https://yts.am/api/v2/list_movies.json?sory_by=rating')
    .then(potato => potato.json()) // status : 200 (Successed), ReadableStream : binary data
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }


  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      console.log(movie) // check what data is in Movie Data
      return <Movie title={movie.title_english} 
        poster={movie.medium_cover_image} 
        key={movie.id} 
        genres = {movie.genres}
        synopsis = {movie.synopsis}
        />
    })
    return movies
  }

  render() {
    const { movies } = this.state;

    return (
      <div className={movies ? "App" : "App--loading"}>
        {movies ? this._renderMovies() : "Loading"}
        </div>
    );
  }
}

export default App;
