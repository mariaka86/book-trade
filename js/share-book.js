/**
* @file share-books.js
* @date 2022-07-14
* @author mkariuki
* @description adding added book to browse books
*/
'use strict';

//const libraryKey = 'our-library';
//fillStockForTesting();

// storing books to local storage

/**
 * get array of books from local storage, add new book to array, store array back to local storage
 *
 * @param {Book} book -  book to add
 */
function addBooksStorage(book) {
  let books = getBooksStorage();

  console.log ('addBooksStorage',books);

  books.push(book);
  localStorage.setItem('our-library',JSON.stringify(books));
}

// getting books from storage
/**
  * returns books from array
  *
  * @returns {array} - the array of books from local storage
  */
function getBooksStorage(){
  let result = localStorage.getItem('our-library');
  console.log('getBooksStorage', result);
  if (result === null){
    return[];
  } else{
    let bookArray = JSON.parse(result);
    //structure
    return bookArray;
  }
}

/**
 * submit button that prompts adding a book
 */
function handleSubmit(){
  let titleValue = document.getElementById('booktitle').value;
  let authorValue = document.getElementById('author').value;
  addBooksStorage(new Book(titleValue,authorValue));
  userDataObject.allUsers[userDataObject.currentUser.index] = userDataObject.currentUser;
  localStorage.setItem(userKey, JSON.stringify(userDataObject));

  updateUserShelf();
}

function updateUserShelf(){
  let shelfKey = JSON.parse(localStorage.getItem('userKey'));
  let getEmptyShelf = userDataObject.currentUser.bookshelf;
  let userTokens = userDataObject.currentUser.tokens;
  console.log(userTokens);
  let addedBooksByUser= {
    title: document.getElementById('booktitle').value,
    author: document.getElementById('author').value,
  };
  console.log(addedBooksByUser);
  getEmptyShelf.push(addedBooksByUser);
  let bookCount = getEmptyShelf.length;
  console.log(bookCount);
  if (bookCount > 0){
    userTokens += bookCount ++;
  }
  console.log(userTokens);
  localStorage.setItem('userKey', JSON.stringify(shelfKey));

}




