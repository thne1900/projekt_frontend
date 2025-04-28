"use strict";

let books=[];

window.onload=()=>{
    getBooks();
  
}
let url="https://stephen-king-api.onrender.com/api/books";

async function getBooks() {
    try {
        const response=await fetch(url);
    
    if(!response.ok) {
        throw new Error("Fel vid inhämtningen av böckerna");
    }
const data=await response.json();
books=data.data;

let booksToDisplay=[1,2,3,5,10,14,19,27,29,46,52,55,60,61,62];

    let filteredBooks=books.filter(book=>booksToDisplay.includes(book.id));

    /*console.table(filteredBooks);*/

    displayBooks(filteredBooks);

/*console.table(books);*/

} catch (error){
    console.error("Gick inte att hämta böckerna", error);
}  


function displayBooks(books) {

    let booksList=document.getElementById("books-list");

    booksList.innerHTML="";


   books.forEach(book=>{
        /*console.log(book);*/

        let list=document.createElement("li");
        list.innerHTML=`Bokens titel: ${book.Title} Bokens år: ${book.Year}`;

        let movieButton=document.createElement("button");
        let closeButton=document.createElement("button");

        movieButton.innerText="Bokens filminfo";
        closeButton.innerText="STÄNG";

        let movieText=document.createElement("div");
        movieText.style.display="none";
        list.appendChild(movieText);

        movieButton.onclick=()=>{
            toggleMovieText(movieText, book.Title, movieButton);
        };
        closeButton.onclick=()=>{
            movieText.style.display="none";
            movieButton.innerText="Bokens filminfo";
        };

        list.appendChild(movieButton);

movieText.appendChild(closeButton);

        booksList.appendChild(list);
    });
}

function toggleMovieText(movieText, title, movieButton) {
    if(movieText.style.display==="none"){
        getMovie(title, movieText);
        movieButton.innerText="STÄNG";
    }else{
        movieText.style.display="none";
        movieButton.innerText="Bokens filminfo";
    }
}
}

async function getMovie(title, movieText){

    let movieUrl=`http://www.omdbapi.com/?apikey=1af9efb&t=${title}`;
    console.log(movieUrl);

    try {
        const response=await
        fetch(movieUrl);

        if (!response.ok) {
            throw new Error("Fel vid inhämtningen av filmdatan");
        }

        const dataMovie=await response.json();

        if(dataMovie.Response==="True"){

            movieText.innerHTML=`Filmtitel: ${dataMovie.Title}, År: ${dataMovie.Year} Poster:`;

            let moviePoster=document.createElement("img");
            moviePoster.src=dataMovie.Poster;
            moviePoster.alt=`${dataMovie.Title} poster`;

            movieText.appendChild(moviePoster);
            movieText.style.display="block";
        }else{
            movieText.innerHTML="Ingen film kunde hittas till denna boken";
            movieText.style.display="block";
        }

    }catch (error){
        console.error("Gick inte att hämta datan om filmerna", error);
    }
}