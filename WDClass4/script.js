// // 搜索书籍的功能
// function searchBook() {
//     const searchQuery = document.getElementById('search').value.trim();
//     if (searchQuery) {
//         alert(`Searching for: ${searchQuery}`);
//         // 在这里添加实际的搜索逻辑，例如筛选书籍
//     } else {
//         alert('Please enter a book title.');
//     }
// }

// document.getElementById("reserveButton").addEventListener("click",function(){
//     document.getElementById("reservationMessage").style.display = "block";
// });

document.addEventListener("DOMContentLoaded", function() {
    // reserve book
    const reserveButton = document.getElementById("reserveButton");
    if (reserveButton) {
        reserveButton.addEventListener("click", function() {
            document.getElementById("reservationMessage").style.display = "block";
        });
    }

    // search book
    const searchInput = document.getElementById("search");
    if (searchInput) {
        searchInput.addEventListener("keyup", function() {
            const query = this.value.toLowerCase();
            const books = document.querySelectorAll(".book-list li a");

            books.forEach(book => {
                if (book.textContent.toLowerCase().includes(query)) {
                    book.parentElement.style.display = "block";
                } else {
                    book.parentElement.style.display = "none";
                }
            });
        });
    }
});
