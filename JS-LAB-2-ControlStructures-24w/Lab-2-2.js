//######## LAB 2-2 LOGIN ########
//1. LINK THIS JS FILE TO THE HTML FILE
alert("hey 2.2");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE

//====VARIABLES===============
//2. CREATE NECESSARY VARIABLES
		// Correct user name
var username = "dart";
		// Correct password
var password = "vader";
	

//====LOGIC===================
//3. CREATE POPUP BOX FOR USERNAME
confirmuser = window.prompt("Enter your username");
//4. OUTPUT PROVIDED USERNAME TO JS CONSOLE
console.log("Your username is "+confirmuser);
//5. CREATE POPUP BOX FOR PASSWORD
confirmpassword = window.prompt("Enter your password");

//6. OUTPUT PROVIDED PASSWORD TO JS CONSOLE
console.log("Your password is "+confirmpassword);
//7. CHECK IF PROVIDED USERNAME AND PROVIDED PASSWORD MATCH THE STORED USERNAME/PASSWORD
if(username===confirmuser && password===confirmpassword )
	
//8. IF THEY MATCH, POPUP SUCCESS MESSAGE AND OUTPUT TO CONSOLE
		{
			window.alert("Welcome back  "+username);
			console.log("Login successful");
		}

//9. IF THEY DON'T MATCH, POPUP INVALID MESSAGE & OUTPUT TO CONSOLE
else
		{
			window.alert("Invalid username/password");
			console.log("Login fail");
		}