// Prompt the user for their team number (1 to 6)
var teamNumber = window.prompt("Please enter your team number (1 to 6)");

// Check if the input is null (cancel button clicked)
if (teamNumber === null) {
    window.alert("Access Denied! You cancelled the prompt.");
} else {
    // Check if the input is a number
    if (!isNaN(teamNumber)) {
        // If it's a number, check if it's within the range of 1 to 6
        if (teamNumber >= 1 && teamNumber <= 6) {
            // Prompt the user for their first name
            var firstName = window.prompt("Enter your first name: ");
            // Check if the input is null (cancel button clicked)
            if (firstName === null) {
                window.alert("Access Denied! You cancelled the prompt.");
            } else {
                // Define the valid names array
                var validNames = ['Reshmi', 'Fan', 'Suzanna', 'Vishnu'];
                var fullNames = ['Reshmi Harikumar', 'Fan Jiang', 'Suzanna Lam', 'Vishnu Varma'];
                //Getting the index of the entered firstname
                const index = validNames.indexOf(firstName);
                // Check if the entered first name is in the list of valid names
                if (index !== -1) { 
                    // Display a welcome message with the full name
                    window.alert("Welcome, " + fullNames[index] + "!");
                } else {
                    // If the name is not valid, display an access denied message
                    window.alert("Access Denied!");
                }
            }
        } else {
            // If the team number is not within the range, display an access denied message
            window.alert("Access Denied!!! Wrong team number!!!");
        }
    } else {
        // If the input is not a number, display an access denied message
        window.alert("Access Denied!!! It must be a number !");
    }
}
