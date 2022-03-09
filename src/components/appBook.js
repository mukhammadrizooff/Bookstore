import './pages.css';
import ItemBook from './elements';
import Form from './listForm';

const Books = () => (
  <section className="book-list-container">
    <section className="book-list">
      <ItemBook
        title="Old Man And Sea"
        author="Ernest Hemingway"
        categories="Novel"
      />
      <ItemBook
        title="Rich Dad Poor Dad"
        author="Robert Kiyosaki"
        categories="Category 2"
      />
      <ItemBook
        title="Beauty And Beast"
        author="Gabrielle-Suzanne Barbot de Villeneuve"
        categories="Fairytale"
      />
    </section>
    <Form />
  </section>
);

export default Books;
