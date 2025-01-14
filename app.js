import 'dotenv/config';
import axios from 'axios';

const apiKey = process.env.NEWS_API_KEY;
const country = 'es'; 
const category = 'technology'; 
const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`;

// Función para obtener y mostrar noticias
const fetchNews = async () => {
  try {
    console.log('Obteniendo noticias de España...');
    const response = await axios.get(url);
    const articles = response.data.articles;

    console.log(`Se han obtenido ${articles.length} noticias de la categoría "${category}".`);
    articles.forEach((article, index) => {
      console.log(`${index + 1}. ${article.title}`);
    });
  } catch (error) {
    console.error('Error al obtener las noticias:', error.message);
  }
};


fetchNews();
