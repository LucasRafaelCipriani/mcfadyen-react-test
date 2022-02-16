import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Common/Header';
import NotFoundPage from './pages/NotFoundPage';
import ProductDetailsPage from './pages/ProductDetailsPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ProductDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
