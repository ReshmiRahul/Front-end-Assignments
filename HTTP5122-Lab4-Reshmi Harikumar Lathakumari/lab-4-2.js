//#### LAB 4 - FUNCTIONS ####
//PART 2:  AN AVERAGE FUNCTION


//################## CREATE YOUR AVERAGE FUNCTION
//This function takes five numbers and returns their average to one decimal place.
function getAverage(num1, num2, num3, num4, num5)
{
    return ((num1+num2+num3+num4+num5)/5).toFixed(1);
}

//Testing the  function
const average = getAverage(5,10,15,20,25);
console.log("Average of given numbers is: "+ average);

//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS

// Create five variables for course grades
const course1 = 89;
const course2 = 75;
const course3 = 69;
const course4 = 94;
const course5 = 92;

//Calculating the overall average
const courseAverage = getAverage(course1,course2,course3,course4,course5);

// Check whether the overall average is greater than or equal to 70 or not
if(courseAverage >= 70){
    window.alert("Success: Your overall average is " + courseAverage);
}
else{
    window.alert("Review Required: Your overall average is " + courseAverage);
}