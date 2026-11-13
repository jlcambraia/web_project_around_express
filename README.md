# Around the U.S. — Backend API

A REST API developed with **Node.js, Express, MongoDB, and Mongoose** to manage user profiles and photo cards.

Built as part of the **TripleTen Full Stack Web Development program**, this project demonstrates backend routing, database integration, CRUD operations, and REST API development.

## Overview

Around the U.S. is a photo-sharing application where users can manage profiles and interact with photo cards. This repository contains the backend API responsible for handling user and card data.

## Features

### User Management
- Retrieve all users
- Retrieve a user by ID
- Create user records
- Update profile information
- Update profile avatars

### Photo Cards
- Retrieve all photo cards
- Create new cards
- Delete cards by ID
- Like photo cards
- Remove likes from photo cards

### Backend Development
- RESTful API endpoints
- MongoDB integration with Mongoose
- Express middleware and JSON request handling
- Modular route organization
- Error responses

## Tech Stack

Node.js · Express 4 · MongoDB · Mongoose 8 · JavaScript · Nodemon · ESLint

## API Endpoints

### Users

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/users` | Retrieve all users |
| GET | `/users/:userId` | Retrieve a user by ID |
| POST | `/users` | Create a user |
| PATCH | `/users/me` | Update profile information |
| PATCH | `/users/me/avatar` | Update profile avatar |

### Cards

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/cards` | Retrieve all cards |
| POST | `/cards` | Create a card |
| DELETE | `/cards/:cardId` | Delete a card |
| PUT | `/cards/:cardId/likes` | Like a card |
| DELETE | `/cards/:cardId/likes` | Remove a like |

## Application Architecture

```text
HTTP Client
     |
Express Application
     |
Route Handlers
     |
Controllers
     |
Mongoose Models
     |
MongoDB
```

## Getting Started

Requires Node.js, npm, and MongoDB running locally.

```bash
git clone https://github.com/jlcambraia/web_project_around_express.git
cd web_project_around_express
npm install
```

The current application connects to a local MongoDB database:

```text
mongodb://127.0.0.1:27017/aroundb
```

Start MongoDB before running the API.

Development:

```bash
npm run dev
```

Standard start:

```bash
npm start
```

By default, the server listens at http://localhost:3000. Set the `PORT` environment variable to use another port.

## Authentication Status

**Important:** This version uses temporary authorization middleware that assigns a predefined user ID to incoming requests. This is a development placeholder, not a complete authentication system.

The project should not be presented as implementing production-ready user authentication.

A separate iteration of Around the U.S. explores authentication and protected frontend routes.

## Error Handling

The application includes responses for unknown routes and server errors. More comprehensive validation and centralized error handling remain areas for improvement.

## Project Scope

This project focuses on backend fundamentals and database-driven application development, demonstrating the progression from frontend-only applications to server-side architecture with persistent data.

## Potential Improvements

- Replace temporary authorization with JWT authentication
- Expand request validation
- Improve centralized error handling
- Add automated API tests
- Document request and response schemas
- Configure MongoDB through environment variables
- Add deployment and monitoring documentation

## Author

**João Luiz Cambraia**

[GitHub](https://github.com/jlcambraia) · [LinkedIn](https://www.linkedin.com/in/joaoluizcambraia/)
