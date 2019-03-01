import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

// class Movie extends Component{

//     static propTypes = {
//         title : PropTypes.string.isRequired,
//         poster : PropTypes.string.isRequired
//     }


//     render() {
//         return (
//             <div>
//                 <MoviePoster poster={this.props.poster}/>
//             <h1> {this.props.title} </h1>        
//             </div>
//         )
//     }
// }

// class MoviePoster extends Component {

//     static propTypes = {
//         poster : PropTypes.string.isRequired
//     }

//     render() {
//         return (
//             // image 주소 복사 
//             <img src={this.props.poster} />
//         )
//     }
// }

function Movie({title, poster}) {
    return (

        <div>
            <h1>{title}</h1>
            <MoviePoster poster={poster} />
        </div>

    )

}

function MoviePoster({poster}) {
    return (
        <img src={poster} alts="movie poster" />
    )
} 

MoviePoster.propTypes = {
    poster : PropTypes.string.isRequired
}


export default Movie;
