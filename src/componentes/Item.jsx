import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';

export function Item({ id, nombre, precio, stock, imagen }) {
  const producto = { id, nombre, precio, stock, imagen };
  const { addToCart } = useCart();
  const sinStock = !stock || stock === 0;

  const handleAddToCart = () => addToCart(producto, 1);

  return (
    <div
      style={{
        background: '#16161a',
        borderRadius: '12px',
        border: '1px solid #252529',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s, border-color 0.3s'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.borderColor = '#0071e3';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = '#252529';
      }}
    >
      {/* Imagen grande, sin padding */}
      <div style={{
        height: '180px',
        background: '#222',
        overflow: 'hidden'
      }}>
        <img
          src={imagen}
          alt={nombre}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>

      {/* Info */}
      <div style={{
        padding: '1.2rem',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1
      }}>
        <h3 style={{
          margin: '0 0 0.5rem 0',
          fontSize: '0.95rem',
          color: '#fff',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}>
          {nombre}
        </h3>

        <div style={{ color: '#ffb800', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
          ★★★★★
        </div>

        <p style={{
          margin: '0 0 0.5rem 0',
          fontSize: '1.2rem',
          fontWeight: 700,
          color: '#fff'
        }}>
          ${precio.toLocaleString('es-AR')}
        </p>

        <p style={{
          margin: '0 0 1rem 0',
          fontSize: '0.75rem',
          color: sinStock ? '#dc2626' : '#b3b3b3'
        }}>
          {sinStock ? 'Sin stock' : `Stock: ${stock}`}
        </p>

        <Link
          to={`/producto/${id}`}
          style={{
            fontSize: '0.8rem',
            marginBottom: '0.75rem',
            fontWeight: 500,
            color: '#0071e3',
            textDecoration: 'none',
            textAlign: 'center'
          }}
        >
          Ver detalle →
        </Link>

        <button
          onClick={handleAddToCart}
          disabled={sinStock}
          style={{
            marginTop: 'auto',
            width: '100%',
            padding: '0.6rem',
            background: sinStock ? '#333' : 'transparent',
            color: sinStock ? '#666' : '#fff',
            border: sinStock ? '1px solid #333' : '1px solid #fff',
            borderRadius: '6px',
            fontWeight: 600,
            cursor: sinStock ? 'not-allowed' : 'pointer',
            transition: 'background 0.2s, color 0.2s'
          }}
          onMouseEnter={(e) => {
            if (!sinStock) {
              e.currentTarget.style.background = '#fff';
              e.currentTarget.style.color = '#0f0f12';
            }
          }}
          onMouseLeave={(e) => {
            if (!sinStock) {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#fff';
            }
          }}
        >
          {sinStock ? 'Sin stock' : 'Agregar al carrito'}
        </button>
      </div>
    </div>
  );
}