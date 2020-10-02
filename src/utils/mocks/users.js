const usersMock = [
  {
    _id: '5f695c69caf81430e860da7b',
    username: 'Natalia Gaviria',
    password: '$2b$10$hjgavGUfMOumtOBSWP02u.gqx5DsDbwzISLwQC3qMlu3FQ7nhif1O',
    email: 'ngav12@mail.com'
  },
  {
    username: 'Pedro Amaral',
    password: 'qwerty123+',
    email: 'amaral.p@mail.com'
  },
  {
    username: 'Jose Telles',
    password: '789456',
    email: 'jose.t@tmail.com'
  }
]
const usersMockAttributes = {
  username: 'Pedro Amaral',
  password: 'qwerty123+',
  email: 'amaral.p@mail.com'
}

const usersIdTest = '5f695c69caf81430e860da7b'
const userEmailTest = 'ngav12@mail.com'

const readUsers = async () => {
  return Promise.resolve(usersMock)
}

const readOneUser = async () => {
  return Promise.resolve(usersMock[0])
}

const createUser = async () => {
  return Promise.resolve(usersMock[0])
}

const updateUser = async () => {
  return Promise.resolve(usersMock[1])
}

const deleteUser = async () => {
  return Promise.resolve()
}

const readUserByEmail = async () => {
  return Promise.resolve(userEmailTest)
}

module.exports = {
  usersMock,
  usersMockAttributes,
  usersIdTest,
  userEmailTest,
  UsersControllerMock: {
    readUsers,
    readOneUser,
    createUser,
    updateUser,
    deleteUser,
    readUserByEmail
  }
}
