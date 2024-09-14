const newBookBtn = document.querySelector(".new-book");
const dialog = document.querySelector(".dialog");
const submitBtn = document.querySelector(".submit-btn");
const form = document.querySelector("#form");
const bookContainer = document.querySelector(".book-container");
const toggleBtn = document.querySelector(".toggle-btns");
const closeBtn = document.querySelector(".close-btn");

const myLibrary = [];

showBooks();

/*
  Project TODO's:
  - Make the status tooggle a switch
  - Add a close button
  - Make the clicked card info appear in the 3 side panel boxes
*/

newBookBtn.addEventListener("click", () => {
  dialog.showModal();
});

closeBtn.addEventListener("click", () => {
  dialog.close();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  const pages = document.querySelector("#pages");
  const status = document.querySelector('input[name="status"]:checked')
    ? document.querySelector('input[name="status"]:checked')
    : null;

  let book = new Book(title.value, author.value, pages.value, status.value);

  addBookToLibrary(book);
  form.reset();
  dialog.close();
});

bookContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("remove-book")) {
    const bookDiv = event.target.closest(".book");
    const index = bookDiv.getAttribute("data-index");

    myLibrary.splice(index, 1);
  } else if (event.target.classList.contains("toggle-btn")) {
    const bookDiv = event.target.closest(".book");
    const index = bookDiv.getAttribute("data-index");

    myLibrary[index].read == "read"
      ? (myLibrary[index].read = "notRead")
      : (myLibrary[index].read = "read");
  } else {
    return;
  }
  showBooks();
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  showBooks();
}

function showBooks() {
  bookContainer.innerHTML = "";

  myLibrary.forEach((book, index) => {
    let title = book.title;
    let author = book.author;
    let pages = book.pages;
    let read = book.read;

    let templateString = `
              <div class="book" data-index="${index}">
            <div class="book-card-title">Book Card</div>
            <div>${title}</div>
            <div>${author}</div>
            <div class="page-count">
              <div>Page Count:</div>
              <div>${pages}</div>
            </div>
            <div class="book-status">
              <div>Status</div>
              <div>${read == "read" ? "Read" : "Not read"}</div>
              <div class="remove-book">Remove</div>
              <div class="toggle-btn">Toggle</div>
            </div>
          </div>
    `;

    bookContainer.innerHTML += templateString;
  });
}

let sampleBook = new Book("Robnson Kruzo", "Daniel Defo", 200, "read");
addBookToLibrary(sampleBook);
