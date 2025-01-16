import axios from 'axios';
import { useState } from 'react';
import './App.css';

const App = () => {
  const [category, setCategory] = useState('technology');
  const [keyword, setKeyword] = useState('');
  const [status, setStatus] = useState(null);
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchNews = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        import.meta.env.VITE_SHEETY_URL
      );
      console.log('Respuesta de la API:', response.data);
      setNews(response.data.hoja1);
    } catch (error) {
      console.error('Error al obtener las noticias:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('Ejecutando flujo...');
    try {
      const response = await axios.post(import.meta.env.VITE_WEBHOOK_URL, {
        category,
        keyword,
      });

      if (response.status === 200) {
        setTimeout(async () => {
          await fetchNews();
        }, 10000);
        setStatus('Flujo ejecutado correctamente');
        await new Promise((resolve) => setTimeout(resolve, 10000)); // Espera antes de obtener las noticias
        await fetchNews(); // Actualiza las noticias después de ejecutar el flujo
      }
    } catch (error) {
      setStatus('Error al conectar con el webhook');
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='container'>
      <h1>News Automation Dashboard</h1>
      <form onSubmit={handleSubmit}>
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

        <div>
          <label>Palabra clave (opcional):</label>
          <input
            type='text'
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder='Ej: intelligence'
          />
        </div>

        <button type='submit' disabled={isLoading}>
          {isLoading ? 'Procesando...' : 'Ejecutar flujo'}
        </button>
      </form>
      {status && <p>{status}</p>}
      <h2>Noticias:</h2>{' '}
      {isLoading ? (
        <p>Cargando noticias...</p>
      ) : (
        <ul>
          {news.map((item, index) => (
            <li key={index}>
              <h3>{item.título}</h3>
              <p>{item.descripción}</p>
              <a href={item.url} target='_blank' rel='noopener noreferrer'>
                Leer más
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
