<h1 align="center">
    <img alt="Roompali API" src="https://roompali-bucket-s3.s3-us-west-1.amazonaws.com/roompali-icon.png" width="100">
  <br>Roompali API <br>
</h1>
<p align="center"><p>
<div align="center">
    <img src="https://img.shields.io/badge/Node-14.4.0-darkgreen">
    <img src="https://img.shields.io/badge/Mongoose-5.9.24-darkred">
    <img src="https://img.shields.io/badge/Express.js-4.17.1-lightgrey">
    <img src="https://img.shields.io/badge/MongoDB-4.0-Green">
    <img src="https://img.shields.io/badge/Passport-0.4.1-black">
    <img src="https://img.shields.io/badge/NYC -70％-yellow">
</div>

<p align="center">Roompali API is a support structure that aims to provide the routes, data and other means of connection to achieve the Roompali APP's functionality.</p>

---

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
    - [GET Rooms Quantity](#get-rooms-quantity)
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

![Image](https://roompali-bucket-s3.s3-us-west-1.amazonaws.com/report-nyc.png)

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
        "favorite_rooms": [],
        "username": "Maria Rodriguez",
        "password": "$2b$10$LbAT2JNeti.HJhzkz9bGzuNmpY3sG0P1sLeqdPre.J27rlZ/lzGCC",
        "email": "maria-rodriguez@mail.com",
        "__v": 0
        },
        {
        "_id": "5f6ab4987a9b843cd81c1a5c",
        "favorite_rooms": [],
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
        "favorite_rooms": [
            {
                "secondary_images": [
                    "https://roompali-bucket-s3.s3-us-west-1.amazonaws.com/1-detalles-1601306251232.jpg",
                    "https://roompali-bucket-s3.s3-us-west-1.amazonaws.com/1-detalles-2-1601306251253.jpg"
                ],
                "available": true,
                "bed": true,
                "desk": true,
                "closet": true,
                "couch": false,
                "chair": true,
                "kitchen": true,
                "visits": true,
                "wifi": true,
                "parking": false,
                "washing_machine": false,
                "television": false,
                "heating": false,
                "private_bathroom": false,
                "gymnasium": false,
                "air_conditioner": false,
                "_id": "5f7200f824471e4eacf20656",
                "room_name": "Habitación Estilo Utüane",
                "main_image": "https://roompali-bucket-s3.s3-us-west-1.amazonaws.com/1-habitaci%C3%B3n-estilo-1601306251203.jpg",
                "city": "leticia",
                "address": "Calle 14 C 2A 11/19 Barrio La Sarita, Leticia 910008 Colombia",
                "square_meters": 20,
                "room_description": "La infraestructura está inspirada en la naturaleza y en las malocas propias del lugar, con estilo rústico sin olvidar la comodidad.",
                "owner": {
                    "owner": true,
                    "_id": "5f72006e24471e4eacf20655",
                    "favorite_rooms": [],
                    "user_data": "5f72003b24471e4eacf20654",
                    "first_name": "Martin",
                    "last_name": "Gomez",
                    "contact_email": "mtgomez-society@gmail.com",
                    "user_picture": "https://roompali-bucket-s3.s3-us-west-1.amazonaws.com/1-martin-gomez-1601306251195.jpg",
                    "whatsapp": "+573154286759",
                    "__v": 0
                },
                "price": 800000,
                "__v": 0
            }
        ],
        "_id": "5f6ab4987a9b843cd81c1a5c",
        "username": "Maria Rodriguez",
        "password": "$2b$10$BJHAKP6QhMP5IdVzIq5eJ.UZjjxwHGvCZs29L5F9DFFe0wVH4Ml96",
        "email": "rodriguez@mail.com",
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
    "favorite_rooms": [],
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
        "favorite_rooms": [],
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
        "favorite_rooms": [],
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
            "secondary_images": [
                "https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                "https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            ],
            "available": false,
            "bed": false,
            "desk": false,
            "closet": false,
            "couch": false,
            "chair": false,
            "kitchen": false,
            "visits": false,
            "wifi": false,
            "parking": false,
            "washing_machine": false,
            "television": false,
            "heating": false,
            "private_bathroom": false,
            "gymnasium": false,
            "air_conditioner": false,
            "_id": "5f7130863a4e422cf052152a",
            "room_name": "El departamento de Juan",
            "main_image": "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "city": "medellin",
            "address": "Cra. 43 #65-9, Medellín, Antioquia",
            "square_meters": 30,
            "room_description": "Alquilo habitación con baño compartido, la habitación cuenta con armario, buena iluminación y ventilación",
            "owner": {
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
            "price": 270000,
            "__v": 0
        }
    ]
}
```

### GET One Room

- URL: `http://localhost:3500/api/rooms/<roomId>`
- API Roompali: `https://backend-roompali.vercel.app/api/rooms/<roomId>`
- Example: `https://backend-roompali.vercel.app/api/rooms/5f7130863a4e422cf052152a`
  > Response

