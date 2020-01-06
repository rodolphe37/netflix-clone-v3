import React from 'react';

class Movie extends React.Component{

    render() {
        const {title, duration, userRating, desc, stars, genre, poster} = this.props.location.state.movieProps;

        return (
            <div className="movie">
                <img src={poster} alt={`${title} Poster`}/>
                <div className="movieInfo">
                    <h1>{title}</h1>
                    <p><strong>Évaluation: </strong>{userRating}</p>
                    <p><strong>Durée: </strong>{duration}</p>
                    <p><strong>Acteurs - Actrices: </strong>{stars}</p>
                    <p><strong>genre: </strong>{genre}</p>
                    <p><strong>Description: </strong>{desc}</p>
                </div>
            </div>
        )
    }
}

export default Movie;