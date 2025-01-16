# Todo App

A simple and intuitive todo app for creating, managing, and tracking your daily tasks. This application demonstrates basic CRUD (Create, Read, Update, Delete) operations and can serve as a boilerplate for larger projects.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)

---

## Features

- **Add Tasks:** Create new tasks with ease.
- **View Tasks:** See all your tasks in a clean list.
- **Update Tasks:** Edit tasks to reflect new details.
- **Delete Tasks:** Remove tasks once they are no longer needed.
- **Responsive Design:** Works on both desktop and mobile devices.

---

## Tech Stack

- **Frontend:** [React](https://reactjs.org/)
- **Backend:** [Node.js](https://nodejs.org/en/) / [Express](https://expressjs.com/)
- **Database:** [MySQL](https://www.mysql.com/)

---

## Requirements

Make sure you have the following installed on your local machine before running the project:

1. [Node.js (LTS or later)](https://nodejs.org/en/)
2. [npm](https://www.npmjs.com/)
3. MySQL Workbench

---

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/darylescode/todo-app.git
   ```

2. **Navigate into the project directory**:
   ```bash
   cd todo-app
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Open MySQL Workbench and create schema then set it as default**

5. **Set up environment variables**:
   Create a file named `.env` in the project root. Add the necessary environment variables, for example:

   ```bash
   DATABASE = {DATABASE}
   DATABASE_HOST = {DATABASE_HOST}
   DATABASE_PORT = {DATABASE_PORT}
   USER = {USER}
   PASSWORD = {PASSWORD}
   DATABASE_URL = "mysql://{user}:{password}@{host}:{port}/{database}"
   ```

Replace `{DATABASE}`, `{DATABASE_HOST}`, `{USER}`, and `{PASSWORD}` with the correct values for your environment.

6. **Perform this command to create tables**
```bash
npm run migrate latest
```
---

## Usage

### Running the App in Development Mode for **Client** and **Server**

```bash
npm run dev
```

- Access the client app at http://localhost:5173.
- The server will run on http://localhost:3000.


---

## Project Structure

The project is divided into two main parts: the client and the server. Below is the detailed structure of the project:

```
/todo-app
├── /client                   # Contains the frontend code
│   ├── /public               # Static files for the frontend
│   ├── /src                  # Source files for the React application
│   │   ├── /assets           # Images, icons, and other assets
│   │   ├── /components       # Reusable React components
│   │   ├── /pages            # Different pages of the application
│   │   ├── /styles           # CSS and styling files
│   │   ├── App.js            # Main React component
│   │   ├── index.js          # Entry point for the React application
│   ├── package.json          # Contains frontend dependencies and scripts
├── /server                   # Contains the backend code
│   ├── /controllers          # Functions to handle requests and responses
│   ├── /models               # Database models
│   ├── /routes               # API routes
│   ├── /utils                # Utility functions
│   ├── server.js             # Entry point for the Node.js server
│   ├── package.json          # Contains backend dependencies and scripts
├── .env                      # Environment variables
├── .gitignore                # Specifies files to be ignored by Git
├── README.md                 # Project documentation
```
