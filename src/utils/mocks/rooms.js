const roomsMock = [
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
        "_id": "5f7130863a4e422cf052152a",
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
]

const roomMockAttributes = {
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
    "owner": "5f6e00dc8a4b5b136c0cb776",
    "price": 300000
}


const readRooms = async () => {
  return Promise.resolve(roomsMock)
}

const readOneRoom = async () => {
  return Promise.resolve(roomsMock)
}

const createRoom = async () => {
  return Promise.resolve(roomsMock[0])
}

const updateRoom = async () => {
  return Promise.resolve(roomsMock[0])
}

const deleteRoom = async () => {
  return Promise.resolve()
}

const searchRoomByCity = async () => {
  return Promise.resolve(roomsMock[0])
}

const roomIdTest = '5f7130863a4e422cf052152a'

module.exports = {
  roomsMock,
  roomIdTest,
  roomMockAttributes,
  RoomsControllerMock: {
    readRooms,
    readOneRoom,
    createRoom,
    updateRoom,
    deleteRoom,
    searchRoomByCity
  }
}
