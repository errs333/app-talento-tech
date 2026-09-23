
//app-talento-tech\src\pages\ProductDetail.jsx
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';

export const ProductDetail = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch('/data/productos.json')
      .then((res) => res.json())
      .then((data) => {
        const encontrado = data.find((p) => p.id === id);
        setProducto(encontrado);
      })
      .catch((err) => console.error('Error al cargar detalle:', err));
  }, [id]);

  if (!producto) {
    return <p style={{ textAlign: 'center', padding: '2rem' }}>Cargando detalle...</p>;
  }

  const sinStock = !producto.stock || producto.stock === 0;

  const incrementar = () => {
    if (cantidad < producto.stock) setCantidad(cantidad + 1);
  };

  const decrementar = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
  };

  const handleAddToCart = () => {
    addToCart(producto, cantidad);
    alert(`Agregaste ${cantidad} unidad(es) de ${producto.nombre} al carrito`);
    setCantidad(1);
  };

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
      <Link
        to="/productos"
        style={{
          color: '#0071e3',
          textDecoration: 'none',
          fontSize: '0.9rem',
          display: 'inline-block',
          marginBottom: '1rem'
        }}
      >
        ← Volver al catálogo
      </Link>

      <div
        style={{
          display: 'flex',
          gap: '2rem',
          flexWrap: 'wrap',
          background: '#16161a',
          border: '1px solid #252529',
          borderRadius: '16px',
          padding: '2rem'
        }}
      >
        <div style={{
          flex: '1',
          minWidth: '260px',
          background: '#222',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
          minHeight: '280px'
        }}>
          <img
            src={producto.imagen}
            alt={producto.nombre}
            style={{ maxWidth: '100%', maxHeight: '280px', objectFit: 'contain' }}
          />
        </div>

        <div style={{ flex: '1', minWidth: '260px', display: 'flex', flexDirection: 'column' }}>
          <h1 style={{
            fontFamily: 'Orbitron, sans-serif',
            fontSize: '1.6rem',
            color: '#fff',
            margin: '0 0 0.5rem 0',
            letterSpacing: '0.5px'
          }}>
            {producto.nombre}
          </h1>

          <p style={{ color: '#b3b3b3', fontSize: '0.85rem', margin: '0 0 0.5rem 0' }}>
            Categoría: {producto.categoria}
          </p>

          <div style={{ color: '#ffb800', margin: '0 0 1rem 0' }}>★★★★★</div>

          <p style={{
            fontSize: '2rem',
            fontWeight: 700,
            color: '#10b981',
            margin: '0 0 0.75rem 0'
          }}>
            ${producto.precio.toLocaleString('es-AR')}
          </p>

          <p style={{
            fontSize: '0.85rem',
            color: sinStock ? '#dc2626' : '#b3b3b3',
            margin: '0 0 1.5rem 0'
          }}>
            {sinStock ? 'Sin stock' : `Stock disponible: ${producto.stock}`}
          </p>

          {!sinStock && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1.25rem'
            }}>
              <span style={{ color: '#b3b3b3', fontSize: '0.9rem' }}>Cantidad:</span>
              <button
                onClick={decrementar}
                disabled={cantidad <= 1}
                style={{
                  width: '34px',
                  height: '34px',
                  padding: 0,
                  background: '#222',
                  color: '#fff',
                  border: '1px solid #444',
                  borderRadius: '6px',
                  cursor: cantidad <= 1 ? 'not-allowed' : 'pointer',
                  opacity: cantidad <= 1 ? 0.5 : 1,
                  fontWeight: 'bold'
                }}
              >
                −
              </button>
              <span style={{
                minWidth: '30px',
                textAlign: 'center',
                color: '#fff',
                fontWeight: 600,
                fontSize: '1rem'
              }}>
                {cantidad}
              </span>
              <button
                onClick={incrementar}
                disabled={cantidad >= producto.stock}
                style={{
                  width: '34px',
                  height: '34px',
                  padding: 0,
                  background: '#222',
                  color: '#fff',
                  border: '1px solid #444',
                  borderRadius: '6px',
                  cursor: cantidad >= producto.stock ? 'not-allowed' : 'pointer',
                  opacity: cantidad >= producto.stock ? 0.5 : 1,
                  fontWeight: 'bold'
                }}
              >
                +
              </button>
            </div>
          )}

          <button
            onClick={handleAddToCart}
            disabled={sinStock}
            style={{
              width: '100%',
              padding: '0.85rem',
              background: sinStock ? '#333' : '#0071e3',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: sinStock ? 'not-allowed' : 'pointer',
              transition: 'background 0.2s'
            }}
          >
            {sinStock ? 'Sin stock' : `Agregar ${cantidad} al carrito`}
          </button>
        </div>
      </div>
    </div>
  );
};