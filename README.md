<div align="center">

# 🎓 Leoind Student Portal

<img src="https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge" alt="Status" />
<img src="https://img.shields.io/badge/Frontend-React%20%2F%20Web-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="Frontend" />
<img src="https://img.shields.io/badge/Backend-Node.js%20%2F%20Express-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
<img src="https://img.shields.io/badge/Database-MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
<img src="https://img.shields.io/badge/Auth-JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" alt="JWT" />

*A centralized, full-stack academic management and student portal system built during the software engineering internship at Leoind Pvt Ltd.*

</div>

---

## 📌 Table of Contents
- [Overview](#-overview)
- [Key Portal Features](#-key-portal-features)
- [Tech Stack](#-tech-stack)
- [System Architecture](#-system-architecture)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation & Setup](#installation--setup)
- [API Endpoints](#-api-endpoints)
- [Author](#-author)

---

## 💡 Overview

The **Leoind Student Portal** streamlines academic operations by providing a unified platform for students and administrators. Built with a scalable backend and responsive interface, the portal handles student onboarding, course enrollments, academic tracking, attendance records, and real-time announcements with strict role-based access control (RBAC).

---

## ✨ Key Portal Features

- **🔐 Role-Based Authentication (RBAC):** Secure login and session management using JWT and bcrypt for Students, Faculty, and Admins.
- **📊 Personalized Student Dashboard:** Real-time overview of enrolled courses, upcoming deadlines, attendance percentages, and grade reports.
- **📚 Course & Enrollment Management:** Seamless course registration, syllabus access, and credit tracking.
- **🗓️ Attendance & Gradebook Tracking:** Automated calculation of attendance metrics and semester performance logs.
- **📢 Notice Board & Announcements:** Instant broadcasting of campus updates, exam schedules, and academic circulars.
- **👤 Profile Management:** Self-service portal for students to update personal details, academic history, and documents.

---

## 🛠 Tech Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Backend Runtime** | Node.js & Express.js | RESTful API design, routing, and server-side business logic |
| **Database** | MongoDB & Mongoose | Schema modeling for students, courses, attendance, and grades |
| **Authentication** | JWT & Bcrypt.js | Stateless token authentication and password hashing |
| **Frontend / UI** | HTML5, CSS3, JavaScript / React | Interactive student dashboard and responsive layouts |
| **Middleware** | CORS, Dotenv, Express-Validator | Request sanitization, security headers, and environment config |

---

## 📂 System Architecture

```text
Leoind_Project/
├── src/
│   ├── config/          # Database connection & environment setup
│   ├── controllers/     # Logic for auth, student profiles, courses & grades
│   ├── models/          # Mongoose schemas (Student, Course, Attendance, Notice)
│   ├── routes/          # Modular API routes (/auth, /students, /courses, /admin)
│   ├── middleware/      # JWT verification & role-based authorization guards
│   └── server.js        # Express app initialization & server entry point
├── public/              # Static assets, stylesheets & client scripts
├── .env.example         # Template for environment variables
├── package.json         # Dependencies and npm scripts
└── README.md            # Project documentation
```

---

## 🚀 Getting Started

Follow these steps to configure and run the Student Portal locally.

### Prerequisites
- **Node.js** (v18+ recommended)
- **npm** or **yarn**
- **MongoDB** (Local instance or MongoDB Atlas URI)

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/harshskarki/Leoind_Project.git](https://github.com/harshskarki/Leoind_Project.git)
   cd Leoind_Project
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   Create a `.env` file in the root directory:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_super_secret_jwt_key
   NODE_ENV=development
   ```

4. **Start the application:**
   - Development mode:
     ```bash
     npm run dev
     ```
   - Production mode:
     ```bash
     npm start
     ```

---

## 📡 API Endpoints

### Authentication
| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/auth/register` | Public | Register a new student account |
| `POST` | `/api/auth/login` | Public | Authenticate user & return JWT token |
| `GET` | `/api/auth/me` | Protected | Fetch logged-in user profile |

### Student & Academic Modules
| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/students/profile` | Student | View personal academic profile & enrolled courses |
| `PUT` | `/api/students/profile` | Student | Update contact details & profile info |
| `GET` | `/api/courses` | Authenticated | List all available courses & credits |
| `POST` | `/api/courses/:id/enroll` | Student | Enroll in a specific course |
| `GET` | `/api/attendance` | Student | Fetch subject-wise attendance summary |
| `POST` | `/api/admin/notices` | Admin | Publish a new academic notice or announcement |

---

## 👨‍💻 Author

**Harshvardhan Singh Karki**  
- GitHub: [@harshskarki](https://github.com/harshskarki)
- Focus: Full-Stack Web Development & Backend Infrastructure

---

<div align="center">
  <p>⭐ Star this repository if you found it helpful!</p>
</div>
EOF