```
{
    "message": "Room listed",
    "body": {
        "secondary_images": [
            "https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        ],
        "available": false,
        "bed": false,
        "desk": false,
        "closet": false,
        "couch": false,
        "chair": false,
        "kitchen": false,
        "visits": false,
        "wifi": false,
        "parking": false,
        "washing_machine": false,
        "television": false,
        "heating": false,
        "private_bathroom": false,
        "gymnasium": false,
        "air_conditioner": false,
        "_id": "5f7130863a4e422cf052152a",
        "room_name": "El departamento de Juan",
        "main_image": "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "city": "medellin",
        "address": "Cra. 43 #65-9, Medellín, Antioquia",
        "square_meters": 30,
        "room_description": "Alquilo habitación con baño compartido, la habitación cuenta con armario, buena iluminación y ventilación",
        "owner": {
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
        "price": 270000,
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

### GET Rooms Quantity

- URL: `http://localhost:3500/api/rooms/number/<roomQuantity>`
- API Roompali: `https://backend-roompali.vercel.app/api/rooms/number/<roomQuantity>`
- Example: `https://backend-roompali.vercel.app/api/rooms/number/2`
> Response
```
{
    "message": "2 Rooms listed",
    "body": [
        {
            "secondary_images": [
                "https://roompali-bucket-s3.s3-us-west-1.amazonaws.com/1-detalles-1601306251232.jpg",
                "https://roompali-bucket-s3.s3-us-west-1.amazonaws.com/1-detalles-2-1601306251253.jpg"
            ],
            "available": true,
            "bed": true,
            "desk": true,
            "closet": true,
            "couch": false,
            "chair": true,
            "kitchen": true,
            "visits": true,
            "wifi": true,
            "parking": false,
            "washing_machine": false,
            "television": false,
            "heating": false,
            "private_bathroom": false,
            "gymnasium": false,
            "air_conditioner": false,
            "_id": "5f7200f824471e4eacf20656",
            "room_name": "Habitación Estilo Utüane",
            "main_image": "https://roompali-bucket-s3.s3-us-west-1.amazonaws.com/1-habitaci%C3%B3n-estilo-1601306251203.jpg",
            "city": "leticia",
            "address": "Calle 14 C 2A 11/19 Barrio La Sarita, Leticia 910008 Colombia",
            "square_meters": 20,
            "room_description": "La infraestructura está inspirada en la naturaleza y en las malocas propias del lugar, con estilo rústico sin olvidar la comodidad.",
            "owner": {
                "owner": true,
                "_id": "5f72006e24471e4eacf20655",
                "favorite_rooms": [],
                "user_data": "5f72003b24471e4eacf20654",
                "first_name": "Martin",
                "last_name": "Gomez",
                "contact_email": "mtgomez-society@gmail.com",
                "user_picture": "https://roompali-bucket-s3.s3-us-west-1.amazonaws.com/1-martin-gomez-1601306251195.jpg",
                "whatsapp": "+573154286759",
                "__v": 0
            },
            "price": 800000,
            "__v": 0
        },
        {
            "secondary_images": [
                "https://roompali-bucket-s3.s3.us-west-1.amazonaws.com/2-detalles1-1601421147448.jpg",
                "https://roompali-bucket-s3.s3.us-west-1.amazonaws.com/2-detalles2-1601421147449.jpg"
            ],
            "available": true,
            "bed": true,
            "desk": false,
            "closet": true,
            "couch": false,
            "chair": true,
            "kitchen": true,
            "visits": true,
            "wifi": true,
            "parking": false,
            "washing_machine": false,
            "television": true,
            "heating": false,
            "private_bathroom": true,
            "gymnasium": false,
            "air_conditioner": false,
            "_id": "5f73c07753c80f00087cc863",
            "room_name": "Habitación Casa de las Palmas",
            "main_image": "https://roompali-bucket-s3.s3.us-west-1.amazonaws.com/2-main-1601421147453.jpg",
            "city": "leticia",
            "address": "Carrera 11 #13-110, Leticia 910001 Colombia",
            "square_meters": 30,
            "room_description": "Un lugar cómodo y ameno desde el cual podrás planear una amplia variedad de tours que podrás conocer y personalizar con nosotros.",
            "owner": {
                "owner": true,
                "_id": "5f72006e24471e4eacf20655",
                "favorite_rooms": [],
                "user_data": "5f72003b24471e4eacf20654",
                "first_name": "Martin",
                "last_name": "Gomez",
                "contact_email": "mtgomez-society@gmail.com",
                "user_picture": "https://roompali-bucket-s3.s3-us-west-1.amazonaws.com/1-martin-gomez-1601306251195.jpg",
                "whatsapp": "+573154286759",
                "__v": 0
            },
            "price": 900000,
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
    "secondary_images": [
        "https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    ],
    "city": "Medellín",
    "address": "Cra. 43 #65-9, Medellín, Antioquia",
    "square_meters": 30,
    "available": true,
    "room_description": "Alquilo habitación con baño compartido, la habitación cuenta con armario, buena iluminación y ventilación",
    "price": 300000,
    "userId": "5f6df5cab628f31a0ce367bb"
}
```

