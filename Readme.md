# Product Inventory Management API
### A Lightweight RESTful CRUD Backend Service

## Project Overview
This repository contains a fully functional, production-ready RESTful API designed to manage an e-commerce or retail product inventory. Built on the lightweight Node.js runtime environment using the Express.js framework, the system leverages robust HTTP methodology to handle inventory data.

## Extended Technical Description
The application serves as a backend microservice engineered for fast, in-memory data prototyping. It loads structural environment variables seamlessly using `dotenv` and implements automated body-parsing middleware to process inbound JSON data structures native to `express.json()`. 

To ensure stability during client interaction, the service incorporates rigorous server-side validation checks across its operational workflow. It explicitly validates data models upon resource creation or modification, handles missing records safely with standard HTTP error boundaries, and dynamically calculates primary key indexing using localized mathematical evaluations. This design forms an optimized foundation that can easily transition from localized volatile arrays to persistent enterprise relational (PostgreSQL) or non-relational (MongoDB) database systems.

## Core Development Team
- **Base Framework & Read/Delete Operations:** Core Infrastructure Setup
- **PUT Endpoint Engineering:** Paul
- **POST Dynamic Asset Creation:** MKO-Abiodun

## System Requirements & Getting Started

### 1. Install Node Dependencies
Clone this repository to your local machine, open your terminal inside the project root folder, and install the required modules:
```bash
npm install
```

### 2. Configure Environment Variables
Create a new file named `.env` in the root directory of your project to manage your configuration port safely:
```env
PORT=3000
```

### 3. Initialize the Local Server
Launch the live development environment dynamically with hot-reloading:
```bash
npm run dev
```

## API Endpoint Reference Routing Map

| HTTP Method | Route Endpoint | Functional Responsibility | Expected Status Codes |
| :--- | :--- | :--- | :--- |
| **GET** | `/products` | Fetches the complete real-time product inventory array | `200 OK` |
| **GET** | `/products/:id` | Targets and fetches a singular product entry by its ID | `200 OK` / `404 Not Found` |
| **POST** | `/products` | Validates data and inserts a brand new product into stock | `201 Created` / `400 Bad Request` |
| **PUT** | `/products/:id` | Replaces an existing data item completely with new values | `200 OK` / `404 Not Found` / `400 Bad Request` |
| **PATCH**| `/products/:id` | Performs targeted, partial updates on specific field values | `200 OK` / `404 Not Found` |
| **DELETE**| `/products/:id` | Permanently destroys and removes an item from inventory | `200 OK` / `404 Not Found` |

## Structural JSON Data Transfer Object (DTO) Example
When sending data payloads through client interfaces like Postman, Thunder Client, or cURL to the **POST** or **PUT** endpoints, format your request body as a valid JSON object matching this structure:

```json
{
  "name": "Mechanical Gaming Keyboard",
  "price": 18500,
  "quantity": 12
}
```

## Group 5 Team Members: (Subgroup B)
1. Chukwunonso Onyebuenyi        Group leader
2. Matthew Kehinde Oluborode 
3. Omolara Afolabi 
4. Ayoola Ridwan
5. Adunguli Christiano  
6. Emmanuel Chate
