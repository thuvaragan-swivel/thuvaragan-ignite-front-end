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

## Configuring Backend

Create a .env file in the root of your project directory and add the following:
```env
NEXT_PUBLIC_API_BASE_URL = http://localhost:{SERVER_PORT}/api/employee
```
**NOTE**: Replace the SERVER_PORT with the port value you used in your backend.

## Usage

To run the project in development mode, use the following command in your terminal:

```bash
npm run dev
```

This will start the development server.  
Since this is a Next.js App, it runs on port 3000 by default.  
You can access the application locally at http://localhost:3000 or http://localhost:3000/employee/list.  

**NOTE**: Make sure your backend local host server is running while executing this frontend server, to fetch the data.

## Technologies Used

1. **Next.js**: React framework for production
2. **React.js**: JavaScript library for building user interfaces
3. **JavaScript**: Programming language
4. **HTML**: Markup language
5. **CSS**: Style sheet language
6. **Jest**: Testing framework

## Features

* **Add New Employee**: Allows adding a new employee.
* **Update Employee**: Enables updating existing employee details.
* **Delete Employee**: Provides an option to delete an employee with confirmation.
* **Sort and Search Employees**:  
    - Sort by first name and creation date (both ascending and descending orders).  
    - Search by first name, last name, and email.
* **Table and Grid Views**: Toggle between table and grid views on the home screen.
* **Pagination**: Navigate through multiple pages of employee listings.
* **Form Validations**: Ensures input validations on add and edit employee pages.

## API Integration

The frontend communicates with the backend APIs to perform CRUD operations and retrieve data. It sends HTTP requests to the backend and processes the responses to update the UI accordingly. This integration allows for seamless interaction between the frontend and backend, ensuring data consistency and real-time updates.

## Running Tests

To run the tests, execute the following command in your terminal:

```bash
npm test
```

This command will run all the test cases defined in the project.