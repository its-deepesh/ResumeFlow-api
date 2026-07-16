# ResumeFlow API

A RESTful backend API for **ResumeFlow**, built using **Node.js** and **Express.js**. This project is part of my internship, where I am learning backend development by implementing REST APIs for authentication, user management, and resume document management.

---

## 🚀 Tech Stack

- Node.js
- Express.js
- JavaScript
- File System (`fs`)
- REST API
- JSON

---

## 📁 Project Structure

```text
resume-api/
│
├── routes/
│   ├── auth.js
│   ├── users.js
│   └── documents.js
│
├── utils/
│   └── file.js
│
├── data.json
├── app.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## 📌 Features Implemented

### 🔐 Authentication APIs

- Register User
- Login User (Mock Token)
- Logout User
- Forgot Password
- Reset Password

---

### 👤 User APIs

- Get User Profile
- Get User Profile by ID
- Update User Profile
- Delete User Profile

---

### 📄 Document APIs

- Create Document
- Get All Documents
- Get Document by ID
- Update Document
- Delete Document

---

## 📂 API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user and return mock token |
| POST | `/api/auth/logout` | Logout user |
| POST | `/api/auth/forgot-password` | Mock forgot password |
| POST | `/api/auth/reset-password` | Reset password |

---

### Users

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users/profile` | Get user profile |
| GET | `/api/users/profile/:id` | Get profile by ID |
| PUT | `/api/users/profile/:id` | Update profile |
| DELETE | `/api/users/profile/:id` | Delete profile |

---

### Documents

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/documents` | Create document |
| GET | `/api/documents` | Get all documents |
| GET | `/api/documents/:id` | Get document by ID |
| PUT | `/api/documents/:id` | Update document |
| DELETE | `/api/documents/:id` | Delete document |

---

## 📦 Installation

Clone the repository

```bash
git clone <repository-url>
```

Move into the project directory

```bash
cd resume-api
```

Install dependencies

```bash
npm install
```

Start the server

```bash
node app.js
```

---

## 🧪 API Testing

All APIs were tested using **Postman**.

---

## 📚 Concepts Learned

- REST API
- CRUD Operations
- Express Router
- Route Parameters
- Request Body
- HTTP Status Codes
- JSON Handling
- File System (`fs`)
- Reading JSON files
- Writing JSON files
- Utility Functions
- Code Reusability
- Modular Project Structure
- API Testing using Postman

---

## 📌 Status Codes Used

| Status | Meaning |
|---------|----------|
| 200 | OK |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 404 | Not Found |

---

## 📈 Project Status

### ✅ Completed

- Authentication Module
- User Module
- Document CRUD Module
- Utility Functions

### 🚧 In Progress

- Document Import
- Document Duplicate
- Sections API
- Version API
- Templates API
- AI APIs
- Applications API

---

## 👨‍💻 Author

**Deepesh Singh**

BCA Student | Backend Developer (Learning)

---
