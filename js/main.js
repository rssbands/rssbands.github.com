const fillBooks = () => {
  // получение ссылки на тело таблицы 
  let books = document.getElementById('books');
  booksBase.forEach(function(item, i, arr){
  // создание строки
  let row = document.createElement('tr');
  // получение картинки
  let bookImage = document.createElement('img');
      bookImage.setAttribute('src', './images/'+ item['img'])
      bookImage.classList.add('bookImage');
  // оборачивание картинки в ссылку    
  let bookLink = document.createElement('a');
      bookLink.setAttribute('href', item['bh'])
      bookLink.setAttribute('target', '_blank');
      bookLink.appendChild(bookImage);    
  // добавление размера книги    
  let bookSize = document.createElement('h4');
      bookSize.textContent = item['bs'];
  // добавление всего в первую ячейку строки    
  let book = document.createElement('td');
      book.appendChild(bookLink);
      book.appendChild(bookSize);

  let bookDescription = document.createElement('td');
  // название книги
      let bookName = document.createElement('h3');    
      bookName.textContent=item['bn'];
  // описание книги    
  let description = document.createElement('p');        
      description.textContent=item['bd'];
  // добавление всего во вторую ячейку строки    
  let bookDescriptionContent = document.createElement('div');    
  bookDescriptionContent.classList.add('description');    
  bookDescriptionContent.appendChild(bookName);
  bookDescriptionContent.appendChild(description);        
  bookDescription.appendChild(bookDescriptionContent);

  // заполнение строки и добавление в таблицу            
  row.appendChild(book);
  row.appendChild(bookDescription);
  books.appendChild(row);    

  });
};


const fillLinks = () => {
  // получение ссылки на тело таблицы 
  let books = document.getElementById('books');
  booksBase.forEach(function(item, i, arr){
  // создание строки
  let row = document.createElement('tr');
  // получение картинки
  let bookImage = document.createElement('img');
      bookImage.setAttribute('src', './images/'+ item['img'])
      bookImage.classList.add('bookImage');
  // оборачивание картинки в ссылку    
  let bookLink = document.createElement('a');
      bookLink.setAttribute('href', item['bh'])
      bookLink.setAttribute('target', '_blank');
      bookLink.appendChild(bookImage);    
  // добавление размера книги    
  let bookSize = document.createElement('h4');
      bookSize.textContent = item['bs'];
  // добавление всего в первую ячейку строки    
  let book = document.createElement('td');
      book.appendChild(bookLink);
      book.appendChild(bookSize);

  let bookDescription = document.createElement('td');
  // название книги
      let bookName = document.createElement('h3');    
      bookName.textContent=item['bn'];
  // описание книги    
  let description = document.createElement('p');        
      description.textContent=item['bd'];
  // добавление всего во вторую ячейку строки    
  let bookDescriptionContent = document.createElement('div');    
  bookDescriptionContent.classList.add('description');    
  bookDescriptionContent.appendChild(bookName);
  bookDescriptionContent.appendChild(description);        
  bookDescription.appendChild(bookDescriptionContent);

  // заполнение строки и добавление в таблицу            
  row.appendChild(book);
  row.appendChild(bookDescription);
  books.appendChild(row);    

  });
};

fillBooks();