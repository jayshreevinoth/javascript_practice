/* Our initial program is about the recent Batman movies. The data comes in the form of an array of objects, with each object describing a movie.
*/
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

/*Here is the program that uses the movieList data*/
const titles = [];
for(const movie of movieList){
    titles.push(movie.title);
}
console.log(titles);

const nolanMovies = [];
for(const movie of movieList){
    if(movie.director==='Christopher Nolan'){
        nolanMovies.push(movie);
    }
}
console.log('there are '+nolanMovies.length+' movies of Christopher Nolan');

const bestTitles = [];
for(movie of movieList){
    if(movie.imdbRating >= 7.5){
        bestTitles.push(movie.title);
    }
}
console.log(bestTitles);

let ratingSum = 0;
let averageRating = 0;
for(movie of nolanMovies){
    ratingSum = ratingSum + movie.imdbRating;
}
averageRating = ratingSum / movieList.length;
console.log(averageRating);

/* 
Problems:
 the state can be modified anywhere in the source code. 
This is convenient but  leads to a lot of bugs and maintenance headaches.
When the size of the program and complexity grows, 
there is a higher chance for the programmer to make a mistake accidentally.
(Accidental state mutation: to mutate a part of the state by mistake and harder to monitor the state modifications). 
Simply imperative programming creates complexity as the program size increases.
*/

//Solution: Splitting program into functions
const getTitles = () => {
    let allTitles = [];
    for(const movie of movieList){
        allTitles.push(movie.title);
    }
    return allTitles;
}
const chrisNolanMovies = [];
const getNolanMovies = () => {
    for(const movie of movieList){
        if(movie.director === 'Christopher Nolan'){
            chrisNolanMovies.push(movie);
        }
    }
    return chrisNolanMovies;
}
const getBestTitle = () => {
    let bestMovieTitles = [];
    for(const movie of movieList){
        if(movie.imdbRating >= 7.5){
            bestMovieTitles.push(movie.title);
        }
    }
    return bestMovieTitles;
}
const getAverageRatingOfMovies = () => {
    let rating = 0;
    let average = 0;
    for(const movie of chrisNolanMovies){
        rating = rating + movie.imdbRating;
    }
    average = rating / chrisNolanMovies.length;
    return average;
}
console.log(getTitles());
getNolanMovies();
console.log(chrisNolanMovies.length);
console.log(getBestTitle());
console.log(getAverageRatingOfMovies());