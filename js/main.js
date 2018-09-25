
const books = document.getElementById('library');
const articles = document.getElementById('articles');

fetch("input.json")
.then(response => response.json())
.then(json => {
    json.books.forEach(function({ bh, img, bs, bn, bd }) {
        createBooksLibrary(books, bh, img, bs, bn, bd);
    });
}
);

function createBooksLibrary(parent, bh, img, bs, bn, bd) {
    const bookRow = document.createElement('div');
    parent.appendChild(bookRow);
    bookRow.classList.add('book-row');

    const bookCover = document.createElement('div');
    bookRow.appendChild(bookCover);
    bookCover.classList.add('book-cover');

    const bookLink = document.createElement('a');
    bookLink.setAttribute('href', bh)
    bookLink.setAttribute('target', '_blank');
    bookCover.appendChild(bookLink); 

    const bookCoverIcon = document.createElement('div');
    bookLink.appendChild(bookCoverIcon);
    bookCoverIcon.classList.add('book-cover-icon');
    bookCoverIcon.style.backgroundImage = 'url(img/books/' + img + ')'; 

    const bookDescription = document.createElement('div');
    bookRow.appendChild(bookDescription);
    bookDescription.classList.add('book-description');

    const bookSize = document.createElement('p');
    bookCover.appendChild(bookSize);
    bookSize.textContent = bs;

    const bookTextName = document.createElement('p');
    bookDescription.appendChild(bookTextName);
    bookTextName.textContent = bn;

    const bookTextDescription = document.createElement('p');
    bookDescription.appendChild(bookTextDescription);
    bookTextDescription.textContent = bd;
}




