const Roles = require('./schema')

/**
 * Brings roles records
*/
const readRoles = async () => {
  const roles = await Roles.find({})
  return roles
}

/**
 * Bring one rol by id
 */
const readOneRol = async (rolId) => {
  const rol = await Roles.findById(rolId).populate('favorite_rooms')
  return rol
}

/**
 * Create new Rol
 */
const createRol = async (rol) => {
  const rolData = {
    user_data: rol.user_data,
    first_name: rol.first_name,
    last_name: rol.last_name,
    contact_email: rol.contact_email.toLowerCase(),
    user_picture: rol.user_picture,
    owner: rol.owner,
    whatsapp: rol.whatsapp === undefined ? rol.whatsapp : '+57' + rol.whatsapp
  }
  const createdRol = await Roles.create(rolData)
  return createdRol
}

/**
 * Update Rol by Id
 */
const updateRol = async (rolId, rol) => {
  const rolData = {
    user_data: rol.user_data,
    first_name: rol.first_name,
    last_name: rol.last_name,
    contact_email: rol.contact_email === undefined ? rol.contact_email : rol.contact_email.toLowerCase(),
    user_picture: rol.user_picture,
    owner: rol.owner,
    whatsapp: rol.whatsapp === undefined ? rol.whatsapp : '+57' + rol.whatsapp
  }
  await Roles.findByIdAndUpdate(
    rolId,
    { $set: rolData },
    { omitUndefined: true, upsert: true }
  )
  const updatedRol = await Roles.findById(rolId)
  return updatedRol
}

/**
 * Delete a Rol by Id
 */
const deleteRol = async (rolId) => {
  await Roles.findByIdAndDelete(rolId)
}

const searchRolByUserId = async (userId) => {
  const rol = await Roles.findOne({ user_data: userId })
  return rol
}

module.exports = {
  readRoles,
  readOneRol,
  createRol,
  updateRol,
  deleteRol,
  searchRolByUserId
}
