//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 1:  I OBJECT!

// Creating an object to store the details of a book
const book = {
    title: "The God of Small Things",
    author: "Arundhati Roy",
    yearPublished: 1997,
    genre: "Fiction",
    
    //method to output two of the properties concatenated together
    displayBook : function(){
        window.alert("The book name is \""+ this.title + "\" and the author of the book is \""+ this.author + "\"");        
    }
};

//console to output one of the properties.
console.log(book.author);

//Create a popup that will output two of the properties concatenated together
//window.alert("The book name is "+ title + "and the author of the book is "+ author);

// Call the method to display the concatenated properties
book.displayBook();


    