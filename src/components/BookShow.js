import { useState } from "react";
import BookEdit from "./BookEdit";
import useCustomContext from "../hooks/use-custom-context";
function BookShow({ book }) {
    const [showEdit, setShowEdit] = useState(false);
    const { deleteBookById } = useCustomContext();

    const handleClick = () => {
        deleteBookById(book.id);
    };

    const handleDeleteClick = () => {
        setShowEdit(!showEdit);
    }
     
    const handleSubmit = () => {
        setShowEdit(false);
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
