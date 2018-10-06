"use strict"
var Movie = React.createClass({
    propTypes: {
        movies: React.PropTypes.object.isRequired,
    },
    
    render: function() {
        return (
            React.createElement(Movie, {key: movies.id}, this.props.movies.id)
        )

        var MovieTitle = React.createClass({
            propTypes: {
                movies: React.PropTypes.object.isRequired,
            },

            render: function() {
                return (
                    React.createElement(Movie, {key: movies.title}, this.props.movies.title) 
                )
            }
        });

        var MovieDescription = React.createClass({
            propTypes: {
                movies: React.PropTypes.object.isRequired,
            },

            render: function() {
                return (
                    React.createElement(Movie, {key: movies.desc}, this.props.movies.desc) 
                )
            }
        });

        var MovieDirector = React.createClass({
            propTypes: {
                movies: React.PropTypes.object.isRequired,
            },

            render: function() {
                return (
                    React.createElement(Movie, {key: movies.director}, this.props.movies.director) 
                )
            }
        });

        var MovieDirector = React.createClass({
            propTypes: {
                movies: React.PropTypes.object.isRequired,
            },

            render: function() {
                return (
                    React.createElement(Movie, {key: movies.year}, this.props.movies.year) 
                )
            }
        });

        var MovieImg = React.createClass({
            propTypes: {
                movies: React.PropTypes.object.isRequired,
            },

            render: function() {
                return (
                    React.createElement(Movie, {key: movies.src}, this.props.movies.src) 
                )
            }
        });
    }
});

var movies = [
    { 
        id: 1,
        title: 'Dawno temu w Ameryce',
        desc: 'Dramat, gangsterski',
        director: 'Sergio Leone',
        year: 1984,
        src: '/image/Dawno_temu.jpg'
    },
    { 
        id: 2,
        title: 'Chłopcy z Ferajny',
        desc: 'Dramat, gangsterski',
        director: 'Martin Scorsese',
        year: 1990,
        src: '/image/Chłopcy_z_ferajny.jpg'
    },
    { 
        id: 3,
        title: 'Gorączka',
        desc: 'Sensacyjny',
        director: 'Michael Mann',
        year: 1995,
       src: '/image/Gorączka.jpg'
    },
    { 
        id: 4,
        title: 'Ojciec Chrzestny',
        desc: 'Dramat, gangsterski',
        director: 'Francis Ford Coppola',
        year: 1972,
        src: '/image/Ojciec_Chrzestny.jpg'
    },
    { 
        id: 5,
        title: 'Ojciec Chrzestny II',
        desc: 'Dramat, gangsterski',
        director: 'Francis Ford Coppola',
        year: 1974,
        src: '/image/Ojciec_..._II.jpg'
    },
    { 
        id: 6,
        title: 'Człowiek z blizną',
        desc: 'Dramat, gangsterski',
        director: 'Francis Ford Coppola',
        year: 1983,
        src: '/image/Człowiek_z_blizną.jpg'
    }
];

 var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('p', {}, movie.director),
        React.createElement('p', {}, movie.year),
        React.createElement('img', {}, movies.img),
    );
 });

 var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );

ReactDOM.render(element, document.getElementById('app'));

