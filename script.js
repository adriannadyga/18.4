//lista filmów w tablicy
var movies = [
  {
      id: 1,
      title: 'Harry Potter',
      desc: 'Film o czarodzieju',
      poster: 'potter.jpg'
  },
  {
      id: 2,
      title: 'Król Lew',
      desc: 'Film o królu sawanny',
      poster: 'król-lew.jpg'
  },
  {
      id: 3,
      title: 'Shrek',
      desc: 'Film animowany o ogrze',
      poster: 'shrek.jpg'
  },
  {
      id: 4,
      title: 'Toy story',
      desc: 'Film animowany o zabawkach',
      poster: 'toy-story.jpg'
  }
];

var Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired,
  },

  render: function() {
    //fragment kodu obsługujący wyświetlanie info na temat filmu
    return (
      React.createElement('li', {key:this.props.movie.id},
        React.createElement(MovieTitle, {movie: this.props.movie.title}),
        React.createElement(MovieDesc, {desc: this.props.movie.desc}),
        React.createElement(MoviePoster, {src: this.props.movie.poster})
      )
    );
  }
});

var MovieTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
  },

  render: function() {
    return (
      React.createElement('h2', {}, this.props.movie.title)
    )
  }
});

var MovieDesc = React.createClass({
  propTypes: {
    desc: React.PropTypes.string.isRequired,
  },

  render: function() {
    return (
      React.createElement('p', {}, this.props.movie.desc)
    )
  }
});

var MoviePoster = React.createClass({
  propTypes: {
    src: React.PropTypes.string.isRequired,
  },

  render: function() {
    return (
      React.createElement('img', {src: movie.poster})
    )
  }
});

var MoviesList = movies.map(function(movie) {
  return React.createElement(Movie, {key:movie.id, movie: movie});
});

var element = React.createElement(MoviesList);
ReactDOM.render(element, document.getElementById('app'));