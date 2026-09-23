import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext.jsx';

export const Cart = () => {
  const { cart, clearCart, getCartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
        <h1 style={{
          fontFamily: 'Orbitron, sans-serif',
          letterSpacing: '1px',
          marginBottom: '1rem'
        }}>
          EL CARRITO ESTÁ VACÍO
        </h1>
        <p style={{ color: '#b3b3b3', marginBottom: '1.5rem' }}>
          Agregá productos para continuar la compra.
        </p>
        <Link
          to="/productos"
          style={{
            display: 'inline-block',
            background: '#0071e3',
            color: 'white',
            padding: '0.7rem 1.5rem',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: 600
          }}
        >
          Ver productos
        </Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
      <h1 style={{
        fontFamily: 'Orbitron, sans-serif',
        letterSpacing: '1px',
        marginBottom: '1.5rem'
      }}>
        CARRITO DE COMPRAS
      </h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {cart.map((item) => (
          <div
            key={item.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: '#16161a',
              border: '1px solid #252529',
              borderRadius: '10px',
              padding: '1rem 1.2rem',
              gap: '1rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <img
                src={item.imagen}
                alt={item.nombre}
                style={{
                  width: '60px',
                  height: '60px',
                  objectFit: 'cover',
                  borderRadius: '8px'
                }}
              />
              <div>
                <h4 style={{ margin: '0 0 0.25rem 0', color: '#fff', fontSize: '0.95rem' }}>
                  {item.nombre}
                </h4>
                <p style={{ margin: 0, fontSize: '0.8rem', color: '#b3b3b3' }}>
                  ${item.precio.toLocaleString('es-AR')} × {item.quantity}
                </p>
              </div>
            </div>

            <div style={{ textAlign: 'right' }}>
              <p style={{
                margin: 0,
                fontWeight: 700,
                color: '#10b981',
                fontSize: '1.05rem'
              }}>
                ${(item.precio * item.quantity).toLocaleString('es-AR')}
              </p>
            </div>
          </div>
        ))}
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid #252529', margin: '1.5rem 0' }} />

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1.5rem'
      }}>
        <span style={{ fontSize: '1.1rem', color: '#b3b3b3' }}>Total a pagar:</span>
        <span style={{
          fontSize: '1.75rem',
          fontWeight: 700,
          color: '#10b981'
        }}>
          ${getCartTotal().toLocaleString('es-AR')}
        </span>
      </div>

      <div style={{ display: 'flex', gap: '0.75rem' }}>
        <button
          onClick={clearCart}
          style={{
            background: 'transparent',
            color: '#fff',
            border: '1px solid #fff',
            padding: '0.7rem 1.5rem',
            borderRadius: '6px',
            fontWeight: 600,
            cursor: 'pointer'
          }}
        >
          Vaciar Carrito
        </button>
        <Link
          to="/productos"
          style={{
            background: '#0071e3',
            color: 'white',
            padding: '0.7rem 1.5rem',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: 600
          }}
        >
          Seguir comprando
        </Link>
      </div>
    </div>
  );
};