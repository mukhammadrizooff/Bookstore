import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import NavBar from './components/navigation';
import Books from './components/appBook';
import Categories from './components/pageCat';
import NotFound from './components/impossible';

const App = () => (
  <Router>
    <NavBar />
    <section className="content">
      <Routes>
        <Route path="/bookstore" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </section>
  </Router>
);

export default App;
