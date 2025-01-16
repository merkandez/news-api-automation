import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [category, setCategory] = useState('technology');
  const [keyword, setKeyword] = useState('');
  const [status, setStatus] = useState(null);
  const [news, setNews] = useState([]); 

  const fetchNews = async () => {
    try {
      const response = await axios.get(
        'https://api.sheety.co/9ab165c595e993024cbb9e8e90e6deff/noticiasAutomatizadas/hoja1'
      );
      console.log('Respuesta de la API:', response.data);
      setNews(response.data.hoja1); 
    } catch (error) {
      console.error('Error al obtener las noticias:', error);
    }
  };

  useEffect(() => {
    fetchNews(); 
    
    const interval = setInterval(() => {
      fetchNews(); // Llamada a la API cada segundo
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(import.meta.env.VITE_WEBHOOK_URL, {
        category,
        keyword,
      });

      if (response.status === 200) {
        setStatus('Flujo ejecutado con éxito');
        fetchNews(); 
      }
    } catch (error) {
      setStatus('Error al conectar con el webhook');
      console.error('Error:', error);
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
            placeholder='Ej: Inteligencia'
          />
        </div>

        <button type='submit'>Ejecutar flujo</button>
      </form>

      {status && <p>{status}</p>}

      <h2>Noticias:</h2>
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
    </div>
  );
};

export default App;
