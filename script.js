//lista filmów w tablicy
var movies = [
  {
      id: 1,
      title: 'Harry Potter',
      desc: 'Film o czarodzieju',
      poster: 'img/potter.jpg'
  },
  {
      id: 2,
      title: 'Król Lew',
      desc: 'Film o królu sawanny',
      poster: 'img/król-lew.jpg'
  },
  {
      id: 3,
      title: 'Shrek',
      desc: 'Film animowany o ogrze',
      poster: 'img/shrek.jpg'
  },
  {
      id: 4,
      title: 'Toy story',
      desc: 'Film animowany o zabawkach',
      poster: 'img/toy-story.jpg'
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
        React.createElement(MovieTitle, {title: this.props.movie.title}),
        React.createElement(MovieDesc, {desc: this.props.movie.desc}),
        React.createElement(MoviePoster, {poster: this.props.movie.poster})
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
      React.createElement('h2', {}, this.props.title)
    )
  }
});

var MovieDesc = React.createClass({
  propTypes: {
    desc: React.PropTypes.string.isRequired,
  },

  render: function() {
    return (
      React.createElement('p', {}, this.props.desc)
    )
  }
});

var MoviePoster = React.createClass({
  propTypes: {
    poster: React.PropTypes.string.isRequired,
  },

  render: function() {
    return (
      React.createElement('img', {src: this.props.poster})
    )
  }
});

var MoviesList = React.createClass({
  propTypes: {
    list: React.PropTypes.array.isRequired,
  },

  render: function() {
    var moviesElements = this.props.list.map(function(movie) {
      return React.createElement(Movie, {key:movie.id, movie: movie});
    });
    return (
      React.createElement('ul', {}, moviesElements)
    )
  }
})

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement(MoviesList, {list: movies})
);
ReactDOM.render(element, document.getElementById('app'));