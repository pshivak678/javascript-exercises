const addBookButton = document.getElementById('addBookButton');
const bookname = document.getElementById('addTitle');
const authorName = document.getElementById('addAuthor');
const bookList = document.getElementById("bookList");
const popUp = document.getElementsByClassName('popup');
const addToList = document.getElementById('addToList');


addBookButton.addEventListener('click', function() {
      popUp[0].style.display = "block";
}
)
addToList.addEventListener('click',bookDetails);

let myLibrary = [];

function bookDetails(name,author){
        this.name = name;
        this.author = author;
        var x = bookname.value;
        myLibrary.push(x);
        console.log(myLibrary)
        // lastBook = [myLibrary.at(-1)];
        // lastBook.forEach(addBookToLibrary);
    }

bookDetails('shiva','pulli');


function addBookToLibrary() {
    let bookCard = '';
    let authorName = '';
    bookname = bookCard;
    authorName = authorName; 
    const bookTable = document.createElement('div');
    const bookText = document.createTextNode(bookCard);
    const authoris = document.createElement('div');
    const authorText = document.createTextNode(authorName);
    const isreadBook = document.createElement('div');
    const isreadText = document.createTextNode('True');
    bookTable.appendChild(authorText);
    bookList.appendChild(authoris);
    bookTable.appendChild(bookText);
    bookList.appendChild(bookTable);
    bookTable.appendChild(isreadText);
    bookList.appendChild(isreadBook);
         
}

















































































// function book(name,author,read) {
//         this.name = name,
//         this.author= author,
//         this.read = read
//     // var x = bookname.value;
//     // myLibrary.push(x);
//     // lastBook = [myLibrary.at(-1)];
//     // lastBook.forEach(books);
// }

// function addBookToLibrary(){
//     myLibrary.push(book);
//     console.log(myLibrary);
// }

// // const book1= new addBookToLibrary(bookname,authorName,read);
// // console.log(book1.name);



// function books(book,author,isread){
    // let bookCard = '';
    // let authorName = '';
    // this.book = bookCard;
    // this.author = authorName; 
    // const bookTable = document.createElement('div');
    // const bookText = document.createTextNode(bookCard);
    // const authoris = document.createElement('div');
    // const authorText = document.createTextNode(authorName);
    // const isreadBook = document.createElement('div');
    // const isreadText = document.createTextNode('True');
    // bookTable.appendChild(authorText);
    // bookList.appendChild(authoris);
    // bookTable.appendChild(bookText);
    // bookList.appendChild(bookTable);
    // bookTable.appendChild(isreadText);
    // bookList.appendChild(isreadBook);
// }








