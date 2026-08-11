# Express API

A simple TypeScript Express API for working with pet data.

## Prerequisites

Before running the project, install the required Node.js dependencies:

```bash
npm install
```

If you are using a fresh clone, make sure Node.js is installed first.

## Install dependencies

```bash
npm install
```

## Run the app

```bash
npm run dev
```

This starts the Express server with TypeScript hot reloading.

## Test methods

### 1. Check the home route

Open in browser or Postman:

```text
http://localhost:8000/
```

Expected result: returns the list of pets.

### 2. Check a pet by ID

```text
http://localhost:8000/pets/1
```

Expected result: returns the pet with ID 1.

### 3. Check invalid ID validation middleware

```text
http://localhost:8000/pets/abc
```

Expected result: a 400 response with:

```json
{ "message": "Invalid pet ID🥲" }
```

### 4. Check filtered pets

```text
http://localhost:8000/pets?species=cat
```

Other examples:

```text
http://localhost:8000/pets?adopted=true
http://localhost:8000/pets?minAge=1&maxAge=5
```

### 5. Check not found route

```text
http://localhost:8000/unknown
```

Expected result: a 404 response with:

```json
{ "message": "Route not found" }
```

## Available scripts

```bash
npm run dev
npm run build
npm start
```

## Notes

- The app runs on port `8000`.
- The project uses TypeScript and Express.
- If dependencies are missing, run `npm install` before testing the app.
