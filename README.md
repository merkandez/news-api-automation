# News Automation Dashboard

## Descripción del Proyecto

**News Automation Dashboard** es una aplicación web que automatiza la obtención de noticias desde **NewsAPI** y su almacenamiento en una hoja de cálculo de **Google Sheets** mediante un flujo de trabajo configurado en **Make**. 

El sistema permite:
- Seleccionar una categoría y/o palabra clave para buscar noticias personalizadas.
- Ejecutar un flujo automatizado que:
  1. Limpia automáticamente la hoja de cálculo.
  2. Obtiene las noticias de **NewsAPI**.
  3. Almacena los resultados en la hoja de cálculo.
- Renderizar las noticias desde **Google Sheets** directamente en el frontend de la aplicación.

---

## Tecnologías Utilizadas

### **Frontend**
- [React](https://reactjs.org/): Construcción de la interfaz de usuario.
- [Axios](https://axios-http.com/): Peticiones HTTP al webhook y a la API de Google Sheets.

### **Automatización**
- [Make](https://www.make.com/): Automatización del flujo de trabajo con módulos como:
  - **Webhook**: Recibe datos del frontend.
  - **HTTP**: Realiza peticiones a **NewsAPI**.
  - **Google Sheets**: Limpia y actualiza los datos en tiempo real.

### **API**
- [NewsAPI](https://newsapi.org/): Proveedor de noticias en tiempo real.

---

## Características

- **Personalización:** Elige categoría y palabra clave para buscar noticias relevantes.
- **Automatización:** Usa **Make** para gestionar y actualizar los datos de manera eficiente.
- **Actualización en tiempo real:** Cada búsqueda limpia y actualiza las noticias en el frontend.
- **Interfaz intuitiva:** Diseño limpio y fácil de usar.

---

## Instalación y Configuración

### **1. Clona el repositorio**

```bash
git clone git@github.com:merkandez/news-api-automation.git
cd news-api-automation/client


```
### **2. Instala las dependencias**

```bash

npm install

```
### **3. Configura las variables de entorno
  ## **1. Crea un archivo .env en la carpeta client con el siguiente contenido:

```bash

# URL del webhook configurado en Make
VITE_WEBHOOK_URL=https://hook.make.com/tu-webhook

# URL de la API generada por Sheety para Google Sheets
VITE_SHEETY_URL=https://api.sheety.co/tu-proyecto/nombreDeLaHoja


```
  ## **2.Asegúrate de sustituir tu-webhook y tu-proyecto/nombreDeLaHoja por los valores reales configurados en Make y Sheety.

### **4. Ejecuta la aplicación en desarrollo

```bash

npm run dev

```

La aplicación estará disponible en http://localhost:5173.

### Para ver mas detalles de la configuración de [Make](https://www.make.com/) en el archivo: make-scenario-setup.md