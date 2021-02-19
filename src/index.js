import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    className="image"
    src="https://m.media-amazon.com/images/I/81eB+7+CkUL._AC_UY327_FMwebp_QL65_.jpg"
    alt="book cover"
  />
);

const Title = () => <h1>I Love You to the Moon and Back</h1>;
const Author = () => <h4>Amelia Hepworth</h4>;

ReactDom.render(<BookList />, document.getElementById('root'));
