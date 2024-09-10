const newBookBtn = document.querySelector(".new-book");
const dialog = document.querySelector(".dialog");
const submitBtn = document.querySelector(".submit-btn");

const myLibrary = [];

newBookBtn.addEventListener("click", () => {
  dialog.show();
});

submitBtn.addEventListener("click", () => {
  dialog.close();
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  // do stuff here
}
