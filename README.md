````markdown
## 🚀 Dev Blog

A **full-stack MERN blogging platform** with Tailwind CSS for a sleek, responsive design. Users can create, read, update, and delete posts, with authentication, search functionality, and admin management.  

**🌐 Live Demo:** [Dev Blog Live](https://dev-crafted.netlify.app/)  

---

## ✨ Features

- 🔐 **User Authentication** – Secure login & registration with JWT  
- ✏️ **CRUD Operations** – Create, read, update, delete blog posts  
- 📱 **Responsive Design** – Mobile-first UI with Tailwind CSS  
- 🛠️ **Admin Panel** – Manage posts and users easily  
- 🔍 **Search & Filter** – Find posts by title or content  
- 🐞 **Debugging & API Fixes** – Resolved integration issues for stable performance  

---

## 🛠️ Tech Stack

| Frontend       | Backend       | Database    | Tools & Testing |
|----------------|---------------|------------|----------------|
| React.js       | Node.js       | MongoDB    | Postman        |
| Tailwind CSS   | Express.js    |            | Chrome DevTools |
|                | JWT Auth      |            | Git & GitHub   |

---



---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/myselfmehedihasan/dev-blog.git
cd dev-blog
````

### Backend Setup

```bash
cd backend
npm install
```

* Create a `.env` file and add environment variables (MongoDB URI, JWT secret).
* Start backend:

```bash
npm start
```

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

---

## 📄 API Endpoints

### Authentication

* `POST /api/auth/register` – Register new user
* `POST /api/auth/login` – Login existing user

### Posts

* `GET /api/posts` – Get all posts
* `GET /api/posts/:id` – Get single post by ID
* `POST /api/posts` – Create a post
* `PUT /api/posts/:id` – Update a post
* `DELETE /api/posts/:id` – Delete a post

> *Some endpoints require authentication.*

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m "Add feature"`
4. Push: `git push origin feature-name`
5. Open a Pull Request

---

## 📚 Future Enhancements

* Comments section for posts
* User profile customization
* Social media sharing
* Flutter mobile version

---

## 🎓 Author

**Mehedi Hasan** – [GitHub](https://github.com/myselfmehedihasan) | [LinkedIn](https://www.linkedin.com/in/mehedihasan) | [Portfolio](https://dev-crafted.netlify.app/)

---

## 📝 License

MIT License - see the [LICENSE](LICENSE) file for details.

```

---
```
