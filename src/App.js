import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie'

const movies = [
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
]


class App extends Component {

// Render: componentWillMount() -> render() -> componentDidMount()
// Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

  state = {
    greeting : 'Hello!'
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        greeting : 'Hello again!'
      })
    }, 3000)
  }

  render() {
    return (
      <div className="App">
        {this.state.greeting}
        {movies.map( (movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index}/>
        }
        )
      }
      
        </div>
    );
  }
}

export default App;
