const book = {
    name: "Tiems kurie neskaito",
    author: "Benas Lastauskas",
    pageCount: 238
  };
  
  function printBook() {
    console.log(`The book "${book.name}" by ${book.author} has ${book.pageCount} pages.`);
  }
  
  printBook();