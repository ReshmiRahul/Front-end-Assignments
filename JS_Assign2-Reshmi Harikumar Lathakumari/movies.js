//################## CREATE userSelection FUNCTION

/**
 * This function will ask the user to select a top movie from a list.
 * It expects to receive a number input from the user, corresponding to the position of the movie in the top 7 list.
 * It will return the movie name if the number is between 1 and 7, otherwise it will re-prompt the user.
 */


//Declare and initialize 7 constants with 7 movie names.
const movie1 = "Gladiator";
const movie2 = "The Avengers";
const movie3 = "Jurassic Park";
const movie4 = "The Matrix";
const movie5 = "Titanic";
const movie6 = "Avatar";
const movie7 = "Inception";

// Create an array to hold these constants
const topMovies = [movie1, movie2, movie3, movie4, movie5, movie6, movie7];

// Function to ask the user for input and display the corresponding movie
function userSelection() {
    // Prompt the user to select a movie by picking a number between 1 and 7
    let likedMovie = window.prompt("Which top 7 movie would you like? ", "Pick a number: 1-7");

    // Validating the user input
    if (likedMovie !== null) {
        let movieNumber = parseInt(likedMovie);
        // Check if the input is a valid number between 1 and 7
        if (movieNumber >= 1 && movieNumber <= 7) {
            window.alert("Number " + movieNumber + " on the list is " + topMovies[movieNumber - 1]);
        } else {
            alert("Please enter a number between 1 and 7!");
            // Re-ask the user if the input is invalid
            userSelection(); 
        }
    } else {
        window.alert("Cancelled the prompt.");
    }
}
// Output all movies to the console
for (let i = 0; i < topMovies.length; i++) {
    console.log("Movie " + (i + 1) + " : " +topMovies[i]);
}

// Initial call to ask the user for input
userSelection();
