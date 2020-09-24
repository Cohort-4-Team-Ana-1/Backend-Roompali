const Roles = require('./schema')


/** 
 * Brings roles records
*/
const readRoles = async() =>{
    const roles = await Roles.find({}).populate('user_data').populate('favorite_rooms').populate('own_rooms')
    return roles
}

/**
 * Bring one rol by id
 */
const readOneRol = async(rolId) =>{
    const rol = await Roles.findById(rolId).populate('user_data').populate('favorite_rooms').populate('own_rooms')
    return rol
}


/**
 * Create new Rol
 */
const createRol = async(rol) =>{
    const rolData = {
        user_data: rol.user_data,
        first_name: rol.first_name,
        last_name: rol.last_name,
        contact_email: rol.contact_email,
        user_picture: rol.user_picture,
        favorite_rooms: rol.favorite_rooms,
        room_asignated: rol.room_asignated,
        owner: rol.owner,
        whatsapp: rol.whatsapp,
        own_rooms: rol.own_rooms
    }
    const createdRol = await Roles.create(rolData)
    return createdRol
}

/**
 * 
 * Update Rol by Id
 */
const updateRol = async(rolId,rol) =>{
    const rolData = {
        user_data: rol.user_data,
        first_name: rol.first_name,
        last_name: rol.last_name,
        contact_email: rol.contact_email,
        user_picture: rol.user_picture,
        favorite_rooms: rol.favorite_rooms,
        room_asignated: rol.room_asignated,
        owner: rol.owner,
        whatsapp: rol.whatsapp,
        own_rooms: rol.own_rooms
    }
    await Roles.findByIdAndUpdate(
        rolId,
        {$set:rolData},
        {omitUndefined: true, upsert: true}
    )
    const updatedRol = await Roles.findById(rolId)
    return updatedRol
}

/**
 * Delete a Rol by Id 
 */
const deleteRol = async(rolId) =>{
    await Roles.findByIdAndDelete(rolId)
}

module.exports = {
    readRoles,
    readOneRol,
    createRol,
    updateRol,
    deleteRol
}