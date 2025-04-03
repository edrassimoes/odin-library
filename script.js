const formButton = document.getElementById("createBook");
const dialog = document.querySelector("dialog")
const closeButton = document.querySelector("dialog button");
const submitButton = document.querySelector(".submit-button");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("page");
const removeButton = document.querySelector(".remove-button");

const myLibrary = [];

function Book(title, author, pages) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(title, author, pages) {
    const book = new Book(title, author, pages);
    myLibrary.push(book);
}

function removeBookFromLibrary(id) {
    let bookIndex= 0;
    myLibrary.forEach((book) => {
        if (book.id === id) {
            bookIndex = myLibrary.indexOf(book);
            myLibrary.splice(myLibrary.indexOf(book), 1);
        }
    })
}

formButton.addEventListener("click", () => dialog.showModal());
closeButton.addEventListener("click", () => dialog.close());

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    let bookTitle = title.value;
    let bookAuthor = author.value;
    let bookPages = pages.value;
    addBookToLibrary(bookTitle, bookAuthor, bookPages);
});

removeButton.addEventListener("click", (event) => {
    removeBookFromLibrary(event.target);
});

myLibrary.forEach((book) => {
    const library = document.querySelector('.library');
    const bookInfo = document.createElement("p");
    const newBook = document.createElement("div");
    bookInfo.innerHTML = `<strong>Id</strong> ${book.id} <strong>Título</strong> ${book.title} <strong>Autor</strong> ${book.author} <strong>Páginas</strong> ${book.pages} <input class="remove-book" type="button" value="❌">`
    newBook.appendChild(bookInfo);
    newBook.classList.add("book");
    library.appendChild(newBook);
})
