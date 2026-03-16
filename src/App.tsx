import './index.css';
import React, { useEffect, useState } from 'react';
import { fetchProducts } from './features/catalog/api';
import { Product } from './features/catalog/types';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div style={{textAlign: 'center', padding: '50px'}}>Ielādēju produktus...</div>;

  return (
    <div>
      <header style={{ textAlign: 'center', marginTop: '40px' }}>
        <h1>Premium Preču Veikals</h1>
        <p style={{ color: '#64748b' }}>Tava izvēle numur viens visā pasaulē</p>
      </header>

      <main>
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="img-container">
              <img src={product.image} alt={product.title} />
            </div>
            
            <span className="category">{product.category}</span>
            <h3 className="title">{product.title}</h3>

            <div className="footer">
              <span className="price">{product.price} €</span>
              <button>Pirkt</button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;