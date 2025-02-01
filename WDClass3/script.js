// 搜索书籍的功能
function searchBook() {
    const searchQuery = document.getElementById('search').value.trim();
    if (searchQuery) {
        alert(`Searching for: ${searchQuery}`);
        // 在这里添加实际的搜索逻辑，例如筛选书籍
    } else {
        alert('Please enter a book title.');
    }
}
