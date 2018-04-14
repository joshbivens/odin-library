const wrapper = document.querySelector(".wrapper");
const btn_open = document.querySelector(".btn_open");
const btn_add = document.querySelector(".btn_add");
const modal = document.querySelector(".modal");
const modalOverlay = document.querySelector(".modal-overlay");
const close = document.querySelector(".close");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");

let myLibrary = [
  {
    title: "The Hobbit",
    author: "JRR Tolkien",
    pages: 264,
    read: false
  },
  {
    title: "The Shadow of the Torturer",
    author: "Gene Wolfe",
    pages: 321,
    read: false
  },
  {
    title: "The Left Hand of Darkness",
    author: "Ursula Le Guin",
    pages: 356,
    read: true
  }
];

function Book(title, author, pages) {
  return {
    title: title,
    author: author,
    pages: pages,
    read: false
  }
}

function addBookToLibrary() {
  if (title.value && author.value && pages.value) {
    let temp = new Book(title.value, author.value, pages.value);
    myLibrary.push(temp);
    title.value = '';
    author.value = '';
    pages.value = '';
    closeModal(); 
    render();
  }
}

btn_add.addEventListener("click", addBookToLibrary);

function removeBookFromLibrary(index) {
  delete myLibrary[index];
  render();
}

function toggleRead(index) {;
  myLibrary[index].read = !myLibrary[index].read;
  render();
}

function openModal() {
  modalOverlay.style.display = 'block';
}

function closeModal() {
  modalOverlay.style.display = 'none';
}

btn_open.addEventListener("click", openModal);
close.addEventListener("click", closeModal);

function render() {
  wrapper.innerHTML = '';
  myLibrary.map((book, index) => {
    wrapper.innerHTML += `
    <div class="card" id="${index}">
      <span class="remove" onClick="removeBookFromLibrary(${index})">✕</span>
      <p><b>${book.title}</b></p>
      <p>${book.author}</p>
      <p>${book.pages} pages</p>
      <button 
        class="read"
        onClick="toggleRead(${index})"
        style="background: ${ book.read ? "steelblue" : "salmon"}">
          ${ book.read ? 'Read' : 'Unread' }
        </button> 
    </div>`;
  });
}

render();