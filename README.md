Team-007-Cloud-Computing
# Cloud Computing Full Stack Project (Spring Boot)

## Overview

This project is a **Java Spring Boot Full Stack Application** developed as part of a **Cloud Computing academic project**. The application demonstrates how a modern web application can be developed and deployed using cloud technologies.

The project uses **Spring Boot** for backend development and REST APIs to handle client requests. The application is deployed on AWS cloud and containerized using Docker.

This project demonstrates practical implementation of:

- Full Stack Development
- Cloud Deployment
- Virtual Machines
- Containerization using Docker
- Continuous Integration using Jenkins

---

## Cloud Architecture

This project is deployed on AWS using a scalable cloud architecture.

### Frontend Deployment
- Amazon S3 (Static Website Hosting)
- CloudFront Distribution
- Route 53 Domain Management

### Backend Deployment
- API Gateway
- ECS/EKS Container Services
- Docker Containers
- RDS Database

---

## Objectives

- Understand Full Stack Web Development
- Learn Spring Boot Framework
- Implement REST APIs
- Learn AWS Cloud Deployment
- Learn Docker Containerization
- Understand CI/CD using Jenkins
- Gain practical Cloud Computing knowledge

---

## Technologies Used

### Backend
- Java
- Spring Boot
- REST API
- Maven

### Frontend
- HTML
- CSS
- JavaScript

### Cloud & DevOps
- AWS S3
- AWS CloudFront
- AWS Route 53
- AWS API Gateway
- AWS ECS/EKS
- AWS RDS
- Docker
- Jenkins
- Git
- GitHub

---

## Features

- Full Stack Web Application
- REST API Implementation
- Backend Development using Spring Boot
- Database Integration
- Cloud Deployment on AWS
- Docker Container Support
- CI/CD Pipeline using Jenkins
- Scalable Architecture

---

## Project Structure

```

JAVA\_spring\_boot\_Fullstack\_project

│

├── src/

├── controller/

├── service/

├── repository/

├── resources/

└── pom.xml

```

---

## How to Run the Project Locally

### Step 1: Clone Repository

```
git clone https://github.com/Rahul1062005/Cloud-Computing-Project.git
```

### Step 2: Open Project

Open the project in:

- IntelliJ IDEA
- Eclipse IDE

### Step 3: Run Application

Run the Spring Boot Application.

### Step 4: Open Browser

```
http://localhost:8080
```

---

# AWS Deployment Steps

## Frontend Deployment (S3 + CloudFront + Route53)

### Step 1: Create S3 Bucket

1. Login to AWS Console
2. Go to S3 Service
3. Create Bucket
4. Enable Static Website Hosting
5. Upload frontend files

---

### Step 2: Configure Bucket Permissions

Allow public access for static website hosting.

---

### Step 3: Create CloudFront Distribution

1. Go to CloudFront
2. Create Distribution
3. Select S3 bucket as origin
4. Enable caching
5. Deploy distribution

---

### Step 4: Configure Route53

1. Go to Route53
2. Create Hosted Zone
3. Add domain name
4. Create A record
5. Point domain to CloudFront Distribution

---

# Backend Deployment (ECS/EKS + API Gateway + RDS)

## Step 1: Create RDS Database

1. Go to RDS Service
2. Create Database
3. Select MySQL/PostgreSQL
4. Configure username and password
5. Allow access from ECS/EKS

---

## Step 2: Create Docker Image

Create Dockerfile:

```
FROM openjdk:17
COPY target/*.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
```

Build Image:

```
docker build -t springboot-app .
```

---

## Step 3: Push Image to ECR

```
aws ecr create-repository --repository-name springboot-app
```

Tag Image:

```
docker tag springboot-app repository-url
```

Push Image:

```
docker push repository-url
```

---

## Step 4: Deploy Backend to ECS/EKS

1. Go to ECS or EKS
2. Create Cluster
3. Create Task Definition
4. Select Docker Image
5. Configure Ports (8080)
6. Run Service

---

## Step 5: Configure API Gateway

1. Go to API Gateway
2. Create API
3. Add HTTP Methods
4. Connect API Gateway to ECS/EKS service
5. Deploy API

---

## Step 6: Access Backend

```
https://api-gateway-url
```

---

# Docker Deployment Steps

## Step 1: Install Docker

### Ubuntu

```
sudo apt update
sudo apt install docker.io -y
```

### Amazon Linux

```
sudo yum install docker -y
sudo service docker start
```

Enable Docker:

```
sudo systemctl enable docker
```

---

## Step 2: Create Dockerfile

Create a file named:

```
Dockerfile
```

Add:

```
FROM openjdk:17
COPY target/*.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
```

---

## Step 3: Build Docker Image

```
docker build -t springboot-app .
```

---

## Step 4: Run Docker Container

```
docker run -d -p 8080:8080 springboot-app
```

---

## Step 5: Open Application

```
http://localhost:8080
```

---

# Jenkins CI/CD Steps

### Step 1

Install Jenkins.

### Step 2

Create New Job.

### Step 3

Connect GitHub Repository.

### Step 4

Add Build Command:

```
mvn clean install
```

### Step 5

Build Project.

---

## Learning Outcomes

Through this project I learned:

- Full Stack Development
- Spring Boot Framework
- Cloud Computing Concepts
- AWS Deployment
- Docker Containerization
- Jenkins CI/CD Pipeline
- GitHub Version Control

---

## Author

Rahul Kumar  
B.Tech Computer Science Engineering  
Cloud Computing Project
