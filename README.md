# ResumeFlow API

The ResumeFlow API is a RESTful backend application built with **Node.js** and **Express.js** following the **MVC (Model-View-Controller)** architecture.

The project provides APIs for authentication, user management, resume documents, templates, AI-powered mock services, job applications, resume sections, items, and version management. Data is currently stored in a JSON file using a centralized database model.

---

# 🚀 Tech Stack

- Node.js
- Express.js
- JavaScript
- REST API
- File System (fs)
- JSON
- Postman
- MVC Architecture
- Express Middleware

---

# 📂 Project Structure

```text
resume-api/
│
├── controllers/
│   ├── authController.js
│   ├── usersController.js
│   ├── documentsController.js
│   ├── sectionsController.js
│   ├── itemsController.js
│   ├── versionsController.js
│   ├── templatesController.js
│   ├── aiController.js
│   └── applicationsController.js
│
├── middleware/
│   ├── logger.js
│   ├── authValidation.js
│   ├── userValidation.js
│   ├── documentValidation.js
│   ├── sectionValidation.js
│   ├── itemValidation.js
│   ├── aiValidation.js
│   └── applicationValidation.js
│
├── models/
│   └── database.js
│
├── routes/
│   ├── auth.js
│   ├── users.js
│   ├── documents.js
│   ├── templates.js
│   ├── ai.js
│   ├── applications.js
│   └── index.js
│
├── screenshots/
├── data.json
├── app.js
├── package.json
└── README.md
```

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

# 🏗 MVC Architecture

The project follows the MVC (Model-View-Controller) architecture.

- **Routes** define API endpoints.
- **Controllers** contain business logic.
- **Models** interact with the JSON database.
- **Middleware** handles logging and request validation.

Request Flow:

Client
↓
Routes
↓
Validation Middleware
↓
Controllers
↓
Models (database.js)
↓
data.json
↓
Response

---

# ⚙ Middleware

The project uses custom Express middleware.

### Logger Middleware

Logs every incoming request with its HTTP method and endpoint.

### Validation Middleware

Validates request bodies before they reach the controllers.

Validation modules include:

- Authentication Validation
- User Validation
- Document Validation
- Section Validation
- Item Validation
- AI Validation
- Application Validation

---

# 📚 REST API Documentation

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

## 🎨 Templates

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/templates` | Get all templates |
| GET | `/api/templates/:id` | Get template by ID |

---

## 🤖 AI

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/ai/bullets` | Generate resume bullet points (Mock) |
| POST | `/api/ai/summary` | Generate professional summary (Mock) |
| POST | `/api/ai/rewrite` | Rewrite text (Mock) |
| POST | `/api/ai/prompt` | Generate AI response (Mock) |

---

## 📋 Applications

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/applications` | Create job application |
| GET | `/api/applications` | Get all applications |
| GET | `/api/applications/:id` | Get application by ID |
| PUT | `/api/applications/:id` | Update application |
| DELETE | `/api/applications/:id` | Delete application |

---

## 📑 Sections

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/documents/:id/sections` | Create a section |
| GET | `/api/documents/:id/sections` | Get all sections |
| PUT | `/api/documents/:id/sections/:sectionId` | Update a section |
| DELETE | `/api/documents/:id/sections/:sectionId` | Delete a section |

---

## 📝 Section Items

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/documents/:id/sections/:sectionId/items` | Add item to section |
| GET | `/api/documents/:id/sections/:sectionId/items` | Get all items |
| PUT | `/api/documents/:id/sections/:sectionId/items/:itemId` | Update an item |
| DELETE | `/api/documents/:id/sections/:sectionId/items/:itemId` | Delete an item |

---

## 🕒 Versions

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/documents/:id/versions` | Create document version |
| GET | `/api/documents/:id/versions` | Get all versions |
| GET | `/api/documents/:id/versions/:versionId` | Get version by ID |

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

## 🎨 Templates Module

Provides available resume templates.

### Features

- View All Templates
- View Template by ID

---

## 🤖 AI Module

Mock AI endpoints for resume enhancement.

### Features

