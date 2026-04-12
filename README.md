<div align="center">
  <img src="./frontend/src/assets/react.svg" alt="ORVΞXA Logo" width="100"/>
  <h1>ORVΞXA</h1>
  <p><strong>A Next-Generation Hybrid Video & Social Platform</strong></p>
  
  [![Frontend](https://img.shields.io/badge/Frontend-React.js-blue?style=for-the-badge&logo=react)](#frontend)
  [![Backend](https://img.shields.io/badge/Backend-Node.js-green?style=for-the-badge&logo=node.js)](#backend)
  [![Database](https://img.shields.io/badge/Database-MongoDB-47A248?style=for-the-badge&logo=mongodb)](#database)

  <p>
    <a href="https://orvexa-iota.vercel.app"><b>Live Demo</b></a> •
    <a href="#-architecture--tech-stack"><b>Tech Stack</b></a> •
    <a href="#-getting-started"><b>Quick Start</b></a> •
    <a href="#-features"><b>Features</b></a>
  </p>
</div>

<br />

## 🌟 About ORVΞXA

**ORVΞXA** is a disruptive full-stack web application that seamlessly merges the long-form video capabilities of YouTube with the high-paced social engagement of Twitter. Whether you want to discover trending videos, publish your own content, or engage in real-time tweet threads while simultaneously streaming, ORVΞXA provides a unified, highly optimized user experience.

---

## 🚀 Features

- **Hybrid Social Engine:** Experience video viewing alongside real-time tweeting without ever breaking context.
- **Robust Video Processing:** Built-in support for performant video uploads, storage via Cloudinary, and optimized retrieval.
- **Granular Interactions:** Like, comment, tweet, and subscribe to content creators instantly.
- **State-of-the-Art Authentication:** Secure, encrypted login flows utilizing JSON Web Tokens (JWT) and BCrypt.
- **Fully Responsive UI:** A pixel-perfect frontend designed with TailwindCSS, dynamically adapting to mobile, tablet, and desktop environments.
- **Enterprise-ready Backend:** Structured, scalable MVC architecture built on Express that dynamically scales.

---

## 🛠️ Architecture & Tech Stack

ORVΞXA follows a monolithic-repository architecture separated into distinct **Frontend** and **Backend** workspaces.

### Frontend
- **Framework & State:** React, Redux Toolkit
- **Routing & Networking:** React Router DOM, Axios
- **Styling:** Tailwind CSS

### Backend
- **Server:** Node.js, Express.js
- **Database & ODM:** MongoDB, Mongoose
- **Security & Media:** JWT, Bcrypt, Cloudinary, Multer

---

## 🚦 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/en/) (v16+) and [npm](https://www.npmjs.com/) installed on your local machine.

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Bhumika-0204/Orvexa.git
   cd Orvexa
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```
   *Create a `.env` file in the backend directory and populate your API keys (MongoDB, Cloudinary, JWT).*

   Start the server:
   ```bash
   npm run dev
   ```

3. **Frontend Setup**
   Open a new terminal window:
   ```bash
   cd frontend
   npm install
   ```
   *Create a `.env` file in the frontend directory and define your backend URI (e.g. `VITE_BACKEND_URL=http://localhost:8000/api/v1`).*

   Start the client application:
   ```bash
   npm run dev
   ```

---

## 🌐 Deployments

ORVΞXA is built to be cloud-agnostic and is officially structured for deployment on Vercel and Render.
- **Frontend Live URL:** [https://orvexa-iota.vercel.app](https://orvexa-iota.vercel.app)
- **Backend API:** Hosted securely on Render.

---

## 🤝 Contributing

We welcome contributions! Please follow these steps to contribute:
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

<div align="center">
  <i>Developed with ❤️ for the modern web creator.</i>
</div>
