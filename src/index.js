import React, { useState } from "react";
import ReactDom from "react-dom";
import { BookItem } from "./components/BookItem"
import Book from "./components/Book";

//CSS
import "./index.css";

//setup vars



function BookList ()
{
 
  return (
    <section className="bookList">
      { BookItem.map((book) =>
      {
        
        return (
          <>
             
            <div><Book key={ book.id } { ...book }></Book></div>

        
          </>
      )
      }) }
          
  </section>
  );
}


 

ReactDom.render(<BookList />, document.getElementById("root")) ;

