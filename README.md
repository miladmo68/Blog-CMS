# 📘 Blog CMS – Full MERN Stack Application

A clean, responsive Blog Content Management System (CMS) built using the MERN stack with markdown support, global state via React Context, and styled using TailwindCSS and daisyUI.

---

## 🚀 Features

- Create and view blog posts using markdown
- Global state management using Context API
- RESTful API with MongoDB models
- Clean and responsive UI with TailwindCSS + daisyUI
- Axios for API interaction
- Modular structure for scalable development

---

## 📁 Folder Structure

```
mern-blog-cms-full-final/
├── front/           # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/   # PostCard, PostForm
│   │   ├── context/      # PostContext
│   │   ├── pages/        # Home.jsx
│   │   └── utils/        # api.js (Axios calls)
├── back/            # Backend (Express + MongoDB)
│   ├── models/      # Post.js
│   └── routes/      # posts.js
```

---

## ⚙️ Prerequisites

- Node.js (v18 or later)
- MongoDB (Local or MongoDB Atlas)

---

## 🧪 Backend Setup

1. Navigate to the backend folder:
```bash
cd back
```

2. Copy the environment file and set your MongoDB URI:
```bash
cp .env.example .env
```

> Example `.env`:
```
MONGO_URI=mongodb://localhost:27017/blog_cms
PORT=5000
```

3. Install dependencies and run the server:
```bash
npm install
npm run dev
```

4. The API will start at: `http://localhost:5000/api/posts`

---

## 🎨 Frontend Setup

1. Navigate to the frontend folder:
```bash
cd front
```

2. Install dependencies:
```bash
npm install
```

3. Start the frontend development server:
```bash
npm run dev
```

4. Open your browser at: `http://localhost:5173`

---

## 🔧 Tech Stack

### Frontend
- React 18
- Vite
- TailwindCSS 3
- daisyUI
- React Markdown
- Context API
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- cors

---

## 📌 Notes

- Posts are stored in MongoDB using the `Post` model
- All post data is managed globally through `PostContext`
- Axios is used for all communication between frontend and backend
- You can style and expand this project using Tailwind and daisyUI components

---

## ✅ Sample API Routes

| Method | Endpoint              | Description         |
|--------|-----------------------|---------------------|
| GET    | `/api/posts`          | Fetch all posts     |
| POST   | `/api/posts`          | Create new post     |

---

Happy coding! 💻