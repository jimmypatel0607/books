import BookShow from './BookShow';
import useCustomContext from '../hooks/use-custom-context';

function BookList() {
  const { books } = useCustomContext();

  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });

  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
