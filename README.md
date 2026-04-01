# Orvexa Application

Orvexa is a unique web application that blends the best features of YouTube and Twitter. Users can search and view videos like YouTube, while also tweeting, interacting, and engaging with others as they would on Twitter. This repository contains both the frontend and backend for the Orvexa platform.

## Orvexa Frontend

This project serves as the frontend for the Orvexa platform, providing a sleek, interactive user interface built using React.

### 🚀 Features
- **Video Browsing:** Search for videos, view video details, and explore trending content, similar to YouTube.
- **Tweeting:** Create, post, and interact with tweets while watching videos.
- **Video Uploading:** Users can upload their own videos, allowing content creation and sharing.
- **User Profiles:** View and manage user profiles with both video and tweet interactions in one place.
- **Responsive Design:** Fully responsive interface for seamless viewing on desktops, tablets, and mobile devices.
- **JWT Authentication:** Secure login and user authentication with JSON Web Tokens (JWT).

### 🛠️ Tech Stack
- **React:** Core library for building the frontend UI.
- **Redux Toolkit:** State management for handling complex user interactions and data flow.
- **React Router:** For dynamic, single-page navigation within the app.
- **Tailwind CSS:** For responsive and modern styling.
- **Axios:** To handle API requests and interactions with the backend.
- **Cloudinary:** For uploading and managing media (images, videos).
- **JavaScript (ES6+):** Primary language for functionality.

### 📚 Getting Started (Frontend)
1. Navigate to the frontend directory: `cd frontend`
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev` (or `npm start`)
4. Open your browser and navigate to: `http://localhost:5173`

---

## Orvexa Backend

Orvexa Backend is the server-side component of the Orvexa application, designed to handle data processing, storage, and management for the Orvexa platform. It provides a robust API that supports functionalities such as user authentication, video uploading, and tweet management.

### 🛠️ Tech Stack
- **Node.js:** A JavaScript runtime built on Chrome's V8 engine layout for building fast and scalable server-side applications.
- **Express.js:** A minimal and flexible Node.js web application framework.
- **MongoDB:** A NoSQL database used to store and manage application data in a flexible, JSON-like format.
- **Mongoose:** An ODM library for MongoDB and Node.js.
- **CORS:** A middleware to enable Cross-Origin Resource Sharing.
- **JWT (JSON Web Tokens):** For secure user authentication and authorization.
- **dotenv:** A zero-dependency module that loads environment variables.

### 🚀 Features
- **User Authentication:** Secure user registration and login using JWT.
- **Video Management:** API endpoints for uploading, retrieving, and managing videos.
- **Tweet Management:** Create, retrieve, update, and delete tweets.
- **CORS Support:** Allow requests from different origins for seamless integration with the frontend.
- **Environment Configuration:** Use environment variables for sensitive configurations and API keys.

### 📚 Getting Started (Backend)
1. Navigate to the backend directory: `cd backend`
2. Install dependencies: `npm install`
3. Running the App: `npm run dev` (or `npm start`)
4. Open your Postman or any API testing tool and test the endpoints at `http://localhost:8000`

---

## Environment Variables
Make sure to configure your environment variables in `.env` files in both the frontend and backend directories. You'll need settings like the backend API URL for the frontend, and MongoDB connection string, Cloudinary credentials, and JWT secret for the backend.



