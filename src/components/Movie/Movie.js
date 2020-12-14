import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getMovieDetail(id)
    }
    render() {
        if(Object.keys(this.props.movie).length < 1) return <h1>Cargando...</h1>
        const { Title, Year, Rated, Plot, Poster, Director, BoxOffice, imdbRating, Genre, Awards } = this.props.movie
        return (
            <div className="movie-detail">
                <div className="movie-card">
                    <div className="container">
                    <div className="photo-cnt">
                        <div className="details">
                            <div className="title">{Title} <span>{Rated}</span></div> 
                            <div>{Year}</div>
                        </div> 
                    </div>
                    <div className="column">
                        <p>{Plot}</p>
                    </div>
                    <div className="container2">
                        <div className="img">
                            <img alt="img" src={Poster}></img>
                        </div>
                        <ul className="mas-info">
                            <li>Director: {Director}</li>
                            <li>BoxOffice: {BoxOffice}</li>
                            <li>imdbRating: {imdbRating}</li>
                            <li>Genre: {Genre}</li>
                            <li>Awards: {Awards}</li>                
                        </ul>
                    </div>
                    </div> 
                </div> 
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        movie: state.movieDetail
    }
}


export default connect(mapStateToProps,{ getMovieDetail })(Movie);