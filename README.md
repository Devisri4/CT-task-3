## CODTECH TASK-3 (DEVOPS)

## Goal:

Deploy a microservices-based application on a Kubernetes cluster.

*COMPANY* : CODTECH IT SOLUTIONS

*NAME* : MUDUDUDLA DEVI SRI

*INTERN ID* : CT04DA344

*DOMAIN* : DEVOPS

*DURATION* : 4 WEEKS

*MENTOR* :NEELA SANTOSH

## Task Overview:

# CT-task-3 🚀

This project demonstrates the deployment of a simple microservices-based web application using **Docker** and **Kubernetes**.

## 📁 Project Structure

CT-task-3/
├── backend/

│ ├── Dockerfile

│ └── server.js

├── frontend/

│ ├── Dockerfile

│ └── index.html

├── k8s/

│ ├── backend-deployment.yaml

│ └── frontend-deployment.yaml

├── .gitignore

└── README.md

## 🎨 Frontend

## index.html

A basic HTML file acting as the client interface.

## Dockerfile (Frontend)

FROM nginx:alpine
COPY index.html /usr/share/nginx/html

## Kubernetes Configurations (k8s/)

**backend-deployment.yaml** 
Defines the deployment and service for the backend

Exposes the backend using a NodePort service

**frontend-deployment.yaml**

Defines the deployment and service for the frontend

Exposes the frontend using a NodePort service

## 🚢 Docker Image Build Commands:

# Build Backend Image
docker build -t yourname/backend ./backend

# Build Frontend Image
docker build -t yourname/frontend ./frontend

##  Kubernetes Deployment Commands:

# Deploy Backend
kubectl apply -f k8s/backend-deployment.yaml

# Deploy Frontend
kubectl apply -f k8s/frontend-deployment.yaml

## 📦 Technologies Used
Node.js

Express.js

HTML/CSS

Docker

Kubernetes (YAML)

---

## ✅ Conclusion

This project demonstrates a simple yet effective microservices-based architecture using Docker and Kubernetes. It includes a basic frontend served via Nginx and a Node.js-based backend API. 

All deployment configurations using Kubernetes are provided in the `k8s/` folder, making it easy to set up and run in any Kubernetes-supported environment. No installation is needed for Docker or Kubernetes during evaluation — simply review the configuration files for structure and correctness.

Feel free to explore, suggest improvements, or extend this project. 🚀

---

> ✨ Made with 💻 by [Devi SRI]
