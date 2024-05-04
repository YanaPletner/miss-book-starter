import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const demoBooks = [
    {
        title: "Book 1",
        listPrice: {
            amount: 20,
            currencyCode: "USD",
            isOnSale: true
        }
    },
    {
        title: "Book 2",
        listPrice: {
            amount: 15,
            currencyCode: "USD",
            isOnSale: false
        }
    },
    {
        title: "Book 3",
        listPrice: {
            amount: 30,
            currencyCode: "USD",
            isOnSale: true
        }
    }
]

const BOOK_KEY = 'bookDB'
_createBooks(demoBooks)

export const bookService = {
    // query,
    get,
    remove,
    save,
}

// function query(filterBy = {}) {
//     return storageService.query(BOOK_KEY)
//         .then(books => {
//             if (filterBy.txt) {
//                 const regExp = new RegExp(filterBy.txt, 'i')
//                 books = books.filter(book => regExp.test(book.vendor))
//             }

//             if (filterBy.minSpeed) {
//                 books = books.filter(book => book.maxSpeed >= filterBy.minSpeed)
//             }

//             return books
//         })
// }

function get(bookId) {
    const book = storageService.get('books', bookId)
    return book
    // return storageService.get(BOOK_KEY, bookId)
    //     .then(book => {
    //         book = _setNextPrevBookId(book)
    //         return book
    //     })
}

function remove(bookId) {
    return storageService.remove(BOOK_KEY, bookId)
}

function save(book) {
    if (book.id) {
        return storageService.put(BOOK_KEY, book)
    } else {
        return storageService.post(BOOK_KEY, book)
    }
}

function _createBooks(books) {
    console.log(books)
    return books
    // let books = utilService.loadFromStorage(BOOK_KEY)
    // if (!books || !books.length) {
    //     books = []
    //     const titles = ['The Great Gatsby', 'To Kill a Mockingbird', '1984', 'Pride and Prejudice', 'The Catcher in the Rye', 'The Hobbit']
    //     for (let i = 0; i < 6; i++) {
    //         const title = titles[i]
    //         books.push(_createBook(title, utilService.getRandomIntInclusive(10, 50)))
    //     }
    // utilService.saveToStorage(BOOK_KEY, books)
    // }
}

function _createBook(title, price) {
    const book = {
        id: utilService.makeId(),
        title: title,
        listPrice: {
            amount: price,
            currencyCode: "USD",
            isOnSale: false
        }
    }
    return book
}
// Check your service directly from the dev tools console:

// bookService.get("OXeMG8wNskc").then(book => console.log("Book:", book));

// Create a new book
const newBook = {
    title: "New Book",
    listPrice: {
        amount: 25,
        currencyCode: "USD",
        isOnSale: true
    }
}
bookService.save(newBook).then(savedBook => {
    console.log("Newly Created Book:", savedBook)
})