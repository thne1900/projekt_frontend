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
        list.innerHTML=`<i class="fa-solid fa-book-skull"></i> Bokens titel:<span style="color:#CA2B03; font-size:1.3em;"> ${book.Title}</span> Bokens år:<span style="color:#CA2B03;"> ${book.Year}</span>`;

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

        list.style.marginBottom="10%";

        movieButton.style.backgroundColor="#ED6E00";
        movieButton.style.color="white";
        movieButton.style.fontSize="1em";
        movieButton.style.fontWeight="bold";
        movieButton.style.textShadow="4px 4px 8px rgba(0,0,0,0.7)";
        movieButton.style.width="95%";
        movieButton.style.padding="4%";
        movieButton.style.boxShadow="6px 6px 8px rgba(0,0,0,0.5";
        movieButton.style.cursor="pointer";
        movieButton.style.marginBottom="6%";


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

            movieText.innerHTML=`<i class="fa-solid fa-film"></i> Filmtitel:<span style="color:#ED6E00; font-size:1.3em;"> ${dataMovie.Title}</span>, År:<span style="color:#ED6E00;"> ${dataMovie.Year}</span> Poster:`;

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

