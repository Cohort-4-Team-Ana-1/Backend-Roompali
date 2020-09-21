const roomsMock = [
  {
    secondary_image: [
      'https://roomi.imgix.net/wqgm2idQuk70S-i5TL9Rg/imageIDySde8DWN.png',
      'https://roomi.imgix.net/wqgm2idQuk70S-i5TL9Rg/imagez0by78FFx.png'
    ],
    furniture: ['cama', 'mesa'],
    available: true,
    wifi: true,
    private_bathroom: false,
    cleaning: false,
    closet: true,
    deleted: false,
    _id: '5f66a7a19c9e142978eeb6b7',
    room_name: 'El departamento de Lorena',
    main_image:
      'https://roomi.imgix.net/wqgm2idQuk70S-i5TL9Rg/imageW4MzpFtQB.png',
    city: 'bogota',
    address: 'Cra. 43 #65-9, Bogota, Bogota DC',
    room_whatsapp: '+5742925645',
    room_email: 'lorenaroom@gmail.com',
    square_meters: 30,
    price: 500,
    room_description:
      'Alquilo habitación sin amoblar, con baño compartido, la habitación cuenta con armario (opción escritorio), buena iluminación y ventilación',
    __v: 0
  },
  {
    secondary_image: [
      'https://roomi.imgix.net/wqgm2idQuk70S-i5TL9Rg/imageIDySde8DWN.png',
      'https://roomi.imgix.net/wqgm2idQuk70S-i5TL9Rg/imagez0by78FFx.png'
    ],
    furniture: ['cama', 'mesa'],
    available: true,
    wifi: true,
    private_bathroom: false,
    cleaning: false,
    closet: true,
    deleted: false,
    _id: '5f66a7a19c9e142978eeb6b8',
    room_name: 'El departamento de Lorena',
    main_image:
      'https://roomi.imgix.net/wqgm2idQuk70S-i5TL9Rg/imageW4MzpFtQB.png',
    city: 'medellin',
    address: 'Cra. 43 #65-9, Bogota, Bogota DC',
    room_whatsapp: '+5742925645',
    room_email: 'lorenaroom@gmail.com',
    square_meters: 30,
    price: 500,
    room_description:
      'Alquilo habitación sin amoblar, con baño compartido, la habitación cuenta con armario (opción escritorio), buena iluminación y ventilación',
    __v: 0
  }
]

const roomMockAttributes = {
  room_name: 'El departamento de Lorena',
  main_image: 'https://roomi.imgix.net/wqgm2idQuk70S-i5TL9Rg/imageW4MzpFtQB.png',
  secondary_image: [
      'https://roomi.imgix.net/wqgm2idQuk70S-i5TL9Rg/imageIDySde8DWN.png',
      'https://roomi.imgix.net/wqgm2idQuk70S-i5TL9Rg/imagez0by78FFx.png'
  ],
  city: 'medellin',
  address: 'Cra. 43 #65-9, Medellín, Antioquia',
  room_whatsapp: '+5742925645',
  room_email: 'lorenaroom@gmail.com',
  square_meters: 30,
  furniture: [
      'cama',
      'mesa'
  ],
  price: 50,
  available: true,
  wifi: true ,
  private_bathroom: false,
  cleaning: false,
  closet: true,
  room_description: 'Alquilo habitación sin amoblar, con baño compartido, la habitación cuenta con armario (opción escritorio), buena iluminación y ventilación',
  deleted: false
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

const deleteRoom = async () =>{
  return Promise.resolve(roomsMock[0])
}

const searchRoomByCity = async () => {
  return Promise.resolve(roomsMock[0])
}

const roomIdTest = '5f66a7a19c9e142978eeb6b7'

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
