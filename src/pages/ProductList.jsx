import { useState, useEffect } from 'react';
import { Item } from '../componentes/Item.jsx';

export const ProductList = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch('/data/productos.json')
      .then((res) => res.json())
      .then((data) => {
        setProductos(data);
        setCargando(false);
      })
      .catch((err) => {
        console.error('Error al cargar productos:', err);
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return <p style={{ textAlign: 'center', padding: '2rem' }}>Cargando productos...</p>;
  }

  return (
    <div>
      <h1 style={{
        marginBottom: '0.25rem',
        fontFamily: 'var(--fuente-titulo)',
        letterSpacing: '1px'
      }}>
        CATÁLOGO
      </h1>
      <p style={{ color: 'var(--color-texto-suave)', marginBottom: '1.25rem', fontSize: '0.85rem' }}>
        {productos.length} productos disponibles
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))',
        gap: '1rem'
      }}>
        {productos.map((prod) => (
          <Item key={prod.id} {...prod} />
        ))}
      </div>
    </div>
  );
};