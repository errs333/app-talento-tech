import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';

export const Header = () => {
  const { getCartQuantity } = useCart();
  const totalItems = getCartQuantity();

  return (
    <header style={{
      background: 'linear-gradient(90deg, #4f46e5 0%, #6366f1 50%, #8b5cf6 100%)',
      color: 'white',
      boxShadow: 'var(--sombra-media)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <nav style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '0.75rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem'
      }}>
        <Link to="/" style={{
          color: 'white',
          fontSize: '1.2rem',
          fontWeight: 900,
          fontFamily: 'var(--fuente-titulo)',
          letterSpacing: '1px',
          textShadow: '0 2px 8px rgba(0,0,0,0.2)'
        }}>
          HILMAR<span style={{ color: '#fbbf24' }}>TECH</span>
        </Link>

        <ul style={{
          display: 'flex',
          gap: '0.5rem',
          listStyle: 'none',
          alignItems: 'center'
        }}>
          <li>
            <Link to="/" style={{
              color: 'white',
              fontWeight: 500,
              fontSize: '0.9rem',
              padding: '0.4rem 0.75rem',
              borderRadius: '6px'
            }}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/productos" style={{
              color: 'white',
              fontWeight: 500,
              fontSize: '0.9rem',
              padding: '0.4rem 0.75rem',
              borderRadius: '6px'
            }}>
              Productos
            </Link>
          </li>
          <li>
            <Link to="/carrito" style={{
              color: 'white',
              background: 'rgba(255,255,255,0.18)',
              padding: '0.4rem 0.85rem',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              backdropFilter: 'blur(10px)'
            }}>
              Carrito
              {totalItems > 0 && (
                <span style={{
                  background: '#fbbf24',
                  color: '#1f2937',
                  borderRadius: '50%',
                  minWidth: '20px',
                  height: '20px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.7rem',
                  fontWeight: 'bold'
                }}>
                  {totalItems}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};