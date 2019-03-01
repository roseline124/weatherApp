import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie'

class App extends Component {

  state = {
  }

// Render: componentWillMount() -> render() -> componentDidMount()
// Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies : [
          {
            title : "Inception",
            poster : 'https://images-na.ssl-images-amazon.com/images/I/912AErFSBHL._SY445_.jpg'
          },
          
          {
            title : "KimBockNam",
            poster : 'http://image.cine21.com/resize/cine21/poster/2010/0817/M0010003_kimboknam_poster_main[X230,330].jpg',
          }, 
      
          {
            title : "Shining",
            poster : 'http://mblogthumb4.phinf.naver.net/MjAxODAzMjdfMjcy/MDAxNTIyMTQ0MjUzOTA5.W1y_24UWM53mTqsLuaM8vke0pqOex3I3e1WejC1RvIog.sUe7apWH-nN7nbLBhX50j-UlHr9fmP917L14OIahUYog.JPEG.cine_play/MV5BY2I4ZTNlMGUtZGFlYS00NDI4LWIxOTEtYTA0YTFhNTdmNzViXkEyXkFqcGdeQXVyNTgzMzU5MDI._V1_SY1000_CR0%2C0%2C666%2C1000_AL_.jpg?type=w800',
          }, 
        {
          title : "Discovery", 
          poster : 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/The_Discovery_film_poster.jpg/220px-The_Discovery_film_poster.jpg',
        }, 
      ] // moives 
      })
    }, 3000)
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })

    return movies
  }

  render() {
    return (
      <div className="App">
        {this.state.movies? this._renderMovies() : 'Loading'}
        </div>
    );
  }
}

export default App;
