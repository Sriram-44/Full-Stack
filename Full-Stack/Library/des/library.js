node// Book.ts
var Book = /** @class */ (function () {
    function Book(id, title, author, available) {
        if (available === void 0) { available = true; }
        this.id = id;
        this.title = title;
        this.author = author;
        this.available = available;
    }
    return Book;
}());
// User.ts
var User = /** @class */ (function () {
    function User(id, name) {
        this.id = id;
        this.name = name;
    }
    return User;
}());
// Reservation.ts
var Reservation = /** @class */ (function () {
    function Reservation(book, user, reservedAt) {
        this.book = book;
        this.user = user;
        this.reservedAt = reservedAt;
    }
    return Reservation;
}());
// Library.ts
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
        for (var _i = 0, _a = this.books; _i < _a.length; _i++) {
            var book = _a[_i];
            if (book.id === bookId && book.available) {
                book.available = false;
                var reservation = new Reservation(book, user, new Date());
                this.reservations.push(reservation);
                console.log("Book \"".concat(book.title, "\" reserved successfully by ").concat(user.name));
                bookFound = true;
                break;
            }
        }
        if (!bookFound) {
            console.log("Book with ID ".concat(bookId, " is either unavailable or does not exist."));
        }
    };
    Library.prototype.displayAvailableBooks = function () {
        console.log("Available Books:");
        this.books.forEach(function (book) {
            if (book.available) {
                console.log("- ".concat(book.title, " by ").concat(book.author));
            }
        });
    };
    Library.prototype.displayReservations = function () {
        console.log("Current Reservations:");
        this.reservations.forEach(function (reservation) {
            console.log("- Book: ".concat(reservation.book.title, ", Reserved by: ").concat(reservation.user.name, ", Reserved At: ").concat(reservation.reservedAt));
        });
    };
    return Library;
}());
// Usage
var library = new Library();
var book1 = new Book(1, "The Great Gatsby", "F. Scott Fitzgerald");
var book2 = new Book(2, "To Kill a Mockingbird", "Harper Lee");
var book3 = new Book(3, "1984", "George Orwell");
console.log();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
console.log();
var user1 = new User(1, "Alice");
var user2 = new User(2, "Bob");
console.log();
library.displayAvailableBooks();
console.log();
library.reserveBook(2, user1);
library.reserveBook(3, user2);
console.log();
library.displayReservations();
