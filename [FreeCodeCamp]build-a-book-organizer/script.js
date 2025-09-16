let books = [
  {
    title: "A",
    authorName: "Fulano",
    releaseYear: 2020,
  },
  {
    title: "B",
    authorName: "Ciclano",
    releaseYear: 2021,
  },
  {
    title: "C",
    authorName: "Beltrano",
    releaseYear: 2024,
  },
  {
    title: "D",
    authorName: "Voltrano",
    releaseYear: 2021,
  }
]

function sortByYear(obj1, obj2) {
  if(obj1.releaseYear < obj2.releaseYear) {
    return -1;
  }else if(obj1.releaseYear > obj2.releaseYear) {
    return 1;
  }else {
    return 0;
  }
}

let filteredBooks = [];

filteredBooks = books.filter((book) => book.releaseYear === 2021);

filteredBooks.sort(sortByYear);