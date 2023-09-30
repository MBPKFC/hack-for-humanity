# Server

## Description

RESTful API connected to a MongoDB Database

## Table of Contents

- [Usage](#usage)
- [Routes](#routes)
- [Models](#models)

## Usage

From the root directory run `npm run server` or from the server directory run `npm run watch`. Then open your api testing service of choice, for example [Insomnia](https://insomnia.rest/) or [Postman](https://www.postman.com/) and begin testing routes. For available routes see [Routes](#routes).

## Routes

### Get Routes

/api/users : Gets all users

/api/users/:id : Gets single user

### Post Routes

/api/users : Create user

### Put Routes

/api/users/:id : Update single user

## Models

### User Model

User:

- fullName: string
- email: string
- gender: string
- age: number
- zip: number
- insurance: object (based on insurance model)

### Insurance Model

Insurance:

- provider: string
- type: string
- hasPCP: boolean
- hasEmailed: boolean
