const model = document.querySelector('#model')
const addButton = document.getElementById('btn-add-book')
const closeModel = document.getElementById('close')
const UNCOMPLETED_BOOK_ID = "unread"
const COMPLETED_BOOK_ID = "read"
const BOOK_ITEMID = "itemId"

const addBook = () =>{
    const unCompletedBook = document.getElementById(UNCOMPLETED_BOOK_ID)
    // const completedBook = document.getElementById(COMPLETED_BOOK_ID)
    const inputTitle = document.getElementById('title').value;
    const inputAuthor = document.getElementById('author').value;
    const inputYear = document.getElementById('year').value;

    const book = makeBook(inputTitle , inputAuthor, inputYear, false)
    const bookObject = composeBookObject(inputTitle, inputAuthor, inputYear, false)

    book[BOOK_ITEMID] = bookObject.id;  
    books.push(bookObject); 

    unCompletedBook.append(book);
    updateDataToStorage()
}


const makeBook = (title , author , year , isCompleted) =>{
    const image = document.createElement('img')
    if(isCompleted) {
        image.setAttribute('src', './../../res/img/read.jpg')
      } else {
        image.setAttribute('src', './../../res/img/unread.jpg')
    }

    const imageBook = document.createElement('div');
    imageBook.classList.add('image-book');
    imageBook.append(image);

    const bookTitle = document.createElement('h3')
    bookTitle.innerText = title;

    const authorName = document = document.createElement('p')
    authorName.innerText = author;
    
    const bookYear = document = document.createElement('small')
    bookYear.innerText = `${year}`;

    const detail = document.createElement('div');
    detail.classList.add('detail-book');
    detail.append(bookTitle, authorName, bookYear);
    
    const container = document.createElement('div');
    container.classList.add('my-container2');
    container.append(imageBook, detail);

    if(isCompleted){
        container.append(
            createUnreadButton(),
            createTrashButton()
        );
    } else {
      container.append(
        createReadButton(),
        createTrashButton()
      )  
    }
    return container;
}

const createButton = (buttonTypeClass , eventListener) => {
    const button = document.createElement('button');
    button.classList.add(buttonTypeClass)

    button.addEventListener('click', function(event){
        eventListener(event);
    });
    return button;
}

const addBookToCompleted = (bookElement) =>{
    const bookCompleted = document.getElementById(COMPLETED_BOOK_ID)

    const bookTitle = bookElement.querySelector('.detail-book > h3').innerText
    const bookAuthor = bookElement.querySelector('.detail-book > p').innerText
    const bookYear = bookElement.querySelector('.detail-book > small').innerText

    const newBook = makeBook(bookTitle , bookAuthor, bookYear , true);
    const book = findBook(bookElement[BOOK_ITEMID]);
    book.isCompleted = true;
    newBook[BOOK_ITEMID] = book.id;

    bookCompleted.append(newBook);
    bookElement.remove();

    updateDataToStorage()
}

const removeBookFromCompleted = (bookElement) =>{
    const bookPosition = findBookIndex(bookElement[BOOK_ITEMID]);
    books.splice(bookPosition, 1);
    bookElement.remove();

    updateDataToStorage()
} 

const undoBookFromCompleted = (bookElement) => {

    const listUncompleted = document.getElementById(UNCOMPLETED_BOOK_ID)

    const bookTitle = bookElement.querySelector('.detail-book > h3').innerText
    const bookAuthor = bookElement.querySelector('.detail-book > p').innerText
    const bookYear = bookElement.querySelector('.detail-book > small').innerText

    const newBook = makeBook(bookTitle, bookAuthor, bookYear, false);
    const book = findBook(bookElement[BOOK_ITEMID]);
    book.isCompleted = false;
    newBook[BOOK_ITEMID] = book.id;
    
    listUncompleted.append(newBook);
    bookElement.remove();

    updateDataToStorage()
}


// make function Button read
const createReadButton = () => {
    return createButton('read-button' , function (event) {
        addBookToCompleted(event.target.parentElement)
    });
}

// make function Button remove 
const createTrashButton = () => {
    return createButton("trash-book", function(event){
        removeBookFromCompleted(event.target.parentElement);
    });
}

const createUnreadButton = () => {
    return createButton("unread-button", function(event){
      undoBookFromCompleted(event.target.parentElement);
    });
}

const booksLength = () => {
    const countBook = document.getElementById('countBook');
    countBook.innerText = books.length;
}

addButton.addEventListener('click', () => {
    model.classList.toggle('model-open')
})

closeModel.addEventListener('click' , () => {
    model.style.transition = '1s';
    model.classList.toggle('model-open')
})

document.addEventListener('DOMContentLoaded', function(){
    const submitForm = document.getElementById('form');
    submitForm.addEventListener('submit', function (event){
        event.preventDefault();
        model.classList.remove('model-open');
        addBook()
    });

    if(checkStorage()){
        loadDataFromStorage()
    }
});

document.addEventListener('ondatasaved',() => {
    console.log('Data saved');
    booksLength();
});

document.addEventListener('ondataloaded', () => {
    refreshDataFromBooks();
    booksLength();
})

