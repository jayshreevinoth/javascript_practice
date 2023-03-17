const movieList = [
    {
        title: "Batman",
        year: 1989,
        director: "Tim Burton",
        imdbRating: 7.6
      },
      {
        title: "Batman Returns",
        year: 1992,
        director: "Tim Burton",
        imdbRating: 7.0
      },
      {
        title: "Batman Forever",
        year: 1995,
        director: "Joel Schumacher",
        imdbRating: 5.4
      },
      {
        title: "Batman & Robin",
        year: 1997,
        director: "Joel Schumacher",
        imdbRating: 3.7
      },
      {
        title: "Batman Begins",
        year: 2005,
        director: "Christopher Nolan",
        imdbRating: 8.3
      },
      {
        title: "The Dark Knight",
        year: 2008,
        director: "Christopher Nolan",
        imdbRating: 9.0
      },
      {
        title: "The Dark Knight Rises",
        year: 2012,
        director: "Christopher Nolan",
        imdbRating: 8.5
      }
];

//pure function
const getTitles = movies => {
    let allTitles = [];
    for(const movie of movies){
        allTitles.push(movie.title);
    }
    return allTitles;
}
const getNolanMovies = movies =>{
    let nolan = [];
    for(const movie of movies){
        if(movie.director === 'Christopher Nolan'){
            nolan.push(movie);
        }
    }
    return nolan;
}
const getBestMovies = movies => {
    let best = [];
    for(const movie of movies){
        if(movie.imdbRating >= 7.5){
            best.push(movie.title);
        }
    }
    return best;
}
const getAverage = movies => {
    let rating = 0;
    let average = 0;
    for(const movie of movies){
        rating = rating + movie.imdbRating;
    }
    average = rating / movies.length;
    return average;
}
console.log(getTitles(movieList));
const nolan = getNolanMovies(movieList);
console.log(nolan.length);
console.log(getBestMovies(movieList));
console.log(getAverage(nolan));