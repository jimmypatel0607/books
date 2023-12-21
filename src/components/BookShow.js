import { useState } from "react";
import BookEdit from "./BookEdit";
function BookShow({ book, onDelete, onEdit }) {
    const [showEdit, setShowEdit] = useState(false);

    const handleClick = () => {
        onDelete(book.id);
    };

    const handleDeleteClick = () => {
        setShowEdit(!showEdit);
    }
     
    const handleSubmit = (id, newTitle) => {
        setShowEdit(false);
        onEdit(id, newTitle);
    };

    let content = <h3>{book.title}</h3>
    if(showEdit){
        content = <BookEdit onSubmit={handleSubmit} book={book}/>;
    }
  return (
    <div className="book-show">
        <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books" />
      <div>{content}</div>
      <div className="action">
        <button className="edit" onClick={handleDeleteClick}>Edit</button>
        <button className="delete" onClick={handleClick}>Delete</button>
      </div>
    </div>
  );
}

export default BookShow;
