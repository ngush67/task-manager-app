# 📋 Task Manager App

A full-stack Task Manager application designed to help users organize, track, and manage their tasks efficiently. Built with modern web technologies.

---

## 🚀 Features

- ✅ **Add, Edit, Delete Tasks**
- 📝 **Mark Tasks as Complete/Incomplete**
- 🔍 **Filter Tasks (All, Completed, Incomplete)**
- 🎨 **Responsive UI with Tailwind CSS**
- ⚙️ **Backend API with Node.js, Express, and MongoDB**
- 🔐 **Environment Variables for Secure Configurations**

---

## 📂 Project Structure

```
Task-Manager-App/
├── client/               # Frontend
│   ├── public/           # Static files
│   └── src/              # Components, styles, JS logic
├── server/               # Backend
│   ├── controllers/      # Business logic
│   ├── models/           # Mongoose schemas
│   ├── routes/           # API routes
│   ├── config/           # Database connection
│   └── server.js         # Backend entry point
├── logs/                 # Log files
├── .env                  # Environment variables
├── .gitignore
├── README.md
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── nohup.out
```

---

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, Tailwind CSS, JavaScript  
- **Backend:** Node.js, Express.js, MongoDB (Mongoose)  
- **Tools:** PostCSS, dotenv, CORS

---

## 📦 Installation & Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/task-manager-app.git
   cd task-manager-app
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Configure Environment Variables:**

   Create a `.env` file and add:

   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. **Run the Application:**

   ```bash
   npm start
   ```

   The app will run on `http://localhost:5000`

---

## ✨ Future Enhancements

- 🔔 **Notifications for Due Tasks**  
- 📅 **Calendar View Integration**  
- 📱 **Mobile App Version**  
- 🔒 **User Authentication and Authorization**  
- 🌐 **Deployment on Heroku or Vercel**

---

## 📬 Contact

For feedback or contributions:

- **Email:** yourname@example.com  
- **GitHub:** [your-username](https://github.com/your-username)

---

## 📄 License

This project is licensed under the MIT License.

---

_Stay organized and productive!_ ✅
