import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    maxPeople: {
        type: Number,
        require: true
    },
    desc: {
        type: String,
        require: false
    },
    rooNumbers:[{number:Number,unavailableDate:{type:[Date]}}]

},{timestamps:true});


export default mongoose.model("Room",RoomSchema)