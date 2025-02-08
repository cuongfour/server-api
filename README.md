# Crude Server with ExpressJS

## Requirements
- Node.js
- TypeScript
- PostgreSQL
- Postman (hoặc công cụ khác như Curl, Thunder Client)

## Setup
1. Clone the repository:
    ```bash
    git clone https://github.com/cuongfour/server-api.git
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Setup environment variables:
    - Tạo file `.env` trong thư mục gốc và thêm thông tin kết nối database:
      ```
      DATABASE_URL=postgresql://username:password@localhost:5432/crud_db
      ```
4. Start PostgreSQL database:
    ```bash
    brew services start postgresql@14
    ```
5. Migrate database
  ```SQL script
  CREATE DATABASE crud_db;

  \c crud_db;

  CREATE TABLE resources (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      description TEXT
  );

  -- Insert some sample data (optional)
  INSERT INTO resources (name, description) VALUES ('Sample Resource', 'This is a sample resource.');
  ```
6. Run the server:
    ```bash
    npx ts-node src/server.ts
    ```

## API Testing with Postman

### 1. Create a resource
- **Method:** `POST`
- **URL:** `http://localhost:3000/api/resources`
- **Headers:**
  - `Content-Type: application/json`
- **Body (raw JSON):**
  ```json
  {
    "name": "Test Resource",
    "description": "This is a test resource."
  }
  ```
- **Response:**
  ```json
  {
    "id": 1,
    "name": "Test Resource",
    "description": "This is a test resource."
  }
  ```

### 2. Get all resources
- **Method:** `GET`
- **URL:** `http://localhost:3000/api/resources`
- **Response:**
  ```json
  [
    {
      "id": 1,
      "name": "Test Resource",
      "description": "This is a test resource."
    }
  ]
  ```

### 3. Get resource details
- **Method:** `GET`
- **URL:** `http://localhost:3000/api/resources/1`
- **Response:**
  ```json
  {
    "id": 1,
    "name": "Test Resource",
    "description": "This is a test resource."
  }
  ```

### 4. Update a resource
- **Method:** `PUT`
- **URL:** `http://localhost:3000/api/resources/1`
- **Headers:**
  - `Content-Type: application/json`
- **Body (raw JSON):**
  ```json
  {
    "name": "Updated Resource",
    "description": "This resource has been updated."
  }
  ```
- **Response:**
  ```json
  {
    "id": 1,
    "name": "Updated Resource",
    "description": "This resource has been updated."
  }
  ```

### 5. Delete a resource
- **Method:** `DELETE`
- **URL:** `http://localhost:3000/api/resources/1`
- **Response:**
  ```json
  {
    "message": "Resource deleted successfully."
  }
  ```

## Notes
- Ensure PostgreSQL is running before starting the server.
- If you encounter connection issues, verify your `.env` file settings.
- Use Postman, Curl, or Thunder Client for API testing.

