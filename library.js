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
    let temp = new Book(title.value, author.value, pages.value)
    myLibrary.push(temp);
    title.value = '';
    author.value = '';
    pages.value = '';
    closeModal(); 
    render();
  }
}

function removeBookFromLibrary(index) {
  myLibrary.splice(myLibrary[index], 1);
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
btn_add.addEventListener("click", addBookToLibrary);
close.addEventListener("click", closeModal);

function render() {
  myLibrary.forEach((book) => {
    
  })
  // wrapper.innerHTML = '';
  // for(let i = 0, x = myLibrary.length; i < x; i++) {
  //   wrapper.innerHTML += `
  //   <div class="card" id="${i}">
  //     <span onClick="removeBookFromLibrary(${i})">✕</span>
  //     <p><b>${myLibrary[i].title}</b></p>
  //     <p>${myLibrary[i].author}</p>
  //     <p>${myLibrary[i].pages} pages</p>
  //     <button 
  //       class="read"
  //       onClick="toggleRead(${i})"
  //       style="background: ${ myLibrary[i].read ? "steelblue" : "salmon"}">
  //         ${ myLibrary[i].read ? 'Read' : 'Unread' }
  //       </button> 
  //   </div>`;
  }
}

render();