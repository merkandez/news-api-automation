import axios from 'axios';
import { useState } from 'react';
import './App.css';
const App = () => {
  const [category, setCategory] = useState('technology');
  const [keyword, setKeyword] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(import.meta.env.VITE_WEBHOOK_URL, {
        category,
        keyword,
      });

      if (response.status === 200) {
        setStatus('Flujo ejecutado con éxito');
      }
    } catch (error) {
      setStatus('Error al conectar con el webhook');
      console.error('Error:', error);
    }
  };

  return (
    <div className="container">
      <h1>News Automation Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Categoría:</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="technology">Tecnología</option>
            <option value="business">Negocios</option>
            <option value="sports">Deportes</option>
            <option value="health">Salud</option>
          </select>
        </div>

        <div>
          <label>Palabra clave (opcional):</label>
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Ej: Inteligencia"
          />
        </div>

        <button type="submit">Ejecutar flujo</button>
      </form>

      {status && <p>{status}</p>}
    </div>
  );
};

export default App;
