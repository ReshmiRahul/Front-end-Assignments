//#### LAB 4 - FUNCTIONS ####
//PART 3:  WALKING THE DOG 


//################## CREATE YOUR checkTemp FUNCTION


//This function will checks if the whether is good for the dog's walking.
//It expects to receive one parameter that is currentTemp which is a number.
//It will return true if the temperature is between -10 and 30, otherwise it will return false.

//@param {number} currentTemp - The current temperature to check.
//* @returns {boolean} - True if the temperature is safe, otherwise return false.

//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS

function checkTemp(currentTemp)
{
    if(currentTemp > 30 || currentTemp < -10){
        return false;
    }
    return true;
}

// Prompt the user for the current temperature.
const enterTemp = parseFloat(window.prompt("Enter the current temperature!"));

// Check if the temperature is safe for dog's walking.
if(checkTemp(enterTemp)){
    window.alert("You’re good, have a nice walk!");
}
else{
    window.alert("Yikes! This is no weather for dog walking!");
}



