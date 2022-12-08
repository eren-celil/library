const submit = document.querySelector(".submit");

const title = document.querySelector(".title-form");
const author = document.querySelector(".author-form");
const pages = document.querySelector(".pages-form");

const title_number = document.querySelector(".num-begin");
const title_begin = document.querySelector(".title-begin");
const author_begin = document.querySelector(".author-begin");
const pages_begin = document.querySelector(".pages-begin");

let num = 0;

function count() {
  num++;
  return num;
}


title_number.textContent = num;
function Book(num, title, author, pages) {
  this.num = num;
  this.title = title;
  this.author = author;
  this.pages = pages;
}

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (title.value == "" || author.value == "" || pages.value == "") {
    alert("lutfen tum kisimlari doldurunuz efenim");
  } else if (
    title_begin.textContent == "" &&
    author_begin.textContent == "" &&
    pages_begin.textContent == ""
  ) {
        
    let book = new Book(count() ,title.value, author.value, pages.value);
    title_begin.textContent = book.title;
    author_begin.textContent = book.author;
    pages_begin.textContent = book.pages;
  } else {
    addRow(count(), title.value, author.value, pages.value);
  }
});

