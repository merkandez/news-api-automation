# News Automation Dashboard

## Descripción del Proyecto

**News Automation Dashboard** es una aplicación web que permite automatizar la obtención de noticias y almacenarlas en una hoja de cálculo de Google Sheets mediante un flujo de trabajo configurado en **Make**. El usuario puede seleccionar una categoría de noticias y/o una palabra clave, y el sistema se encargará de procesar y registrar los resultados automáticamente.

---

## Tecnologías Utilizadas

### **Frontend**
- [React](https://reactjs.org/) (con Vite)
- [Axios](https://axios-http.com/)

### **Automatización**
- [Make](https://www.make.com/) (Webhook, API de NewsAPI, Google Sheets)

### **API**
- [NewsAPI](https://newsapi.org/) para obtener noticias en tiempo real.

---

## Características

- Selección de categoría y palabra clave para personalizar la búsqueda de noticias.
- Automatización del flujo de datos con **Make**:
  - Obtención de noticias desde **NewsAPI**.
  - Almacenamiento de resultados en una hoja de cálculo de Google Sheets.
- Diseño atractivo y fácil de usar.

---

## Instalación y Uso

### **1. Clona el repositorio**

```bash
git clone git@github.com:merkandez/news-api-automation.git
cd news-api-automation/client

```
### **2. Instala las dependencias**

```bash

npm install

```
### **3. Configura las variables

```bash

VITE_WEBHOOK_URL=https://hook.make.com/tu-webhook

```
### **4. Ejecuta la aplicación en desarrollo

```bash

npm run dev

```

La aplicación estará disponible en http://localhost:5173.