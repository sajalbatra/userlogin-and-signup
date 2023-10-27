# User Authentication API

The User Authentication API is a Node.js-based authentication system that provides user registration, login, password reset, and other user-related functionality. It uses Express.js for routing, MongoDB for data storage, JWT for authentication, and bcrypt for password hashing.

## Prerequisites

Before using this API, make sure you have the following software installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory and install the dependencies:

   ```bash
   cd user-authentication-api
   npm install
   ```

3. Set up your MongoDB connection by editing the MONGO_URI variable in the server.js file.

4. Set the JWT secret key in the JWT_SECRET_KEY variable in the UserController.js file.

## Usage

Start the API server:

```bash
npm start
```

The API is now accessible at http://localhost:3000.

## API Endpoints

**Public Routes**

- `POST /register`: Register a new user.

  **Request Body:**

  - name (string): User's name.
  - email (string): User's email address.
  - password (string): User's password.
  - password_confirmation (string): Confirm password.
  - tc (boolean): Terms and conditions acceptance flag.

- `POST /login`: Log in an existing user.

  **Request Body:**

  - email (string): User's email address.
  - password (string): User's password.

- `POST /send-reset-password-email`: Send a password reset email.

  **Request Body:**

  - email (string): User's email address.

- `POST /reset-password/:id/:token`: Reset the user's password.

  **URL Parameters:**

  - id (string): User ID.
  - token (string): Token for password reset.

  **Request Body:**

  - password (string): New password.
  - password_confirmation (string): Confirm new password.

**Protected Routes**

Protected routes require authentication via JWT.

- `POST /changepassword`: Change the user's password.

  **Request Body:**

  - password (string): New password.
  - password_confirmation (string): Confirm new password.

- `GET /loggeduser`: Get details of the currently logged-in user.

## Authentication

JWT (JSON Web Tokens) are used for authentication. To access protected routes, provide the JWT token in the Authorization header of your requests.

Authorization: Bearer <your-token>

## Customization

Feel free to customize the code to suit your project's specific requirements. You can extend the functionality by adding features such as email confirmation, account verification, and enhanced error handling.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request.

## License

This project is open-source and available under the MIT License.

Replace <repository-url> with the actual URL of your GitHub repository.
