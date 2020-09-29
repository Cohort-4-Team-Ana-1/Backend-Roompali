const rolMock = {
  message: 'Rol listed',
  body: {
    favorite_rooms: [
      {
        secondary_image: [
          'https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          'https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
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
        _id: '5f6e18a640fc1a286c84456c',
        room_name: 'El departamento de Juan',
        main_image: 'https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        city: 'medellin',
        address: 'Cra. 43 #65-9, Medellín, Antioquia',
        square_meters: 30,
        price: 300000,
        room_description: 'Alquilo habitación con baño compartido, la habitación cuenta con armario, buena iluminación y ventilación',
        owner: '5f6e00dc8a4b5b136c0cb776',
        __v: 0
      }
    ],
    owner: true,
    _id: '5f6d3fc940e27409105383c0',
    user_data: '5f6ab22c32458f354459002c',
    first_name: 'Pedro',
    last_name: 'Rodriguez',
    contact_email: 'pedror@companypr.com',
    user_picture: 'https://images.freeimages.com/images/large-previews/253/homeless-1437118.jpg',
    whatsapp: '+573054678124',
    __v: 0
  }
}
const rolBodyMock = {
  user_data: '5f6df5cab628f31a0ce367bb',
  first_name: 'Juan',
  last_name: 'Ramirez',
  contact_email: 'empresajramirez@juanr.com',
  user_picture: 'https://images.freeimages.com/images/large-previews/28f/man-with-laptop-1238347.jpg',
  owner: false,
  whatsapp: '3117897456'
}

const readRoles = async () => {
  return Promise.resolve(rolMock)
}

const readOneRol = async () => {
  return Promise.resolve(rolMock)
}

const createRol = async () => {
  return Promise.resolve(rolMock[0])
}

const updateRol = async () => {
  return Promise.resolve(rolMock[0])
}

const deleteRol = async () => {
  return Promise.resolve()
}

const rolIdTest = '5f6d3fc940e27409105383c0'

module.exports = {
  rolIdTest,
  rolMock,
  rolBodyMock,
  RolControllerMock: {
    readRoles,
    readOneRol,
    createRol,
    updateRol,
    deleteRol
  }
}
