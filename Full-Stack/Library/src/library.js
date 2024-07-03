var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
        this.reservations = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.reserveBook = function (bookId, user) {
        var bookFound = false;
        for (var i = 0; i < this.books.length; i++) {
            var book = this.books[i];
            if (book.id === bookId && book.available) {
                book.available = false;
                var reservation = {
                    book: book,
                    user: user,
                    reservedAt: new Date(),
                };
                this.reservations.push(reservation);
                console.log("Book \"" + book.title + "\" reserved successfully by " + user.name);
                bookFound = true;
                break;
            }
        }
        if (!bookFound) {
            console.log("Book with ID " + bookId + " is either unavailable or does not exist.");
        }
    };
    Library.prototype.displayAvailableBooks = function () {
        console.log("Available Books:");
        for (var i = 0; i < this.books.length; i++) {
            var book = this.books[i];
            if (book.available) {
                console.log("- " + book.title + " by " + book.author);
            }
        }
    };
    Library.prototype.displayReservations = function () {
        console.log("Current Reservations:");
        for (var i = 0; i < this.reservations.length; i++) {
            var reservation = this.reservations[i];
            console.log("- Book: " + reservation.book.title + ", Reserved by: " + reservation.user.name + ", Reserved At: " + reservation.reservedAt);
        }
    };
    return Library;
}());
// Usage
var library = new Library();
var book1 = { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", available: true };
var book2 = { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", available: true };
var book3 = { id: 3, title: "1984", author: "George Orwell", available: true };
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
var user1 = { id: 1, name: "Alice" };
var user2 = { id: 2, name: "Bob" };
library.displayAvailableBooks();
library.reserveBook(2, user1);
library.reserveBook(3, user2);
library.reserveBook(2, user2);
library.displayReservations();
