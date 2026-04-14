# 🎓 Student Record System (Full Stack + Docker + Kubernetes)

A complete full-stack application to manage student records, built using **HTML, CSS, JavaScript, Node.js, MySQL**, and deployed using **Docker & Kubernetes**.

---

## 🚀 Features

* ➕ Add student details (Name, Age, Course)
* 📄 View all students
* ❌ Delete student records
* 🌐 REST API integration
* 🐳 Dockerized frontend & backend
* ☸️ Kubernetes deployment ready

---
---

## 🗄️ Database Setup (MySQL)

Run the following SQL commands:

```sql
CREATE DATABASE studentdb;

USE studentdb;

CREATE TABLE students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  age INT,
  course VARCHAR(100)
);
```

---

## ⚙️ Backend Setup

```bash
cd backend
npm install
node server.js
```

Server runs on:

```
http://localhost:5000
```

---

## 🎨 Frontend Setup

Open:

```
frontend/index.html
```

---

## 🐳 Run with Docker

```bash
docker-compose up --build
```

Access:

* Frontend → http://localhost:3000
* Backend → http://localhost:5000

---

## ☸️ Kubernetes Deployment

Apply configs:

```bash
kubectl apply -f k8s/
```

Check services:

```bash
kubectl get svc
```

---

## ☁️ Deployment (AWS)

This project can be deployed using:

* AWS ECR (for container images)
* AWS EKS (for Kubernetes cluster)
* AWS RDS (for MySQL database)

---

## 🧠 Tech Stack

* Frontend: HTML, CSS, JavaScript
* Backend: Node.js
* Database: MySQL
* Containerization: Docker
* Orchestration: Kubernetes

---

## 📌 Future Improvements

* 🔐 Authentication (Login/Register)
* 📊 Dashboard UI
* ☁️ Full CI/CD pipeline (GitHub Actions / Jenkins)
* 🌍 Custom domain + HTTPS


