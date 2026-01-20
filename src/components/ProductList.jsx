import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/CartSlice';
import './ProductList.css';

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const plants = {
    indoor: [
      {
        id: 1,
        name: 'Monstera Deliciosa',
        price: 29.99,
        image: 'https://images.unsplash.com/photo-1519336056116-9e4d7511d3b0?w=400',
        description: 'Large, glossy leaves with natural holes. Perfect for bright, indirect light.',
        category: 'indoor'
      },
      {
        id: 2,
        name: 'Snake Plant',
        price: 19.99,
        image: 'https://images.unsplash.com/photo-1593691508730-1c68b5c8c0b3?w=400',
        description: 'Hardy and low-maintenance. Great for beginners and low-light areas.',
        category: 'indoor'
      },
      {
        id: 3,
        name: 'Pothos Golden',
        price: 14.99,
        image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400',
        description: 'Trailing vine with heart-shaped leaves. Very easy to care for.',
        category: 'indoor'
      },
      {
        id: 4,
        name: 'Fiddle Leaf Fig',
        price: 39.99,
        image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400',
        description: 'Large, violin-shaped leaves. Makes a stunning statement plant.',
        category: 'indoor'
      },
      {
        id: 5,
        name: 'ZZ Plant',
        price: 24.99,
        image: 'https://images.unsplash.com/photo-1593691508730-1c68b5c8c0b3?w=400',
        description: 'Extremely low maintenance with glossy, dark green leaves.',
        category: 'indoor'
      },
      {
        id: 6,
        name: 'Peace Lily',
        price: 22.99,
        image: 'https://images.unsplash.com/photo-1593691508730-1c68b5c8c0b3?w=400',
        description: 'Beautiful white flowers and air-purifying qualities.',
        category: 'indoor'
      },
    ],
    succulents: [
      {
        id: 7,
        name: 'Echeveria',
        price: 12.99,
        image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400',
        description: 'Rosette-shaped succulent with beautiful colors. Perfect for sunny windows.',
        category: 'succulents'
      },
      {
        id: 8,
        name: 'Jade Plant',
        price: 16.99,
        image: 'https://images.unsplash.com/photo-1519336056116-9e4d7511d3b0?w=400',
        description: 'Thick, glossy leaves. Symbol of good luck and prosperity.',
        category: 'succulents'
      },
      {
        id: 9,
        name: 'Aloe Vera',
        price: 13.99,
        image: 'https://images.unsplash.com/photo-1593691508730-1c68b5c8c0b3?w=400',
        description: 'Medicinal plant with soothing gel. Very easy to grow.',
        category: 'succulents'
      },
      {
        id: 10,
        name: 'Haworthia',
        price: 11.99,
        image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400',
        description: 'Small, striped succulent perfect for small spaces.',
        category: 'succulents'
      },
      {
        id: 11,
        name: 'String of Pearls',
        price: 18.99,
        image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400',
        description: 'Unique trailing succulent with bead-like leaves.',
        category: 'succulents'
      },
      {
        id: 12,
        name: 'Burro\'s Tail',
        price: 15.99,
        image: 'https://images.unsplash.com/photo-1519336056116-9e4d7511d3b0?w=400',
        description: 'Trailing succulent with plump, blue-green leaves.',
        category: 'succulents'
      },
    ],
    flowering: [
      {
        id: 13,
        name: 'African Violet',
        price: 17.99,
        image: 'https://images.unsplash.com/photo-1593691508730-1c68b5c8c0b3?w=400',
        description: 'Beautiful purple flowers that bloom year-round.',
        category: 'flowering'
      },
      {
        id: 14,
        name: 'Orchid',
        price: 34.99,
        image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400',
        description: 'Elegant and exotic. Long-lasting blooms.',
        category: 'flowering'
      },
      {
        id: 15,
        name: 'Begonia',
        price: 19.99,
        image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400',
        description: 'Colorful flowers and attractive foliage.',
        category: 'flowering'
      },
      {
        id: 16,
        name: 'Geranium',
        price: 16.99,
        image: 'https://images.unsplash.com/photo-1519336056116-9e4d7511d3b0?w=400',
        description: 'Bright, cheerful flowers. Easy to care for.',
        category: 'flowering'
      },
      {
        id: 17,
        name: 'Kalanchoe',
        price: 14.99,
        image: 'https://images.unsplash.com/photo-1593691508730-1c68b5c8c0b3?w=400',
        description: 'Succulent with clusters of colorful flowers.',
        category: 'flowering'
      },
      {
        id: 18,
        name: 'Cyclamen',
        price: 21.99,
        image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400',
        description: 'Beautiful heart-shaped leaves and delicate flowers.',
        category: 'flowering'
      },
    ],
  };

  const allPlants = [...plants.indoor, ...plants.succulents, ...plants.flowering];
  
  const filteredPlants = selectedCategory === 'all' 
    ? allPlants 
    : allPlants.filter(plant => plant.category === selectedCategory);

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  const isInCart = (plantId) => {
    return cartItems.some(item => item.id === plantId);
  };

  return (
    <div className="product-list">
      <div className="product-container">
        <h1 className="page-title">Our Plant Collection</h1>
        
        <div className="category-filters">
          <button 
            className={selectedCategory === 'all' ? 'active' : ''}
            onClick={() => setSelectedCategory('all')}
          >
            All Plants
          </button>
          <button 
            className={selectedCategory === 'indoor' ? 'active' : ''}
            onClick={() => setSelectedCategory('indoor')}
          >
            Indoor Plants
          </button>
          <button 
            className={selectedCategory === 'succulents' ? 'active' : ''}
            onClick={() => setSelectedCategory('succulents')}
          >
            Succulents
          </button>
          <button 
            className={selectedCategory === 'flowering' ? 'active' : ''}
            onClick={() => setSelectedCategory('flowering')}
          >
            Flowering Plants
          </button>
        </div>

        <div className="plants-grid">
          {filteredPlants.map(plant => (
            <div key={plant.id} className="plant-card">
              <div className="plant-image-container">
                <img src={plant.image} alt={plant.name} className="plant-image" />
              </div>
              <div className="plant-info">
                <h3 className="plant-name">{plant.name}</h3>
                <p className="plant-description">{plant.description}</p>
                <div className="plant-footer">
                  <span className="plant-price">${plant.price.toFixed(2)}</span>
                  <button
                    className={`add-to-cart-btn ${isInCart(plant.id) ? 'disabled' : ''}`}
                    onClick={() => handleAddToCart(plant)}
                    disabled={isInCart(plant.id)}
                  >
                    {isInCart(plant.id) ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
