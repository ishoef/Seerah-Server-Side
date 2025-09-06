# 🕌 Seerah Website Backend  

This is the **backend API** for the Seerah Website – a modern platform for learning about the **Seerah (Life of Prophet Muhammad ﷺ)**. It follows the **MVC pattern** and uses **Node.js, Express.js, and MongoDB (Mongoose)** for scalable and structured development.  

The backend provides APIs for:  
- 📚 **Seerah Lessons Management**  
- 📝 **Exams & MCQs**  
- 🎓 **Certificates Generation**  
- 📊 **User Dashboard with Progress Reports**  
- 🔐 **Authentication & Role-based Access (Admin/User)**  

---

## ✨ Features  
- ✅ **User Authentication** – Register/Login (JWT + Firebase optional).  
- ✅ **Seerah Lessons API** – CRUD for managing lessons and topics.  
- ✅ **MCQ Exams API** – Add, fetch, and evaluate exam questions.  
- ✅ **Certificates API** – Generate certificates upon course/exam completion.  
- ✅ **User Dashboard** – Track progress, completed lessons, and scores.  
- ✅ **Admin Features** – Manage lessons, exams, users.  
- ✅ **Secure REST API** – JWT-based protected routes.  

---

## 🛠️ Tech Stack  
- **Server:** Node.js, Express.js  
- **Database:** MongoDB + Mongoose (ODM)  
- **Architecture:** MVC Pattern (Models, Views, Controllers)  
- **Auth:** JWT (JSON Web Token) + Bcrypt (password hashing)  
- **Deployment:** Render / Railway / Heroku  

---

## 📂 Project Structure  

seerah-backend/
│── src/
│ ├── config/ # DB connection, environment setup
│ ├── controllers/ # Request handling logic
│ ├── models/ # Mongoose schemas & models
│ ├── routes/ # Express route definitions
│ ├── middlewares/ # Auth middleware, error handling
│ ├── services/ # Business logic (exam evaluation, certificates)
│ └── app.js # Main Express app
│
│── .env # Environment variables
│── package.json
│── README.md



