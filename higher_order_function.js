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

const filter = (all, func) => all.filter(func);
const nolan = x => x.director === 'Christopher Nolan';
const titles = movie => movie.map(x => x.title);
const nolanList = filter(movieList, nolan);

const goodrating = x => x.imdbRating >= 7.5;
const rating = movie => movie.map(x => x.imdbRating);
const average = arr => arr.reduce((a,b) => a+b,0)/arr.length;


console.log(titles(filter(movieList,goodrating)));
console.log(average(rating(nolanList)));