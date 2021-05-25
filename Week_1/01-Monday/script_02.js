const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

//==============================================================================
/* Ex-1: Sors-moi la liste des titres des livres du CDI */

const titles = books.map((book) => {
    return book.title;
});

//console.log(titles);


//==============================================================================
/* EX-2: Est-ce que tous les livres ont été empruntés au moins une fois ? */

const rentedOnce = books.map((book) => {
    return book.rented >= 1;
});

//console.log(rentedOnce);


//==============================================================================
/* EX-3: livre le plus emprunté */

const mostRented = books.reduce((result, book) => {
    if (book.rented > result.rented) {
        return book;
    } else {
        return result;
    }
});

//console.log(mostRented);


//==============================================================================
/* EX-4: livre le moins emprunté */

const leastRented = books.reduce((result, book) => {
    if (book.rented < result.rented) {
        return book;
    } else {
        return result;
    }
});

//console.log(leastRented);


//==============================================================================
/* EX-5: Supprime le livre avec l'ID 133712 */

const deleteBook = books.filter((book) => {
    if (book.id === 133721)
        delete book;
});

console.log(deleteBook);




