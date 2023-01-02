const addBookButton = document.getElementById('addBookButton');
const addTitle = document.getElementById('addTitle');
const addAuthor = document.getElementById('addAuthor');
const isRead = document.getElementById('read');
const addToListButton = document.getElementById('addToListButton');
const popup = document.getElementsByClassName('popup');
const bookList = document.getElementById('bookList');
const deleteButton = document.getElementById('delete');

addBookButton.addEventListener('click',function(){
    popup[0].style.display = "block";
})

let myLibrary = [];

//constructor
function Book(title, author,read){
    this.title = title;
    this.author = author;
    this.read = read;
}

function addBookToLibrary(){
    title = addTitle.value;
    author = addAuthor.value;
    read = isRead.Checked;
    let book = new Book(title , author , read)
    myLibrary.push(book);
    latestBook = [myLibrary.at(-1)];
    console.log(latestBook);
    latestBook.forEach(displayList);
}

addToListButton.addEventListener('click',addBookToLibrary);

function displayList(){
    let bookCard = '';
    let authorName = addAuthor.value;
    bookCard = addTitle.value;
    console.log(bookCard); 
    const bookdiv = document.createElement('div');
    bookdiv.setAttribute('id',myLibrary.length);
    const bookelement = document.createElement('div');
    const bookText = document.createTextNode(bookCard);
    const authorelement = document.createElement('div');
    const authorText = document.createTextNode(authorName);
    const isreadBookelement = document.createElement('div');
    const isreadText = document.createTextNode('True');
    const deleteelement = document.createElement('div');
    const removetext = document.createTextNode('remove');
    deleteelement.setAttribute('id',"remove"+myLibrary.length);
    bookelement.appendChild(bookText);
    authorelement.appendChild(authorText);
    isreadBookelement.appendChild(isreadText);
    deleteelement.appendChild(removetext);
    bookdiv.appendChild(bookelement);
    bookdiv.appendChild(authorelement);
    bookdiv.appendChild(isreadBookelement);
    bookdiv.appendChild(deleteelement); 
    bookList.appendChild(bookdiv);
    const remove = document.getElementById('remove'+myLibrary.length);
    remove.addEventListener('click',function(){
        bookdiv.remove();
    })
}



