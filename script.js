// script.js
const API_URL = 'https://jsonplaceholder.typicode.com/posts'; // api endpoint for demonstration
let books = [];

document.addEventListener('DOMContentLoaded', () => {
    fetchBooks();
    document.getElementById('create-book-btn').addEventListener('click', showCreateForm);
    document.getElementById('back-btn').addEventListener('click', showBookList);
    document.getElementById('new-book-form').addEventListener('submit', createNewBook);
});

function fetchBooks() {
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            books = data.slice(0, 10); // show only the first 10 books for simplicity
            renderBookList();
        });
}

function renderBookList() {
    const bookList = document.getElementById('books');
    bookList.innerHTML = '';

    books.forEach(book => {
        const bookItem = document.createElement('li');
        bookItem.textContent = book.title; // show the title of the book
        bookItem.addEventListener('click', () => showBookDetails(book));
        bookList.appendChild(bookItem);
    });
}

function showBookDetails(book) {
    document.getElementById('book-list').style.display = 'none';
    document.getElementById('create-book-form').style.display = 'none';
    document.getElementById('book-details').style.display = 'block';

    const bookInfo = document.getElementById('book-info');
    bookInfo.innerHTML = `
        <p><strong>Title:</strong> ${book.title}</p>
        <p><strong>Body:</strong> ${book.body}</p>
    `;
}

function showCreateForm() {
    document.getElementById('book-list').style.display = 'none';
    document.getElementById('book-details').style.display = 'none';
    document.getElementById('create-book-form').style.display = 'block';
}

function showBookList() {
    document.getElementById('book-details').style.display = 'none';
    document.getElementById('create-book-form').style.display = 'none';
    document.getElementById('book-list').style.display = 'block';
}

function createNewBook(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const editorial = document.getElementById('editorial').value;
    const edition = document.getElementById('edition').value;
    const pages = document.getElementById('pages').value;

    const newBook = { title, author, editorial, edition, pages };

    // update the API URL to your own backend endpoint
    fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBook),
    })
    .then(response => response.json())
    .then(data => {
        books.push(data); // update book list with new book
        renderBookList();
        showBookList();
    });
}


function createNewBook(event) {
    event.preventDefault();

    const title = document.getElementById('title').value.trim();
    const author = document.getElementById('author').value.trim();
    const editorial = document.getElementById('editorial').value.trim();
    const edition = document.getElementById('edition').value.trim();
    const pages = document.getElementById('pages').value.trim();

    if (!title || !author || !editorial || !edition || !pages) {
        alert('All fields are required!');
        return;
    }

    const newBook = { title, author, editorial, edition, pages };

    fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBook),
    })
    .then(response => response.json())
    .then(data => {
        books.push(data); // Simulate adding the new book locally
        renderBookList();
        showBookList();
    });
}

function showBookDetails(book) {
    document.getElementById('book-list').style.display = 'none';
    document.getElementById('create-book-form').style.display = 'none';
    document.getElementById('book-details').style.display = 'block';

    const bookInfo = document.getElementById('book-info');
    bookInfo.innerHTML = `
        <p><strong>Title:</strong> ${book.title}</p>
        <p><strong>Author:</strong> ${book.author || 'N/A'}</p>
        <p><strong>Editorial:</strong> ${book.editorial || 'N/A'}</p>
        <p><strong>Edition:</strong> ${book.edition || 'N/A'}</p>
        <p><strong>Pages:</strong> ${book.pages || 'N/A'}</p>
    `;
}