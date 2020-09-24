const mongoose = require('mongoose')
const { Schema } = mongoose

const Roles = new Schema({
    user_data: {type:Schema.ObjectId,ref:'Users'},
    first_name: {type:String,required: true},
    last_name: {type:String,required:true},
    contact_email: {type:String,required: true},
    whatsapp: {type:String,required: true},
    user_picture: {type:String,required: true},
    favorite_rooms: [{type:Schema.ObjectId,ref:'Rooms'}],
    room_asignated: [{type:Schema.ObjectId,ref:'Rooms'}],
    owner: {type:Boolean, default: false},
    own_rooms: [{type:Schema.ObjectId,ref:'Rooms'}],    
})

module.exports= mongoose.model('Roles',Roles)