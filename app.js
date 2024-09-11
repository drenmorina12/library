const newBookBtn = document.querySelector(".new-book");
const dialog = document.querySelector(".dialog");
const submitBtn = document.querySelector(".submit-btn");
const form = document.querySelector("#form");
const bookContainer = document.querySelector(".book-container");

const myLibrary = [];

newBookBtn.addEventListener("click", () => {
  dialog.showModal();
});

submitBtn.addEventListener("click", () => {});

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
}

function showBooks() {
  myLibrary.forEach((book) => {
    let title = book.title;
    let author = book.author;
    let pages = book.pages;
    let read = book.read;

    let templateString = `
              <div class="book">
            <div>Book Card</div>
            <div>${title}</div>
            <div>${author}</div>
            <div class="page-count">
              <div>Page Count:</div>
              <div>${pages}</div>
            </div>
            <div class="book-status">
              <div>Status</div>
              <div>${read == "read" ? "Read" : "Not read"}</div>
              <div>Remove</div>
              <div>Toggle</div>
            </div>
          </div>
    `;

    bookContainer.innerHTML += templateString;
  });
}
