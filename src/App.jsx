import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import AboutUs from './components/AboutUs';
import './App.css';

function LandingPage() {
  const [showProductList, setShowProductList] = React.useState(false);

  const handleGetStarted = () => {
    setShowProductList(true);
    window.location.href = '/plants';
  };

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1 className="company-name">Welcome to Paradise Nursery</h1>
        <p className="tagline">Bring Nature Home - Your Indoor Garden Awaits</p>
        <button className="get-started-btn" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app-container">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/plants" element={<ProductList />} />
              <Route path="/cart" element={<CartItem />} />
              <Route path="/about" element={<AboutUs />} />
            </Routes>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
