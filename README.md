Team-007-Cloud-Computing
Cloud Computing Full Stack Project (Spring Boot + AWS Cloud Architecture)
📌 Overview

This project is a Full Stack Spring Boot Application deployed using modern AWS cloud services.

The application demonstrates:

Full Stack Web Development

Cloud Native Deployment

Containerization using Docker

CI/CD Integration

Production-grade AWS architecture

🏗️ Final Cloud Architecture
User
   ↓
Route 53 (Domain)
   ↓
CloudFront (CDN)
   ↓
S3 (Frontend Hosting)
   ↓
API Gateway
   ↓
ECS / EKS (Spring Boot Docker Container)
   ↓
RDS (MySQL Database)

Services Used:

Amazon S3

Amazon CloudFront

Amazon Route 53

Amazon API Gateway

Amazon ECS or Amazon EKS

Amazon RDS

Amazon Elastic Container Registry

🎯 Objectives

Understand Full Stack Web Development

Build REST APIs using Spring Boot

Containerize application using Docker

Deploy frontend using S3 + CloudFront

Deploy backend using ECS/EKS

Connect RDS database securely

Implement CI/CD using Jenkins

Understand modern cloud architecture

💻 Technologies Used
Backend

Java

Spring Boot

REST APIs

Maven

MySQL

Frontend

HTML

CSS

JavaScript

Cloud & DevOps

AWS Cloud

Docker

Jenkins

GitHub

📁 Updated Project Structure
Cloud-Computing-Project
│
├── backend/
│   ├── controller/
│   ├── service/
│   ├── repository/
│   ├── resources/
│   ├── Dockerfile
│   └── pom.xml
│
├── frontend/
│   ├── index.html
│   ├── css/
│   ├── js/
│   └── Dockerfile (optional)
│
└── docker-compose.yml
🐳 Docker Configuration
Backend Dockerfile
FROM openjdk:17
COPY target/*.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]

Build:

mvn clean package
docker build -t springboot-app .
☁️ Cloud Deployment Procedure (Updated)
🟢 PART 1 — Database Deployment (RDS)
Step 1: Create Database

Go to:
Amazon RDS → Create Database

Engine: MySQL
Instance: db.t3.micro
Public Access: NO
VPC: Default or Custom

Allow inbound access only from ECS security group.

Save:

Endpoint

DB username

Password

🟢 PART 2 — Backend Deployment (ECS + ECR)
Step 1: Push Docker Image to ECR

Create repository in:
Amazon Elastic Container Registry

Login & push:

aws ecr get-login-password --region ap-south-1 | docker login ...
docker tag springboot-app:latest <account-id>.dkr.ecr.../repo:latest
docker push <account-id>.dkr.ecr.../repo:latest
Step 2: Deploy Backend in ECS

Go to:
Amazon ECS → Create Cluster

Use:
Fargate (Serverless)

Create Task Definition:

Image: ECR image URI

Port: 8080

Environment Variables:

DB_HOST

DB_USER

DB_PASS

Create Service:
Attach Application Load Balancer.

🟢 PART 3 — API Gateway Setup

Go to:
Amazon API Gateway → Create REST API

Create Resource: /api

Create Method: ANY

Integration Type: HTTP

Endpoint: Load Balancer URL

Enable CORS.

Deploy API.

🟢 PART 4 — Frontend Deployment (S3 + CloudFront)
Step 1: Upload Frontend to S3

Create S3 bucket

Enable Static Website Hosting

Upload HTML, CSS, JS files

Step 2: Create CloudFront Distribution

Origin:
S3 bucket

Enable:

HTTPS only

Redirect HTTP → HTTPS

Step 3: Connect Domain using Route 53

Create Hosted Zone

Add A Record

Point to CloudFront Distribution

🔐 Security Configuration

RDS in private subnet

ECS in private subnet

Use IAM roles (not access keys)

Enable HTTPS

Restrict security groups

Store secrets in AWS Secrets Manager

🔄 CI/CD Using Jenkins
Step 1

Install Jenkins on EC2.

Step 2

Connect GitHub Repository.

Step 3

Add Build Steps:

mvn clean package
docker build -t app .
docker push <ECR-Repo>
Step 4

Trigger ECS redeployment.

🌐 Final Access URLs

Frontend:

https://yourdomain.com

Backend API:

https://api-id.execute-api.region.amazonaws.com/prod

Database:
Private RDS endpoint (internal only).

🎓 Learning Outcomes (Updated)

Through this project, we learned:

Cloud-native full stack development

Containerized deployment

AWS production architecture

Secure database configuration

API Gateway integration

CDN implementation

CI/CD pipeline automation

Scalable backend deployment

👨‍💻 Author
Tushar Thakur
Rahul Kumar
Rudra nayak
Samit

B.Tech Computer Science Engineering
Cloud Computing Project
