const addFavoriteRoomsRolMock = {
  favorite_rooms: [
    {
      secondary_image: [
        'https://roomi.imgix.net/wqgm2idQuk70S-i5TL9Rg/imageIDySde8DWN.png',
        'https://roomi.imgix.net/wqgm2idQuk70S-i5TL9Rg/imagez0by78FFx.png'
      ],
      furniture: [
        'cama',
        'mesa'
      ],
      available: true,
      wifi: true,
      private_bathroom: false,
      cleaning: false,
      closet: true,
      _id: '5f66ab098fe1dc11889e7073',
      deleted: false,
      room_name: 'El departamento de Lorena',
      main_image: 'https://roomi.imgix.net/wqgm2idQuk70S-i5TL9Rg/imageW4MzpFtQB.png',
      city: 'medellin',
      address: 'Cra. 43 #65-9, Medellín, Antioquia',
      room_whatsapp: '+5742925645',
      room_email: 'lorenaroom@gmail.com',
      square_meters: 30,
      price: 500,
      room_description: 'Alquilo habitación sin amoblar, con baño compartido, la habitación cuenta con armario (opción escritorio), buena iluminación y ventilación',
      __v: 0
    }
  ],
  owner: true,
  own_rooms: [],
  _id: '5f6c23efb5007e439447534f',
  user_data: {
    _id: '5f6ab22c32458f354459002c',
    username: 'Maria Rodriguez',
    password: '$2b$10$LbAT2JNeti.HJhzkz9bGzuNmpY3sG0P1sLeqdPre.J27rlZ/lzGCC',
    email: 'maria-rodriguez@mail.com',
    __v: 0
  },
  first_name: 'Demian',
  last_name: 'Mendez',
  contact_email: '123@asd.com',
  user_picture: 'https://i.pinimg.com/originals/af/8d/63/af8d63a477078732b79ff9d9fc60873f.jpg',
  whatsapp: '6181237400',
  __v: 0
}

const removeFavoriteRoomsRolMock = {
  favorite_rooms: [],
  owner: true,
  own_rooms: [],
  _id: '5f6c23efb5007e439447534f',
  user_data: {
    _id: '5f6ab22c32458f354459002c',
    username: 'Maria Rodriguez',
    password: '$2b$10$LbAT2JNeti.HJhzkz9bGzuNmpY3sG0P1sLeqdPre.J27rlZ/lzGCC',
    email: 'maria-rodriguez@mail.com',
    __v: 0
  },
  first_name: 'Demian',
  last_name: 'Mendez',
  contact_email: '123@asd.com',
  user_picture: 'https://i.pinimg.com/originals/af/8d/63/af8d63a477078732b79ff9d9fc60873f.jpg',
  whatsapp: '6181237400',
  __v: 0
}

const favoriteRoomsUserIdTest = '5f6ab4987a9b843cd81c1a5c'

const favoriteRoomsRoomIdTest = '5f720ed0afa65800077554f6'

const addOneFavoriteRoom = async () => {
  return Promise.resolve(addFavoriteRoomsRolMock)
}

const findFavoriteRoomById = async () => {
  return Promise.resolve(undefined)
}

const deleteOneFavoriteRoom = async () => {
  return Promise.resolve()
}

const readOneUser = async () => {
  return Promise.resolve(removeFavoriteRoomsRolMock)
}

module.exports = {
  addFavoriteRoomsRolMock,
  removeFavoriteRoomsRolMock,
  favoriteRoomsUserIdTest,
  favoriteRoomsRoomIdTest,
  FavoriteRoomsControllerMock: {
    addOneFavoriteRoom,
    findFavoriteRoomById,
    deleteOneFavoriteRoom,
    readOneUser
  }
}
