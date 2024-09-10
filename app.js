const newBookBtn = document.querySelector(".new-book");
const dialog = document.querySelector(".dialog");
const submitBtn = document.querySelector(".submit-btn");
const form = document.querySelector("#form");

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
