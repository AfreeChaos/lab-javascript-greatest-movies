// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map(function(movie) {
        return movie.director
    })
    return directors
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const stevenDrama = moviesArray.filter (function(movie) {
        if (movie.director === "Steven Spielberg" && movie.genre.includes ("Drama")) {
            return movie
        }
    })
    return stevenDrama.length
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) return 0;
    else {
        const scoreAvg = moviesArray.filter (currentValue => {
            return typeof currentValue.score == "number";
        })
        let totalSum = scoreAvg.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.score
        }, 0)
        return parseFloat((totalSum/moviesArray.length).toFixed(2))
    }
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const muchoDrama = moviesArray.filter (function(movie) {
        if (movie.genre.includes("Drama")) {
            return true
        }}) 
        if (muchoDrama.length === 0) {
            return 0;
        }
        const sum = muchoDrama.reduce(function(sum, movie) {
            return sum + movie.score;
        }, 0);
        const masDrama = sum / muchoDrama.length;
        return +(masDrama.toFixed(2))
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const movieYear = moviesArray;
    movieYear.sort((a, b) => {
        if (a.year > b.year) return 1;
        if (a.year < b.year) return -1;
        if (a.year === b.year) {
            if (a.title > b.title) return 1;
            if (a.title < b.title) return -1
        }
    })
    return movieYear;
}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let arr = [];
    arr = moviesArray.map(movie => movie.title)
    const titleTitle = arr.sort();
    return titleTitle.slice(0, 20)
}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}



// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
