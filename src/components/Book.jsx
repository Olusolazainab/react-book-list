import React from 'react'

const Book = ({img, title, author}) =>
{
  const clickHandler = (e) =>
  {
    console.log(e.target)
    alert("hello")
  }

  const compleExample = (auth) =>
  {
    console.log(author); 
  }
  // const { img, title, author } = props;
  return (
    <article className="book" onMouseOver={ () =>
    {
      console.log(title)
    }}>
      <img src= {img}
        width={ 350 } alt="imag" />
      <h1 onClick={()=>{console.log(title)}}>{title}</h1>
      <h4>{ author }  </h4>
      <button type="button" onClick={ clickHandler }>Click</button>
      <button type="button" onClick={()=>compleExample(author)}>complexExample</button>
    </article>
  );
};

export default Book;
