const books = [
  { 
	  title: "React Billionaire", 
	  pages: 250, 
	  author: {
		  name: 'Alice',
		  age: 35
	  },
	  available: false,
	  price: '101€',
	  tags: ['advanced', 'js', 'react', 'senior']
  },
  { 
	  title: "Advanced JS", 
	  pages: 500, 
	  author: {
		  name: 'Bob',
		  age: 20
	  },
	  available: true,
	  price: '25€',
	  tags: ['advanced', 'js', 'mid-senior']
  },
  { 
	  title: "CSS Secrets", 
	  pages: 320, 
	  author: {
		  name: 'Alice',
		  age: 17
	  },
	  available: true,
	  price: '8€',
	  tags: ['html', 'css', 'junior']
  },
  { 
	  title: "HTML Mastery", 
	  pages: 200, 
	  author: {
		  name: 'Charlie',
		  age: 50
	  },
	  available: false,
	  price: '48€',
	  tags: ['html', 'advanced', 'junior', 'mid-senior']
  },
];

// Crea una funzione che somma due numeri.
// Crea un array (longBooks) con i libri che hanno più di 300 pagine;
// Creare un array (longBooksTitles) che contiene solo i titoli dei libri contenuti in longBooks.
// Stampa in console ogni titolo nella console.

function Somma(n1, n2){
    const longBooks = [];
    const longBooksTitles = [];

    for (let i = 0; i < books.length; i++){
        const objBook = books[i];
        console.log(objBook);
        if (objBook.pages > 300){
            longBooks.push(objBook)
            console.log(longBooks);
        }
    }
    for(let i = 0; i < longBooks.length; i++){
        const objLongBook = longBooks[i];
        longBooksTitles.push(objLongBook.title);
        console.log(longBooksTitles);
    }
}
Somma(1,2);

// Creare un array (availableBooks) che contiene tutti i libri disponibili.
// Crea un array (discountedBooks) con gli availableBooks, ciascuno con il prezzo scontato del 20% (mantieni lo stesso formato e arrotonda al centesimo)
// Salva in una variabile (fullPricedBook) il primo elemento di discountedBooks che ha un prezzo intero (senza centesimi).

const availableBooks = [];
const discountedBooks = [];
let fullPricedBook = 0;

for (let i = 0; i < books.length; i++) {
    const objBook = books[i];
    if (objBook.available){
        availableBooks.push(objBook);
        console.log(availableBooks);
        
        const rawPrice = objBook.price.replace('€', ''); 
        const price = Number(rawPrice);
        const discounted = price * 0.8;

        discountedBooks.push(discounted); 
        console.log(discountedBooks);
        
    }
}
for(let i = 0; i<discountedBooks.length; i++){
    console.log(discountedBooks[i]);
    
    if (Number.isInteger(discountedBooks[i])) {
        fullPricedBook = discountedBooks[i];
        console.log(fullPricedBook);
    }
}

    

// Creare un array (authors) che contiene gli autori dei libri.
// Crea una variabile booleana (areAuthorsAdults) per verificare se gli autori sono tutti maggiorenni.
// Ordina l’array authors in base all’età, senza creare un nuovo array.
// (se areAuthorsAdult è true, ordina in ordine crescente, altrimenti in ordine decrescente)

const authors = []
let areAuthorsAdults = true;
let etaAuthor = [];

console.log(books[0].author.name);

for (let i = 0; i < books.length; i++) {
    const element = books[i].author;
    authors.push({ 
        name: element.name, 
        age: element.age 
    });    
    console.log(authors);
        
    // etaAuthor.push(element.author.age);
    // console.log(etaAuthor);
    
    if(element.age < 18){
        areAuthorsAdults = false;
    } 
}

if (areAuthorsAdults) { 
    authors.sort((a, b) => a.age - b.age); 
} else { 
    authors.sort((a, b) => b.age - a.age); 
} 
console.log(authors); 
console.log("Tutti maggiorenni?", areAuthorsAdults);


// Creare un array (ages) che contiene le età degli autori dei libri.
// Calcola la somma delle età (agesSum) usando reduce.
// Stampa in console l’età media degli autori dei libri.

const ages = [];

for (let i = 0; i<books.length; i++){
    const elem = books[i].author;
    ages.push(elem.age);
    console.log(ages);
    
}

const somma = ages.reduce((acc, curr)=>{
    return acc+curr
},0)
console.log(somma);