> Response

```
{
    "message": "Room created",
    "body": {
        "secondary_images": [
            "https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        ],
        "available": true,
        "bed": false,
        "desk": false,
        "closet": false,
        "couch": false,
        "chair": false,
        "kitchen": false,
        "visits": false,
        "wifi": false,
        "parking": false,
        "washing_machine": false,
        "television": false,
        "heating": false,
        "private_bathroom": false,
        "gymnasium": false,
        "air_conditioner": false,
        "_id": "5f71379f5d9556168804fafb",
        "room_name": "El departamento de Juan",
        "main_image": "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "city": "medellin",
        "address": "Cra. 43 #65-9, Medellín, Antioquia",
        "square_meters": 30,
        "room_description": "Alquilo habitación con baño compartido, la habitación cuenta con armario, buena iluminación y ventilación",
        "owner": "5f6e00dc8a4b5b136c0cb776",
        "price": 300000,
        "__v": 0
    }
}
```

### PATCH Room

- URL: `http://localhost:3500/api/rooms/<roomId>`
- API Roompali: `https://backend-roompali.vercel.app/api/rooms/<roomId>`
- Example: `https://backend-roompali.vercel.app/api/rooms/5f7130863a4e422cf052152a`
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
    "message": "Room 5f7130863a4e422cf052152a updated",
    "body": {
        "secondary_images": [
            "https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        ],
        "available": false,
        "bed": false,
        "desk": false,
        "closet": false,
        "couch": false,
        "chair": false,
        "kitchen": false,
        "visits": false,
        "wifi": false,
        "parking": false,
        "washing_machine": false,
        "television": false,
        "heating": false,
        "private_bathroom": false,
        "gymnasium": false,
        "air_conditioner": false,
        "_id": "5f7130863a4e422cf052152a",
        "room_name": "El departamento de Juan",
        "main_image": "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "city": "medellin",
        "address": "Cra. 43 #65-9, Medellín, Antioquia",
        "square_meters": 30,
        "room_description": "Alquilo habitación con baño compartido, la habitación cuenta con armario, buena iluminación y ventilación",
        "owner": "5f6e00dc8a4b5b136c0cb776",
        "price": 270000,
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
    "userId": "5f6ab4987a9b843cd81c1a5c",
    "roomId": "5f7200f824471e4eacf20656"
}
```

> Response

```
{
    "message": "New room added to favorites_rooms section",
    "userId": "5f6ab4987a9b843cd81c1a5c",
    "user": "Maria Rodriguez",
    "favorite_rooms": [
        "5f7200f824471e4eacf20656"
    ]
}
```

### POST Remove Favorite Room

- URL: `http://localhost:3500/api/favorite-rooms/remove`
- API Roompali: `https://backend-roompali.vercel.app/api/favorite-rooms/remove`
  > Request

```
{
    "userId": "5f6ab4987a9b843cd81c1a5c",
    "roomId": "5f7200f824471e4eacf20656"
}
```

> Response

```
{
    "message": "Favorite room 5f720ed0afa65800077554f6 removed",
    "userId": "5f6ab4987a9b843cd81c1a5c",
    "user": "Maria Rodriguez",
    "favorite_rooms": []
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

| Name                | Link                                                                          |
| :------------------ | :---------------------------------------------------------------------------- |
| Documentation       | https://www.notion.so/Roompali-Documentation-e3e63a0f62b4469db1b509a355c7a483 |
| Frontend Repository | https://github.com/Cohort-4-Team-Ana-1/Frontend-Roompali                      |
| Roompali API        | https://backend-roompali.vercel.app                                           |
| Roompali APP        | https://frontend-roompali.vercel.app/                                         |

## Team Members

- [Johan Suarez (JohanSuarezQ)](https://github.com/JohanSuarezQ)
- [Adrián Gutierrez (AdrianGutiR)](https://github.com/AdrianGutiR)
- [Ricardo Aragón (Demianzx)](https://github.com/Demianzx)
- [Moisés Luna (moilu)](https://github.com/moilu)
- [Samuel Gonzalez (xame2005)](https://github.com/xame2005)
- [Francisco Suarez (Ulzahk)](https://github.com/Ulzahk)

## License

[MIT License](https://github.com/Cohort-4-Team-Ana-1/Backend-Roompali/blob/master/LICENSE)
