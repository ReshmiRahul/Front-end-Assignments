//######## LAB 2-3 EMAIL SIGNUP ########
alert("hey 2.3");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES =========
var userconfirm = window.confirm("Are you interested in join our mailing list!!!")


//==== LOGIC =============
if (userconfirm === true) 
{
    const email = window.prompt('Please enter your email address:', 'me@example.com');
  

    if (email === null)
    {
        window.alert('Thank you, but your email was not valid.');
    } else if (email.trim() === '' || email === 'me@example.com') 
    {
        window.alert('Thank you, but your email was not valid.');
    } else 
    {
        window.alert('Thank you, our next newsletter will be sent to ' + email);
    }
} else 
{
    window.alert('Thank you, we will not bother you again.');
}

    