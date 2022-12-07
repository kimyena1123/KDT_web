import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import MainPage from './pages/MainPage';
import NotFound from './pages/NotFound';
import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage';
import Header from './components/Header';
import './styles/Common.scss';

function App() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await axios.get(
      'https://jsonplaceholder.typicode.com/comments'
    );
    setProducts(res.data.slice(0, 10));
  };

  // useEffect(() => {
  //   getProducts();
  // }, []);
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/products"
            element={<ProductPage products={products} />}
          />
          <Route
            path="/product/:productId"
            element={<ProductDetailPage products={products} />}
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

      {/* 
      <ProductDetailPage />
      <NotFound /> */}
    </div>
  );
}

export default App;