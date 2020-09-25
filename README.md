<h1 align="center">
    <img alt="Roompali API" src="https://" width="100">
  <br>Roompali API <br>
</h1>
<p align="center"><p>
<img src="https://img.shields.io/badge/Node-14.4.0-darkgreen">
<img src="https://img.shields.io/badge/Mongoose-5.9.24-darkred">
<img src="https://img.shields.io/badge/Express.js-4.17.1-lightgrey">
<img src="https://img.shields.io/badge/MongoDB-4.0-Green">
<img src="https://img.shields.io/badge/Passport-0.4.1-black">
<img src="https://img.shields.io/badge/Status-In progress-orange">
<img src="https://img.shields.io/badge/Coverage-yellow">

Roompali API

## Table of Contents
- [Features](#features)
- [Links of Interest](#links-of-interest)
- [Steps to Collaborate](#steps-to-collaborate)
- [Ways to Use the API](#ways-to-use-the-api)
  - [Users](#users)
    - [Get Users](#get-users)
  - [Roles](#roles)
  - [Rooms](#rooms)
  - [Favorite-Rooms](#favorite-rooms)
  - [Images](#images)
- [Team Members](#team-members)
- [License](#license)

## Features

## Links of Interest
|Name                        |Link|
|:---------------------------|:------------|
|Doumentation                |Notion|
|Frontend Repository         |              |
|API Backend                 |https://backend-roompali.vercel.app |
|APP Frontend                |              |

## Steps to Collaborate
1. Fork the project: by clicking the fork button (located at the top right corner)
2. Clone the project: `git clone https://github.com/<your username>/Backend-Roompali.git`
3. Install dependencies: `npm install` or use `npm i`
4. Create an .env file and use the .env.example file as a guide to fill in the environment variables.
5. Run the project: `npm run dev`
6. Do the necessary improvements and make a commit: `git commit -am "<commit message>"` or use `git add .` and then `git commit -m "<commit message>"`
7. Upload changes to the repository created with the fork: `git push origin <rama que se uso>`
8. Create a merge request to the original project.

## Ways to Use the API

### Users

### Get Users
- URL: `http://localhost:3500/api/user`
- API Roompali: `https://backend-roompali.vercel.app/api/users`
> Response
```
{
    "message": "Users listed",
    "total": 2,
    "body": [
        {
        "_id": "5f6ab22c32458f354459002c",
        "username": "Maria Rodriguez",
        "password": "$2b$10$LbAT2JNeti.HJhzkz9bGzuNmpY3sG0P1sLeqdPre.J27rlZ/lzGCC",
        "email": "maria-rodriguez@mail.com",
        "__v": 0
        },
        {
        "_id": "5f6ab4987a9b843cd81c1a5c",
        "username": "Pedro Martinez",
        "password": "$2b$10$BJHAKP6QhMP5IdVzIq5eJ.UZjjxwHGvCZs29L5F9DFFe0wVH4Ml96",
        "email": "pedrom@mail.com",
        "__v": 0
        }
    ]
}
```

### Roles

### Rooms

### Favorite-Rooms

### Images

## Team Members

## License


