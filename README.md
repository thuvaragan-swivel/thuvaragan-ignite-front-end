# Thuvaragan Sabesan - Ignite Assessment (Back-end) - Swivel

# Employee Management System

## Project Description

This frontend project is developed using **Next.js** with **JavaScript** and **React**. It integrates seamlessly with the backend, which leverages **Express.js** for the server-side framework and **Node.js** for the runtime environment. The backend uses **MongoDB** as the database and **Mongoose** as the ODM (Object Data Modeling) library. This app is designed for managing employees, providing a user-friendly interface for CRUD operations and more.

## Installation

To get started with this project, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone <repository-url>
    ```

2. **Navigate to the project directory**:
    ```bash
    cd <repository-directory>
    ```

3. **Install the required dependencies**:
    ```bash
    npm install
    ```

## Usage

To run the project in development mode, use the following command in your terminal:

```bash
npm run dev
```

This will start the development server.  
You can access the application locally at http://localhost:3000 or http://localhost:3000/employee/list.

## Technologies Used

1. **Next.js**: React framework for production
2. **React.js**: JavaScript library for building user interfaces
3. **JavaScript**: Programming language
4. **HTML**: Markup language
5. **CSS**: Style sheet language

## Features

* **Add New Employee**: Allows adding a new employee with validation.
* **Update Employee**: Enables updating existing employee details.
* **Delete Employee**: Provides an option to delete an employee with confirmation.
* **Sort and Search Employees**:
    *Sort by first name and creation date (both ascending and descending orders).
    *Search by first name, last name, and email.
* **Table and Grid Views**: Toggle between table and grid views on the home screen.
* **Pagination**: Navigate through multiple pages of employee listings.
* **Form Validations**: Ensures input validations on add and edit employee pages.

## API Integration

The frontend communicates with the backend APIs to perform CRUD operations and retrieve data. It sends HTTP requests to the backend and processes the responses to update the UI accordingly. This integration allows for seamless interaction between the frontend and backend, ensuring data consistency and real-time updates.