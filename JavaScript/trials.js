// function areaOfRectangle(height, width){
//     let result = height * width;
//     return result;
// }

// areaOfRectangle(2,2);
// console.log("hekkoasfns");

let books = [
    {title:"Lord of the Rings", 
    autor:"J.R.R Tolkein",   
    year:"2021"
    },

    {title:"Prison Break",  
    author:"Micheal Scofield",
     year:"2006"
    },

    {title:"Game of Thrones", 
    author:"Micheal Scofield", 
    year:"2006"}
];

function addBook(title, author, year){
    let book = {title, author, year};
    books.push(book);
}



function listBooks(){
    for (var book in books){
        console.log(books[book]);
    }
 }

 addBook("Ananse","Kweku","2001");

 listBooks();