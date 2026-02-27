# Team-007-Cloud-Computing
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
- AWS EC2
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

### Step 1: Launch EC2 Instance

1. Login to AWS Console
2. Go to EC2 Dashboard
3. Launch Instance
4. Choose Amazon Linux or Ubuntu
5. Select t2.micro
6. Create Key Pair
7. Allow Ports:

- 22 (SSH)
- 8080 (Application)
- 80 (HTTP)

---

### Step 2: Connect to EC2

```
ssh -i keypair.pem ec2-user@public-ip
```

---

### Step 3: Install Java

```
sudo yum update -y
sudo yum install java-17-amazon-corretto -y
```

Check Java:

```
java -version
```

---

### Step 4: Install Maven

```
sudo yum install maven -y
```

Check Maven:

```
mvn -version
```

---

### Step 5: Clone Project

```
git clone https://github.com/Rahul1062005/Cloud-Computing-Project.git
```

```
cd Cloud-Computing-Project
```

---

### Step 6: Build Project

```
mvn clean install
```

---

### Step 7: Run Application

```
java -jar target/*.jar
```

---

### Step 8: Access Application

Open Browser:

```
http://EC2-Public-IP:8080
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
http://EC2-Public-IP:8080
```

---

# Jenkins CI/CD Steps

### Step 1

Install Jenkins on EC2.

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
