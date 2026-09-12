# 🔗 Short URL

A simple URL Shortener built with **Node.js, Express.js, MongoDB, Mongoose, EJS, and JWT authentication**.

## ✨ Features

* Create short URLs
* Redirect to original URLs
* User signup and login
* JWT-based authentication
* Role-based access (`NORMAL` / `ADMIN`)
* Track URL visit history
* View URL analytics

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB, Mongoose
* **Frontend:** EJS, HTML, CSS
* **Authentication:** JWT
* **Other:** Nanoid, Cookie Parser, Dotenv

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/short-url.git
cd short-url
```

### 2. Install dependencies

```basharc

npm install
```

### 3. Setup environment variables

Create a `.env` file:

```env
PORT=8001
MONGODB_URL=mongodb://127.0.0.1:27017/short-url
JWT_SECRET=your_jwt_secret_here
```

### 4. Start the server

```bash
npm run dev
```

Open **http://localhost:8001** in your browser.

## 📁 Project Structure

```text
controllers/    → Application logic
middlewares/    → Authentication middleware
models/         → MongoDB models
routes/         → Application routes
service/        → Authentication service
views/          → EJS templates
```

## 👨‍💻 Author

**Piyush Pundir**

⭐ If you like the project, consider giving it a star!
