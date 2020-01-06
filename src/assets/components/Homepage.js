import React from 'react';
import MovieCarousel from './Carousel';
import Sections from './sections/Sections';

class Homepage extends React.Component{
    render() {
        return (
            <div className="homepage">
                <MovieCarousel/>
                <Sections />
            </div>
        )
    }
}

export default Homepage;
