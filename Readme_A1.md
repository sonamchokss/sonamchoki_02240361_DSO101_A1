**GitHub Repository Link:** https://github.com/sonamchokss/sonamchoki_02240361_DSO101_A1.git

# To-Do App – CI/CD Assignment 1
## Project Overview
This project is a simple **To-Do List Web Application** developed as part of the DSO101 assignment.

It demonstrates:
- Frontend development
- Backend API development
- Docker containerization
- Deployment using Render
- Continuous Integration & Deployment (CI/CD)

---

## Tech Stack
- **Frontend:** React.js  
- **Backend:** Node.js with Express.js  
- **Database:** In-memory (local) & PostgreSQL (Render for deployment)  
- **Containerization:** Docker  
- **Deployment:** Render  
- **Version Control:** GitHub  

---

## Features
- Add tasks  
- View tasks  
- Delete tasks  
- Modern and responsive UI  

---

## Project Structure
```
todo-app
│
├── backend
│ ├── server.js
│ ├── Dockerfile
│ └── .env
│
├── frontend
│ ├── src
│ ├── Dockerfile
│ └── .env
│
├── render.yaml
└── .gitignore
```

---

## Step-by-Step Implementation

### Step 1: Create To-Do Application
- Developed frontend using React
- Created backend API using Express
- Used environment variables for configuration

![alt text](screenshots/local-app.png)

---

### Step 2: Dockerization
- Created Dockerfile for backend and frontend
- Built Docker images using:
```
docker build -t sonamchokss/be-todo:02240361 .
docker build -t sonamchokss/fe-todo:02240361 .
```
---

### Step 3: Push to Docker Hub
- Logged into Docker Hub
- Pushed images:

Frontend:
![alt text](screenshots/docker-hub1.png)
Backend:
![alt text](screenshots/docker-hub2.png)

![alt text](screenshots/docker-hub.png)

---

### Step 4: Deployment on Render
- Deployed backend using Docker image
- Deployed frontend using Docker image
- Configured environment variables

Frontend URL: https://fe-todo-02240361.onrender.com
![alt text](screenshots/render1.png)
Backend URL: https://be-todo-02240361.onrender.com
![alt text](screenshots/render2.png)

![alt text](screenshots/render.png)

---

### Step 5: Testing
- Verified:
  - Task creation
  - Task deletion
  - API connectivity

![alt text](screenshots/live-app.png)

---

## Notes
- `.env` files are excluded using `.gitignore`
- Local development uses in-memory storage
- Deployment uses Render services

---

## Conclusion
This project successfully demonstrates the implementation of a CI/CD pipeline using Docker, GitHub, and Render. The application was built, containerized, and deployed successfully.

