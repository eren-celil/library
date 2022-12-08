const submit = document.querySelector(".submit");

const title = document.querySelector(".title-form");
const author = document.querySelector(".author-form");
const pages = document.querySelector(".pages-form");

const title_number = document.querySelector(".num-begin");
const title_begin = document.querySelector(".title-begin");
const author_begin = document.querySelector(".author-begin");
const pages_begin = document.querySelector(".pages-begin");

const tbody = document.querySelector(".tbody");
const newRow = document.createElement("tr");
const newHeader = document.createElement("th");
const newTable = document.createElement("td");
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
    title_number.textContent = num;
    title_begin.textContent = book.title;
    author_begin.textContent = book.author;
    pages_begin.textContent = book.pages;
  } else {
    tbody.appendChild(newBookAdd());
  }
});

//function addBook(){
//
// tbody
// .classList.add(`title_begin${num}`);
// newRow.appendChild(newHeader)
//}


const newBookAdd = () =>{
  let book = new Book(count() ,title.value, author.value, pages.value);
  var tr = document.createElement('tr');

  // Create the th element and set its class name
  var th = document.createElement('th');
  th.textContent = `${num}`;
  th.className = 'title-begin';

  // Add the th element to the tr element
  tr.appendChild(th);

  // Create the three td elements and set their class names
  var td1 = document.createElement('td');
  td1.textContent = book.title;
  td1.className = `num-begin${num}`;
  var td2 = document.createElement('td');
  td2.textContent = book.author;
  td2.className = `author-begin${num}`;
  var td3 = document.createElement('td');
  td3.textContent = book.pages;
  td3.className = `pages-begin${num}`;

  // Add the td elements to the tr element
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);

  // Add the tr element to the tbody element
  //tbody.appendChild(tr);

  // Return the tbody element
  //return tbody;
  return tr;
}