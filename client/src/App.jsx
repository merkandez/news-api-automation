import { useState } from 'react';
import axios from 'axios';
const App = () => {
  const [country, setCountry] = useState('us');
  const [category, setCategory] = useState('technology');
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('TU_WEBHOOK_URL', { country, category });
      if (response.status === 200) {
        setStatus('Flujo ejecutado con éxito');
      }
    } catch (error) {
      setStatus('Error al conectar con el webhook');
      console.error('Error:', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>News Automation Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>País:</label>
          <select value={country} onChange={(e) => setCountry(e.target.value)}>
            <option value='us'>Estados Unidos</option>
            <option value='es'>España</option>
            <option value='fr'>Francia</option>
            <option value='de'>Alemania</option>
          </select>
        </div>

        <div>
          <label>Categoría:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value='technology'>Tecnología</option>
            <option value='business'>Negocios</option>
            <option value='sports'>Deportes</option>
            <option value='health'>Salud</option>
          </select>
        </div>

        <button type='submit'>Ejecutar flujo</button>
      </form>

      {status && <p>{status}</p>}
    </div>
  );
};

export default App;
