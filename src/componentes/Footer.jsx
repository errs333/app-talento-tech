export const Footer = () => {
  const equipo = [
    { id: 1, nombre: 'Eduardo Rodriguez', puesto: 'CEO', foto: 'https://i.pravatar.cc/150?img=12' },
    { id: 2, nombre: 'Carlos Gomez', puesto: 'Lead Developer', foto: 'https://i.pravatar.cc/150?img=33' },
    { id: 3, nombre: 'Maria Rodriguez', puesto: 'UI/UX Designer', foto: 'https://i.pravatar.cc/150?img=45' },
    { id: 4, nombre: 'Hilda Rodriguez', puesto: 'IT Designer', foto: 'https://i.pravatar.cc/150?img=48' },
  ];

  return (
    <footer style={{
      background: '#1f2937',
      color: '#d1d5db',
      padding: '1.75rem 1.5rem 1rem',
      marginTop: '2rem',
      fontSize: '0.85rem'
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto'
      }}>
        {/* Fila superior: contacto, sucursales, newsletter */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1.5rem',
          marginBottom: '1.5rem'
        }}>
          <div>
            <h4 style={{ color: 'white', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
              Contacto
            </h4>
            <p style={{ margin: '0.15rem 0' }}>info@hilmar.com</p>
            <p style={{ margin: '0.15rem 0' }}>+54 11 1234-5678</p>
          </div>
          <div>
            <h4 style={{ color: 'white', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
              Sucursales
            </h4>
            <p style={{ margin: '0.15rem 0' }}>Buenos Aires</p>
            <p style={{ margin: '0.15rem 0' }}>Córdoba</p>
          </div>
          <div>
            <h4 style={{ color: 'white', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
              Newsletter
            </h4>
            <input
              type="email"
              placeholder="tu@email.com"
              style={{
                padding: '0.45rem 0.65rem',
                borderRadius: '6px',
                border: 'none',
                width: '100%',
                maxWidth: '220px',
                fontFamily: 'inherit',
                fontSize: '0.85rem'
              }}
            />
          </div>
        </div>

        {/* Equipo */}
        <h4 style={{
          textAlign: 'center',
          color: 'white',
          marginBottom: '0.85rem',
          fontSize: '0.9rem'
        }}>
          Nuestro Equipo
        </h4>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.75rem',
          flexWrap: 'wrap',
          marginBottom: '1.5rem'
        }}>
          {equipo.map((persona) => (
            <div key={persona.id} style={{
              background: '#374151',
              padding: '0.75rem',
              borderRadius: 'var(--radio)',
              textAlign: 'center',
              width: '120px'
            }}>
              <img
                src={persona.foto}
                alt={persona.nombre}
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  margin: '0 auto 0.4rem',
                  border: '2px solid var(--color-primario)'
                }}
              />
              <h5 style={{ margin: '0 0 0.15rem', color: 'white', fontSize: '0.78rem' }}>
                {persona.nombre}
              </h5>
              <p style={{ margin: 0, fontSize: '0.68rem', color: '#9ca3af' }}>
                {persona.puesto}
              </p>
            </div>
          ))}
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #374151', margin: '0.75rem 0' }} />

        <p style={{
          textAlign: 'center',
          margin: 0,
          fontSize: '0.78rem',
          color: '#9ca3af'
        }}>
          © 2026 Computaciones Hilmar - Todos los derechos reservados |{' '}
          <a href="#" style={{ color: '#a5b4fc' }}>Políticas de Privacidad</a> |{' '}
          <a href="#" style={{ color: '#a5b4fc' }}>Contacto</a>
        </p>
      </div>
    </footer>
  );
};