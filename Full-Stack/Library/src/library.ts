type Book = {
  id: number;
  title: string;
  author: string;
  available: boolean;
};

type User = {
  id: number;
  name: string;
};

type Reservation = {
  book: Book;
  user: User;
  reservedAt: Date;
};

class Library {
  private books: Book[] = [];
  private reservations: Reservation[] = [];

  addBook(book: Book): void {
    this.books.push(book);
  }

  reserveBook(bookId: number, user: User): void {
    let bookFound = false;
    for (let i = 0; i < this.books.length; i++) {
      const book = this.books[i];
      if (book.id === bookId && book.available) {
        book.available = false;
        const reservation: Reservation = {
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
  }

  displayAvailableBooks(): void {
    console.log("Available Books:");
    for (let i = 0; i < this.books.length; i++) {
      const book = this.books[i];
      if (book.available) {
        console.log("- " + book.title + " by " + book.author);
      }
    }
  }

  displayReservations(): void {
    console.log("Current Reservations:");
    for (let i = 0; i < this.reservations.length; i++) {
      const reservation = this.reservations[i];
      console.log("- Book: " + reservation.book.title + ", Reserved by: " + reservation.user.name + ", Reserved At: " + reservation.reservedAt);
    }
  }
}


const library = new Library();

const book1: Book = { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", available: true };
const book2: Book = { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", available: true };
const book3: Book = { id: 3, title: "1984", author: "George Orwell", available: true };

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

const user1: User = { id: 1, name: "Sriram" };
const user2: User = { id: 2, name: "Bhuvan" };

library.displayAvailableBooks();

library.reserveBook(2, user1);
library.reserveBook(3, user2);

library.displayReservations();