- Generate Resume Bullet Points
- Generate Professional Summary
- Rewrite Resume Content
- AI Prompt Response

> **Note:** These are mock endpoints implemented as part of the internship. No external AI service is used.

---

## 📋 Applications Module

Tracks job applications.

### Features

- Create Application
- View All Applications
- View Application by ID
- Update Application
- Delete Application

## Architecture Features
- MVC Architecture
- Modular Controllers
- Centralized Database Model
- Modular Route Registration
- Request Validation Middleware
- Logger Middleware

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
- Express Middleware
- Express Router
- API Modularization
- Mock API Development
- JSON Data Persistence
- Nested Resources
- Nested CRUD Operations
- Route Parameters
- Snapshot Versioning
- MVC Architecture
- Controllers
- Models
- Express Middleware
- Request Validation
- Logging Middleware
- Modular Routing

---

## 📑 Sections Module

Manage resume sections inside each document.

### Features

- Create Resume Sections
- View Resume Sections
- Update Resume Sections
- Delete Resume Sections

---

## 📝 Items Module

Manage individual items inside each resume section.

### Features

- Add Items
- View Items
- Update Items
- Delete Items

---

## 🕒 Version History Module

Maintain snapshots of documents.

### Features

- Create Version Snapshots
- View Version History
- View Version Details

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

![ProjectStructure](screenshots/project-structure.png)

---

## Authentication APIs

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

## Templates APIs

<div align="center">

<img src="screenshots/templates/get-all-templates.png" width="45%">
<img src="screenshots/templates/get-template-by-id.png" width="45%">

</div>

---

## AI APIs

<div align="center">

<img src="screenshots/ai/bullets.png" width="45%">
<img src="screenshots/ai/summary.png" width="45%">

<br><br>

<img src="screenshots/ai/rewrite.png" width="45%">
<img src="screenshots/ai/prompt.png" width="45%">

</div>

---

## Applications APIs

<div align="center">

<img src="screenshots/applications/create-application.png" width="30%">
<img src="screenshots/applications/get-all-applications.png" width="30%">
<img src="screenshots/applications/get-application-by-id.png" width="30%">

<br><br>

<img src="screenshots/applications/update-application.png" width="45%">
<img src="screenshots/applications/delete-application.png" width="45%">

</div>

---

## Sections APIs

<div align="center">

<img src="screenshots/sections/create-section.png" width="45%">
<img src="screenshots/sections/get-sections.png" width="45%">

<br><br>

<img src="screenshots/sections/update-section.png" width="45%">
<img src="screenshots/sections/delete-section.png" width="45%">

</div>

---

## Section Items APIs

<div align="center">

<img src="screenshots/items/create-item.png" width="30%">
<img src="screenshots/items/get-items.png" width="30%">
<img src="screenshots/items/update-item.png" width="30%">

<br><br>

<img src="screenshots/items/delete-item.png" width="45%">

</div>

---

## Versions APIs

<div align="center">

<img src="screenshots/versions/create-version.png" width="30%">
<img src="screenshots/versions/get-versions.png" width="30%">
<img src="screenshots/versions/get-version-by-id.png" width="30%">

</div>

---

# 🎉 Project Status

## ✅ Completed

- Authentication APIs
- User APIs
- Document APIs
- Section APIs
- Item APIs
- Version APIs
- Template APIs
- AI APIs
- Application APIs
- MVC Architecture
- Controllers
- Models
- Middleware
- Modular Routing

**Status:** ✅ Internship Backend Completed

---

# 📊 Project Statistics

- **Architecture:** MVC (Model-View-Controller)
- **Modules:** 9
- **REST APIs:** 38+
- **HTTP Methods:** GET, POST, PUT, DELETE
- **Middleware:** Logger & Validation
- **Controllers:** 9
- **Model:** Centralized JSON Database
- **Testing Tool:** Postman

---

# 👨‍💻 Author

**Deepesh Singh**

BCA Student | Aspiring Full Stack Developer

**GitHub:** https://github.com/its-deepesh

### Currently Learning

- Node.js
- Express.js
- REST APIs
- MongoDB
- React.js
