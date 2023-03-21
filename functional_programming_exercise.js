//exercise 1
/*
Write a program that shows the titles of movies released before the year 2000
2000
, using functional programming.

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

  function olderMovies(movieList){
  
    // TODO: Return an array of the titles of movies released before 2000
    const movies = movieList.filter(x => x.year < 2000);
    const title = movies.map(x => x.title);
    return title;
  }
//exercise 2
//Complete the following program to compute and return the names of political forms ending with "cy".

  const governmentForms = [{
    name: "Plutocracy",
    definition: "Rule by the wealthy"
},
{
    name: "Oligarchy",
    definition: "Rule by a small number of people"
},
{
    name: "Kleptocracy",
    definition: "Rule by the thieves"
},
{
    name: "Theocracy",
    definition: "Rule by a religious elite"
},
{
    name: "Democracy",
    definition: "Rule by the people"
},
{
    name: "Autocracy",
    definition: "Rule by a single person"
}];

function endCy(governmentForms) {
    //TODO: Return the names of political forms ending with 'cy'
    const a =  governmentForms.filter(x => x.name.endsWith('cy'));
    const result = a.map(x=>x.name);
    return result;
  }


  //exercise 3
  //Complete the following program to compute and return the total sum of the sub-arrays within the array.
  const arrays = [[1, 4], [11], [3, 5, 7]];
  function findSum(array) {
    //your code goes here// 
    let sum = 0;
    for(x of array){
        for(y of x){
            sum += y;
        }
    }
    return sum;
    }


    //exercise 4
    //Complete the following program to compute and return the female student’s results (name and average grade). Refactor it using functional programming. Execution results must stay the same.

    const students = [
        {
          name: "Anna",
          sex: "f",
          grades: [4.5, 3.5, 4]
        },
        {
          name: "Dennis",
          sex: "m",
          country: "Germany",
          grades: [5, 1.5, 4]
        },
        {
          name: "Martha",
          sex: "f",
          grades: [5, 4, 2.5, 3]
        },
        {
          name: "Brock",
          sex: "m",
          grades: [4, 3, 2]
        }
      ];
/* expected output
[ { name: 'Anna', sex: 'f', grades: 4 },
  { name: 'Martha', sex: 'f', grades: 3.625 } ]

*/      
    function studentResult(students){
  
        //TODO: Compute and Return female students results using functional programming.
        const fem = students.filter(x => x.sex === 'f');
        
        for(x of fem){
        let sum = 0;
              for(let i =0;i< x.grades.length;i++){
              sum += x.grades[i];
          }
          x.grades = sum/x.grades.length;
        }
        return fem;
      }