# ResumeFlow API

A RESTful backend API built with **Node.js** and **Express.js** for the ResumeFlow project. This project is being developed as part of my Full Stack Development Internship.

The API currently supports user authentication, user profile management, and resume document management using a JSON file as the data store.

---

# 🚀 Tech Stack

- Node.js
- Express.js
- JavaScript
- REST API
- File System (fs)
- JSON
- Postman

---

# 📂 Project Structure

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

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/your-username/ResumeFlow-api.git
```

Move into the project

```bash
cd ResumeFlow-api
```

Install dependencies

```bash
npm install
```

Start the server

```bash
node app.js
```

The server will start on:

```text
http://localhost:3000
```

---

# 📬 API Endpoints

## 🔐 Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user and return a mock token |
| POST | `/api/auth/logout` | Logout the current user |
| POST | `/api/auth/forgot-password` | Mock forgot password API |
| POST | `/api/auth/reset-password` | Reset user password |

---

## 👤 Users

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/users/profile` | Get first user profile |
| GET | `/api/users/profile/:id` | Get profile by user ID |
| PUT | `/api/users/profile/:id` | Update user profile |
| DELETE | `/api/users/profile/:id` | Delete user profile |

---

## 📄 Documents

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/documents` | Create a new document |
| POST | `/api/documents/import` | Import a new document |
| GET | `/api/documents` | Get all documents |
| GET | `/api/documents/:id` | Get document by ID |
| PUT | `/api/documents/:id` | Update document |
| POST | `/api/documents/:id/duplicate` | Duplicate an existing document |
| DELETE | `/api/documents/:id` | Delete a document |

---

# 📖 Features

## 🔐 Authentication Module

The authentication module handles all user authentication related operations.

### Features

- User Registration
- User Login
- User Logout
- Forgot Password
- Reset Password

Currently, authentication uses a **mock token** as required by the internship task.

---

## 👤 User Module

This module manages user profiles.

### Features

- Fetch User Profile
- Fetch User by ID
- Update User Profile
- Delete User Profile

---

## 📄 Document Module

This is the core module of the ResumeFlow API.

### Features

- Create Resume
- Import Resume
- View All Resumes
- View Resume by ID
- Update Resume
- Duplicate Resume
- Delete Resume

Each document contains:

- Unique ID
- Title
- Template
- Content
- Created By
- Created At
- Updated At

---

# 📚 Concepts Practiced

- Express Routing
- REST API Design
- CRUD Operations
- HTTP Methods
- HTTP Status Codes
- Request Parameters
- Request Body
- JSON Handling
- File System (fs)
- Code Reusability
- Utility Functions
- Modular Folder Structure
- API Testing with Postman

---

# 📁 Utility Functions

A reusable utility file (`utils/file.js`) is used for reading and writing data.

### Functions

- `readData()`
- `writeData()`

This removes repeated file handling code from route files and improves code reusability.

---

# 📊 HTTP Status Codes Used

| Code | Meaning |
|------|---------|
| 200 | OK |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 404 | Not Found |

---

# 🧪 Testing

All APIs have been tested using **Postman**.

---

# 📸 Screenshots

## Project Structure

> Add a screenshot here showing the folder structure.

![ProjectStructure](screenshots/project-structure.png)

---

## Authentication APIs

> Add screenshots of:

- Register
- Login
- Logout
- Forgot Password
- Reset Password

<div align="center">
  <!-- Row 1 -->
  <img src="screenshots/auth/register.png" width="45%" alt="Image 1">
  <img src="screenshots/auth/login.png" width="45%" alt="Image 2">
  <br><br>
  <!-- Row 2 -->
  <img src="screenshots/auth/logout.png" width="45%" alt="Image 3">
  <img src="screenshots/auth/forgot-password.png" width="45%" alt="Image 4">
  <br><br>
  <!-- Row 3 (Centered) -->
  <img src="screenshots/auth/reset-password.png" width="45%" alt="Image 5">
</div>

---

## User APIs

> Add screenshots of:

- Get Profile
- Get User By ID
- Update Profile
- Delete Profile

<div align="center">
  <!-- Row 1 -->
  <img src="screenshots/users/get-profile.png" width="45%" alt="Image 1">
  <img src="screenshots/users/get-profile-by-id.png" width="45%" alt="Image 2">
  <br><br>
  <!-- Row 2 -->
  <img src="screenshots//users/update-profile.png" width="45%" alt="Image 3">
  <img src="screenshots/users/delete-profile.png" width="45%" alt="Image 4">
</div>

---

## Document APIs

> Add screenshots of:

- Create Document
- Import Document
- Get All Documents
- Get Document By ID
- Update Document
- Duplicate Document
- Delete Document

<div align="center">
  <!-- Row 1 -->
  <img src="screenshots/documents/create-document.png" width="30%" alt="Image 1">
  <img src="screenshots/documents/get-all-documents.png" width="30%" alt="Image 2">
  <img src="screenshots/documents/get-document-id.png" width="30%" alt="Image 3">
  <br><br>
  <!-- Row 2 -->
  <img src="screenshots/documents/update-document.png" width="30%" alt="Image 4">
  <img src="screenshots/documents/delete-document.png" width="30%" alt="Image 5">
  <img src="screenshots/documents/import-document.png" width="30%" alt="Image 6">
  <br><br>
  <!-- Row 3 (Centered Final Image) -->
  <img src="screenshots/documents/duplicate-document.png" width="45%" alt="Image 7">
</div>

---

# 📈 Current Progress

## ✅ Completed

- Authentication APIs
- User APIs
- Document APIs
- Utility Functions

## 🚧 In Progress

- Templates APIs
- AI APIs
- Applications APIs
- Sections APIs
- Versions APIs

---

# 👨‍💻 Author

**Deepesh Singh**

BCA Student | Full Stack Developer (Learning)

GitHub: https://github.com/its-deepesh
