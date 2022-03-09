import React from 'react';
import './pages.css';

const Form = () => (
  <div className="form-container">
    <h1>ADD NEW BOOK</h1>
    <div className="form-inputs">
      <input type="text" placeholder="Book title" />
      <select name="categories" id="categories">
        <option value="Category 1">Novel</option>
        <option value="Category 2">Story</option>
        <option value="Category 3">fairytale</option>
      </select>
      <button type="button">ADD BOOK</button>
    </div>
  </div>
);

export default Form;
