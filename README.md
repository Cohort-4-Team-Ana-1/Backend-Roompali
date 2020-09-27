<h1 align="center">
    <img alt="Roompali API" src="https://image.flaticon.com/icons/png/512/36/36601.png" width="100">
  <br>Roompali API <br>
</h1>
<p align="center"><p>
<div align="center">
    <img src="https://img.shields.io/badge/Node-14.4.0-darkgreen">
    <img src="https://img.shields.io/badge/Mongoose-5.9.24-darkred">
    <img src="https://img.shields.io/badge/Express.js-4.17.1-lightgrey">
    <img src="https://img.shields.io/badge/MongoDB-4.0-Green">
    <img src="https://img.shields.io/badge/Passport-0.4.1-black">
    <img src="https://img.shields.io/badge/Status-In progress-orange">
    <img src="https://img.shields.io/badge/NYC -80％-Green">
</div>

Roompali API is a support structure that aims to provide the routes, data and other means of connection to achieve the Roompali APP's functionality.

## Table of Contents
- [NYC Report](#nyc-report)
- [Steps to Collaborate](#steps-to-collaborate)
- [Ways to Use the API](#ways-to-use-the-api)
  - [Users](#users)
    - [GET Users](#get-users)
    - [GET One User](#get-one-user)
    - [POST User](#post-user)
    - [PATCH User](#patch-user)
    - [DELETE User](#delete-user)
    - [Sing-in User](#sign-in-user)
  - [Roles](#roles)
    - [GET Rol](#get-rol)
    - [GET One Rol](#get-one-rol)
    - [POST Rol](#post-rol)
    - [PATCH Rol](#patch-rol)
    - [DELETE Rol](#delete-rol)
  - [Rooms](#rooms)
    - [GET Rooms](#get-rooms)
    - [GET One Room](#get-one-room)
    - [GET Room By City](#get-room-by-city)
    - [POST Room](#post-room)
    - [PATCH Room](#patch-room)
    - [DELETE Room](#delete-room)
  - [Favorite-Rooms](#favorite-rooms)
    - [POST Add Favorite Room](#post-add-favorite-room)
    - [POST Remove Favorite Room](#post-remove-favorite-room)
  - [Images](#images)
    - [POST Image](#post-image)
    - [POST Multi Images](#post-multi-images)
- [More Information](#more-information)
- [Team Members](#team-members)
- [License](#license)

## NYC Report
Example
![](https://roompali-bucket-s3.s3.us-west-1.amazonaws.com/Report-example-1601214268881.png)

## Steps to Collaborate
1. Fork the project: by clicking the fork button (located at the top right corner)
2. Clone the project: `git clone https://github.com/<your username>/Backend-Roompali.git`
3. Install dependencies: `npm install` or use `npm i`
4. Create an .env file and use the .env.example file as a guide to fill in the environment variables.
5. Run the project: `npm run dev`
6. Do the necessary improvements and make a commit: `git commit -am "<commit message>"` or use `git add .` and then `git commit -m "<commit message>"`
7. Upload changes to the repository created with the fork: `git push origin <branch name>`
8. Create a merge request to the original project.

## Ways to Use the API

### Users

### GET Users
- URL: `http://localhost:3500/api/users`
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

### GET One User
- URL: `http://localhost:3500/api/users/<userId>`
- API Roompali: `https://backend-roompali.vercel.app/api/users/<userId>`
- Example: `https://backend-roompali.vercel.app/api/users/5f6ab22c32458f354459002c`
> Response
```
{
    "message": "User listed",
    "body": {
        "_id": "5f6ab22c32458f354459002c",
        "username": "Maria Rodriguez",
        "password": "$2b$10$LbAT2JNeti.HJhzkz9bGzuNmpY3sG0P1sLeqdPre.J27rlZ/lzGCC",
        "email": "maria-rodriguez@mail.com",
        "__v": 0
    }
}
```

### POST User
- URL: `http://localhost:3500/api/users`
- API Roompali: `https://backend-roompali.vercel.app/api/users`
> Request
```
{
    "username":"Juan Ramirez",
    "password":"12345*",
    "email":"juanr@gmail.com"
}
```
> Response
```
{
    "message": "User created",
    "body": {
        "_id": "5f6df5cab628f31a0ce367bb",
        "username": "Juan Ramirez",
        "password": "$2b$10$rW3/oGLChdHV3a22mvp36eVyB5VmmTFFS7l5I0ADlBMhKc3tszJbG",
        "email": "juanr@gmail.com",
        "__v": 0
    }
}
```
### PATCH User
- URL: `http://localhost:3500/api/users/<userId>`
- API Roompali: `https://backend-roompali.vercel.app/api/users/<userId>`
- Example: `https://backend-roompali.vercel.app/api/users/5f6ab22c32458f354459002c`
> Request
```
{
    "password": "password123*MR*"
}
```
> Response
```
{
    "message": "User updated",
    "body": {
        "_id": "5f6ab22c32458f354459002c",
        "username": "Maria Rodriguez",
        "password": "$2b$10$tRBMRwnaFKgIbolg2yytBOvs.fWWwLoqsT2wIs8LFtReiAKjJIY/K",
        "email": "maria-rodriguez@mail.com",
        "__v": 0
    }
}
```


### DELETE User
- URL: `http://localhost:3500/api/users/<userId>`
- API Roompali: `https://backend-roompali.vercel.app/api/users/<userId>`
- Example: `https://backend-roompali.vercel.app/api/users/5f6ab22c32458f354459002c`
> Response
```
{
    "message": "User 5f6ab22c32458f354459002c deleted"
}
```
### Sign-in User
- URL: `http://localhost:3500/api/users/sign-in`
- API Roompali: `https://backend-roompali.vercel.app/api/users/sign-in`
> Request
```
{
    "email":"juanr@gmail.com",
    "password":"12345*"
}
```
> Response
```
{
    "payload": {
        "_id": "5f6df5cab628f31a0ce367bb",
        "user": "Juan Ramirez",
        "email": "juanr@gmail.com"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjZkZjVjYWI2MjhmMzFhMGNlMzY3YmIiLCJ1c2VyIjoiSnVhbiBSYW1pcmV6IiwiZW1haWwiOiJqdWFuckBnbWFpbC5jb20iLCJpYXQiOjE2MDEwNDMzMDYsImV4cCI6MTYwMTA0NDIwNn0.faa3ZDLzvLRCsNfZ0ufslgkXXZWU-FxUrBmYPbS5iEw"
}
```

### Roles

### GET Roles
- URL: `http://localhost:3500/api/roles`
- API Roompali: `https://backend-roompali.vercel.app/api/roles`
> Response
```
{
    "message": "Roles listed",
    "total": 2,
    "body": [
        {
            "favorite_rooms": [],
            "owner": true,
            "_id": "5f6d3fc940e27409105383c0",
            "user_data": "5f6ab22c32458f354459002c",
            "first_name": "Pedro",
            "last_name": "Rodriguez",
            "contact_email": "pedror@companypr.com",
            "user_picture": "https://images.freeimages.com/images/large-previews/253/homeless-1437118.jpg",
            "whatsapp": "+573054678124",
            "__v": 0
        },
        {
            "favorite_rooms": [],
            "owner": false,
            "_id": "5f6dfe0f36dd7629181ff1d1",
            "user_data": "5f6ab22c32458f354459002c",
            "first_name": "Juan",
            "last_name": "Ramirez",
            "contact_email": "empresajramirez@juanr.com",
            "user_picture": "https://images.freeimages.com/images/large-previews/28f/man-with-laptop-1238347.jpg",
            "whatsapp": "+573117897456",
            "__v": 0
        }
    ]
}
```

### GET One Rol
- URL: `http://localhost:3500/api/roles/<rolId>`
- API Roompali: `https://backend-roompali.vercel.app/api/roles/<rolId>`
- Example: `https://backend-roompali.vercel.app/api/roles/5f6dfe0f36dd7629181ff1d1`
> Response
```
{
    "message": "Rol listed",
    "body": {
        "favorite_rooms": [],
        "owner": false,
        "_id": "5f6dfe0f36dd7629181ff1d1",
        "user_data": "5f6df5cab628f31a0ce367bb",
        "first_name": "Juan",
        "last_name": "Ramirez",
        "contact_email": "empresajramirez@juanr.com",
        "user_picture": "https://images.freeimages.com/images/large-previews/28f/man-with-laptop-1238347.jpg",
        "whatsapp": "+573117897456",
        "__v": 0
    }
}
```

### POST Rol
- URL: `http://localhost:3500/api/roles/<rolId>`
- API Roompali: `https://backend-roompali.vercel.app/api/roles/<rolId>`
> Request
```
{
    "user_data" : "5f6df5cab628f31a0ce367bb",
    "first_name": "Juan",
    "last_name": "Ramirez",
    "contact_email": "empresajramirez@juanr.com",
    "user_picture": "https://images.freeimages.com/images/large-previews/28f/man-with-laptop-1238347.jpg",
    "owner": false,
    "whatsapp": "3117897456"   
}
```
> Response
```
{
    "message": "Rol created",
    "body": {
        "favorite_rooms": [],
        "owner": false,
        "_id": "5f6e00dc8a4b5b136c0cb776",
        "user_data": "5f6df5cab628f31a0ce367bb",
        "first_name": "Juan",
        "last_name": "Ramirez",
        "contact_email": "empresajramirez@juanr.com",
        "user_picture": "https://images.freeimages.com/images/large-previews/28f/man-with-laptop-1238347.jpg",
        "whatsapp": "+573117897456",
        "__v": 0
    }
}

```
### PATCH Rol
- URL: `http://localhost:3500/api/roles/<rolId>`
- API Roompali: `https://backend-roompali.vercel.app/api/roles/<roldId>`
- Example: `https://backend-roompali.vercel.app/api/roles/5f6e00dc8a4b5b136c0cb776`
> Request
```
{
    "contact_email": "ramirezsociety@gmail.com"
}
```
> Response
```
{
    "message": "Rol updated",
    "body": {
        "favorite_rooms": [],
        "owner": false,
        "_id": "5f6e00dc8a4b5b136c0cb776",
        "user_data": "5f6df5cab628f31a0ce367bb",
        "first_name": "Juan",
        "last_name": "Ramirez",
        "contact_email": "ramirezsociety@gmail.com",
        "user_picture": "https://images.freeimages.com/images/large-previews/28f/man-with-laptop-1238347.jpg",
        "whatsapp": "+573117897456",
        "__v": 0
    }
}
```
### DELETE Rol
- URL: `http://localhost:3500/api/roles/<rolId>`
- API Roompali: `https://backend-roompali.vercel.app/api/roles/<rolId>`
- Example: `https://backend-roompali.vercel.app/api/roles/5f6dfe0f36dd7629181ff1d1`
> Response
```
{
    "message": "Rol 5f6dfe0f36dd7629181ff1d1 was deleted"
}
```
### Rooms

### GET Rooms
- URL: `http://localhost:3500/api/rooms`
- API Roompali: `https://backend-roompali.vercel.app/api/rooms`
> Response
```
{
    "message": "Rooms listed",
    "total": 1,
    "body": [
        {
            "secondary_image": [
                "https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                "https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            ],
            "furniture": [
                "cama",
                "mesa"
            ],
            "available": true,
            "wifi": true,
            "private_bathroom": false,
            "cleaning": false,
            "closet": true,
            "_id": "5f6e14e1a5f7b53e3c305685",
            "room_name": "El departamento de Juan",
            "main_image": "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "city": "medellin",
            "address": "Cra. 43 #65-9, Medellín, Antioquia",
            "square_meters": 30,
            "price": 300000,
            "room_description": "Alquilo habitación con baño compartido, la habitación cuenta con armario, buena iluminación y ventilación",
            "owner": {
                "favorite_rooms": [],
                "owner": false,
                "_id": "5f6e00dc8a4b5b136c0cb776",
                "user_data": "5f6df5cab628f31a0ce367bb",
                "first_name": "Juan",
                "last_name": "Ramirez",
                "contact_email": "ramirezsociety@gmail.com",
                "user_picture": "https://images.freeimages.com/images/large-previews/28f/man-with-laptop-1238347.jpg",
                "whatsapp": "+573117897456",
                "__v": 0
            },
            "__v": 0
        }
    ]
}
```

### GET One Room
- URL: `http://localhost:3500/api/rooms/<roomId>`
- API Roompali: `https://backend-roompali.vercel.app/api/rooms/<roomId>`
- Example: `https://backend-roompali.vercel.app/api/rooms/5f6e14e1a5f7b53e3c305685`
> Response
```
{
    "message": "Room listed",
    "body": {
        "secondary_image": [
            "https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        ],
        "furniture": [
            "cama",
            "mesa"
        ],
        "available": true,
        "wifi": true,
        "private_bathroom": false,
        "cleaning": false,
        "closet": true,
        "_id": "5f6e14e1a5f7b53e3c305685",
        "room_name": "El departamento de Juan",
        "main_image": "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "city": "medellin",
        "address": "Cra. 43 #65-9, Medellín, Antioquia",
        "square_meters": 30,
        "price": 300000,
        "room_description": "Alquilo habitación con baño compartido, la habitación cuenta con armario, buena iluminación y ventilación",
        "owner": {
            "favorite_rooms": [],
            "owner": false,
            "_id": "5f6e00dc8a4b5b136c0cb776",
            "user_data": "5f6df5cab628f31a0ce367bb",
            "first_name": "Juan",
            "last_name": "Ramirez",
            "contact_email": "ramirezsociety@gmail.com",
            "user_picture": "https://images.freeimages.com/images/large-previews/28f/man-with-laptop-1238347.jpg",
            "whatsapp": "+573117897456",
            "__v": 0
        },
        "__v": 0
    }
}
```

### GET Room By City
- URL: `http://localhost:3500/api/rooms-search?city=<cityName>`
- API Roompali: `https://backend-roompali.vercel.app/api/rooms-search?city=<cityName>`
- Example: `https://backend-roompali.vercel.app/api/rooms-search?city=Medell%C3%ADn`
> Response
```
{
    "message": "Rooms finded",
    "total": 1,
    "body": [
        {
            "secondary_image": [
                "https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                "https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            ],
            "furniture": [
                "cama",
                "mesa"
            ],
            "available": true,
            "wifi": true,
            "private_bathroom": false,
            "cleaning": false,
            "closet": true,
            "_id": "5f6e14e1a5f7b53e3c305685",
            "room_name": "El departamento de Juan",
            "main_image": "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "city": "medellin",
            "address": "Cra. 43 #65-9, Medellín, Antioquia",
            "square_meters": 30,
            "price": 300000,
            "room_description": "Alquilo habitación con baño compartido, la habitación cuenta con armario, buena iluminación y ventilación",
            "owner": {
                "favorite_rooms": [],
                "owner": false,
                "_id": "5f6e00dc8a4b5b136c0cb776",
                "user_data": "5f6df5cab628f31a0ce367bb",
                "first_name": "Juan",
                "last_name": "Ramirez",
                "contact_email": "ramirezsociety@gmail.com",
                "user_picture": "https://images.freeimages.com/images/large-previews/28f/man-with-laptop-1238347.jpg",
                "whatsapp": "+573117897456",
                "__v": 0
            },
            "__v": 0
        }
    ]
}
```

### POST Room
- URL: `http://localhost:3500/api/rooms`
- API Roompali: `https://backend-roompali.vercel.app/api/rooms`
> Request
```
{
    "room_name": "El departamento de Juan",
    "main_image": "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "secondary_image": [
        "https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    ],
    "city": "Medellín",
    "address": "Cra. 43 #65-9, Medellín, Antioquia",
    "square_meters": 30,
    "furniture": [
        "cama",
        "mesa"
    ],
    "price": 300000,
    "available": true,
    "wifi": true ,
    "private_bathroom": false,
    "cleaning": false,
    "closet": true,
    "room_description": "Alquilo habitación con baño compartido, la habitación cuenta con armario, buena iluminación y ventilación",
    "owner": "5f6e00dc8a4b5b136c0cb776"
}
```
> Response
```
{
    "message": "Room created",
    "body": {
        "secondary_image": [
            "https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        ],
        "furniture": [
            "cama",
            "mesa"
        ],
        "available": true,
        "wifi": true,
        "private_bathroom": false,
        "cleaning": false,
        "closet": true,
        "_id": "5f6e14e1a5f7b53e3c305685",
        "room_name": "El departamento de Juan",
        "main_image": "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "city": "medellin",
        "address": "Cra. 43 #65-9, Medellín, Antioquia",
        "square_meters": 30,
        "price": 300000,
        "room_description": "Alquilo habitación con baño compartido, la habitación cuenta con armario, buena iluminación y ventilación",
        "owner": "5f6e00dc8a4b5b136c0cb776",
        "__v": 0
    }
}
```

### PATCH Room
- URL: `http://localhost:3500/api/rooms/<roomId>`
- API Roompali: `https://backend-roompali.vercel.app/api/rooms/<roomId>`
- Example: `https://backend-roompali.vercel.app/api/rooms/5f6e14e1a5f7b53e3c305685`
> Request
```
{
    "available": false,
    "price": 270000
}
```
> Response
```
{
    "message": "Room 5f6e14e1a5f7b53e3c305685 updated",
    "body": {
        "secondary_image": [
            "https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        ],
        "furniture": [
            "cama",
            "mesa"
        ],
        "available": false,
        "wifi": true,
        "private_bathroom": false,
        "cleaning": false,
        "closet": true,
        "_id": "5f6e14e1a5f7b53e3c305685",
        "room_name": "El departamento de Juan",
        "main_image": "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "city": "medellin",
        "address": "Cra. 43 #65-9, Medellín, Antioquia",
        "square_meters": 30,
        "price": 270000,
        "room_description": "Alquilo habitación con baño compartido, la habitación cuenta con armario, buena iluminación y ventilación",
        "owner": "5f6e00dc8a4b5b136c0cb776",
        "__v": 0
    }
}
```

### Delete Room
- URL: `http://localhost:3500/api/rooms/<roomId>`
- API Roompali: `https://backend-roompali.vercel.app/api/rooms/<roomId>`
- Example: `https://backend-roompali.vercel.app/api/rooms/5f6e14e1a5f7b53e3c305685`
> Response
```
{
    "message": "Room 5f6e14e1a5f7b53e3c305685 deleted"
}
```
### Favorite-Rooms

### POST Add Favorite Room
- URL: `http://localhost:3500/api/favorite-rooms/add`
- API Roompali: `https://backend-roompali.vercel.app/api/favorite-rooms/add`
> Request
```
{
    "rolId": "5f6d3fc940e27409105383c0",
    "roomId": "5f6e18a640fc1a286c84456c"
}
```
> Response
```
{
    "message": "New room added to favorites_rooms section",
    "body": {
        "favorite_rooms": [
            "5f6e18a640fc1a286c84456c"
        ],
        "owner": true,
        "_id": "5f6d3fc940e27409105383c0",
        "user_data": "5f6ab22c32458f354459002c",
        "first_name": "Pedro",
        "last_name": "Rodriguez",
        "contact_email": "pedror@companypr.com",
        "user_picture": "https://images.freeimages.com/images/large-previews/253/homeless-1437118.jpg",
        "whatsapp": "+573054678124",
        "__v": 0
    }
}
```

### POST Remove Favorite Room
- URL: `http://localhost:3500/api/favorite-rooms/remove`
- API Roompali: `https://backend-roompali.vercel.app/api/favorite-rooms/remove`
> Request
```
{
    "rolId": "5f6d3fc940e27409105383c0",
    "roomId": "5f6e18a640fc1a286c84456c"
}
```
> Response
```
{
    "message": "Favorite room 5f6d3fc940e27409105383c0 removed",
    "body": {
        "favorite_rooms": [],
        "owner": true,
        "_id": "5f6d3fc940e27409105383c0",
        "user_data": "5f6ab22c32458f354459002c",
        "first_name": "Pedro",
        "last_name": "Rodriguez",
        "contact_email": "pedror@companypr.com",
        "user_picture": "https://images.freeimages.com/images/large-previews/253/homeless-1437118.jpg",
        "whatsapp": "+573054678124",
        "__v": 0
    }
}
```

### Images

### POST Image
- URL: `http://localhost:3500/api/images`
- API Roompali: `https://backend-roompali.vercel.app/api/images`
- Formats: `.png` and `.jpeg`
> Request
```
Key: 'image'
Value: 'test-image.png'
```
> Response
```
{
    "message": "Image created",
    "image_url": "https://roompali-bucket-s3.s3.us-west-1.amazonaws.com/test-image-1601051847856.png"
}
```

### POST Multi Images
- URL: `http://localhost:3500/api/images/multi`
- API Roompali: `https://backend-roompali.vercel.app/api/images/multi`
- Formats: `.png` and `.jpeg`
> Request
```
Key: 'image'
Value: 'test-image.png'
Key: 'image'
Value: 'test-image.png'
```
> Response
```
{
    "message": "Images created",
    "images_urls": [
        "https://roompali-bucket-s3.s3.us-west-1.amazonaws.com/test-image-1601051934001.png",
        "https://roompali-bucket-s3.s3.us-west-1.amazonaws.com/test-image-1601051934005.png"
    ]
}
```

## More Information
|Name                        |Link|
|:---------------------------|:----------------------------------------------------------------------------|
|Doumentation                |https://www.notion.so/Roompali-Documentation-e3e63a0f62b4469db1b509a355c7a483|
|Frontend Repository         |https://github.com/Cohort-4-Team-Ana-1/Frontend-Roompali                     |
|API Backend                 |https://backend-roompali.vercel.app                                          |
|APP Frontend                |APP Frontend                                                                 |

## Team Members
- [Johan Suarez (JohanSuarezQ)](https://github.com/JohanSuarezQ)
- [Adrián Gutierrez (AdrianGutiR)](https://github.com/AdrianGutiR)
- [Ricardo Aragón (Demianzx)](https://github.com/Demianzx)
- [Moisés Luna (moilu)](https://github.com/moilu)
- [Samuel Gonzalez (xame2005)](https://github.com/xame2005)
- [Francisco Suarez (Ulzahk)](https://github.com/Ulzahk)

## License
MIT License 


