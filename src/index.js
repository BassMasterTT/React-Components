import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

const firstBook = {
  img:
    'https://m.media-amazon.com/images/I/81eB+7+CkUL._AC_UY327_FMwebp_QL65_.jpg',
  title: 'I Love You to the Moon and Back',
  author: 'Amelia Hepworth',
};

const secondBook = {
  img:
    'https://m.media-amazon.com/images/I/71aLultW5EL._AC_UY327_FMwebp_QL65_.jpg',
  title: 'Our Class is a Family',
  author: 'Shannon Olsen',
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt="book cover" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));
