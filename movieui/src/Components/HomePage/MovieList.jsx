import React, { Component } from 'react'
import MovieCard from '../MovieCard'

export class MovieList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         movielist:[]
      }
    }

    async componentDidMount(){
        try {
            const responce=await fetch('http://localhost:5146/api/MovieList/getAllMovies')
            if(responce.ok){
                const data=await responce.json();
                console.log(data.data);
                const movies=data.data;
                this.setState({
                    movielist:movies
                })
            }
        } catch (error) {
            console.error(error)
        }
    }
    render() {
        
        return (
            <div className="container mt-4">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                    {
                        this.state.movielist.map((data) =>
                        <MovieCard key={data.id} poster={data.poster_Link} name={data.series_Title} rating={data.imdB_Rating} />
                        )
                    }
                </div>
            </div>
        )
    }
}

export default MovieList