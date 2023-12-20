import { useState } from "react";
import BookCreate from "./components/BookCreate";
function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) =>{
    console.log("The value of title is: ", title);
    //setBooks(books);
  }
  return (
    <div>
      <BookCreate onCreate={createBook}/>
    </div>
  );
}

export default App;
