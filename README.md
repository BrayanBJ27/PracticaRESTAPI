# Minimarket API

API for managing products in a minimarket. This API allows you to create, read, update, and delete products.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Prerequisites](#prerequisites)
- [Steps](#steps)
- [Usage](#usage)
- [Example Requests](#example-requests)


## Description

The Minimarket API provides endpoints to manage products in a minimarket. It supports operations such as creating, reading, updating, and deleting products.

## Installation

Follow these steps to set up and run the project locally.

### Prerequisites

- Node.js (v12 or higher)
- npm (v6 or higher)

### Steps

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/minimarket-api.git
    cd minimarket-api
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the server:
    ```sh
    node app.js
    ```

The server will start on `http://localhost:3000`.

## Usage

You can use tools like Postman or cURL to interact with the API.

### Example Requests

#### Get all products
```sh
curl -X GET http://localhost:3000/api/products
```

#### Get a product by ID
```sh
curl -X GET http://localhost:3000/api/products/1

```
#### Create a new product
```sh
curl -X POST http://localhost:3000/api/products -H "Content-Type: application/json" -d '{"name": "Product Name", "price": 100, "quantity": 10, "description": "Product Description"}'
```

#### Delete a product
```sh
curl -X DELETE http://localhost:3000/api/products/1
```

#### Update a product
```sh
curl -X PUT http://localhost:3000/api/products/1 -H "Content-Type: application/json" -d '{"name": "Updated Product Name", "price": 150, "quantity": 20, "description": "Updated Product Description"}'
```