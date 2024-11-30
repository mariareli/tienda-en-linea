import React from 'react';

function Home() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Bienvenido a Glow Beauty</h1>
      <p style={{ textAlign: 'center' }}>
        Descubre los mejores productos de maquillaje y cuidado de la piel.
      </p>

      {/* Sección de tarjetas */}
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
        {/* Card 1: Productos */}
        <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px', width: '30%', textAlign: 'center' }}>
          <h2>Maquillaje Destacado</h2>
          <p>Explora nuestros productos más populares para un look perfecto.</p>
          <button style={{ padding: '10px', backgroundColor: '#e91e63', color: '#fff', border: 'none', borderRadius: '4px' }}>
            Ver Productos
          </button>
        </div>

        {/* Card 2: Categorías */}
        <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px', width: '30%', textAlign: 'center' }}>
          <h2>Categorías de Maquillaje</h2>
          <p>Desde labiales hasta bases, encuentra todo lo que necesitas.</p>
          <button style={{ padding: '10px', backgroundColor: '#e91e63', color: '#fff', border: 'none', borderRadius: '4px' }}>
            Ver Categorías
          </button>
        </div>

        {/* Card 3: Información */}
        <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px', width: '30%', textAlign: 'center' }}>
          <h2>Cuidado de la Piel</h2>
          <p>Conoce los productos ideales para preparar tu piel antes del maquillaje.</p>
          <button style={{ padding: '10px', backgroundColor: '#e91e63', color: '#fff', border: 'none', borderRadius: '4px' }}>
            Leer Más
          </button>
        </div>
      </div>

      {/* Sección adicional */}
      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <h2>¡Suscríbete a Glow Beauty!</h2>
        <p>Recibe ofertas exclusivas y las últimas tendencias en maquillaje.</p>
      </div>
    </div>
  );
}

export default Home;

