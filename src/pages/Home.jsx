import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export const Home = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('/data/productos.json')
      .then((res) => res.json())
      .then((data) => setProductos(data.slice(0, 4)))  // solo los primeros 4
      .catch((err) => console.error('Error al cargar productos:', err));
  }, []);

  return (
    <div className="store-container">
      {/* Hero Banner */}
      <header className="hero-banner">
        <div className="hero-content">
          <h1>
            POTENCIA TUS LÍMITES:
            <br />
            Nueva Serie RTX 40
          </h1>
          <p style={{ color: '#b3b3b3', marginBottom: '1.5rem', fontSize: '1rem' }}>
            Descubrí la nueva generación de tarjetas gráficas y equipos de alto rendimiento.
          </p>
          <Link
            to="/productos"
            className="btn-primary"
            style={{ display: 'inline-block', textDecoration: 'none' }}
          >
            COMPRAR AHORA
          </Link>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=500&auto=format&fit=crop"
            alt="RTX 40"
            style={{ maxWidth: '100%', borderRadius: '12px' }}
          />
        </div>
      </header>

      {/* Productos destacados */}
      <main className="products-section">
        <h2>Nuevos Lanzamientos</h2>
        <div className="products-grid">
          {productos.map((prod) => (
            <div key={prod.id} className="product-card">
              <div className="product-img-placeholder" style={{ padding: 0 }}>
                <img
                  src={prod.imagen}
                  alt={prod.nombre}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>
              <div className="product-info">
                <h3>{prod.nombre}</h3>
                <div className="stars">★★★★★</div>
                <p className="price">${prod.precio.toLocaleString('es-AR')}</p>
                <Link
                  to={`/producto/${prod.id}`}
                  className="btn-cart"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    textDecoration: 'none',
                  }}
                >
                  Ver Detalle
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};