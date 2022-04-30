import mongoose from "mongoose";

const superheroSchema = new mongoose.Schema({
    id: Number,
    nickname: String,
    real_name: String,
    origin_description: String,
    superpowers: String,
    catch_phrase: String,
    avatar: String
})

export default mongoose.model("superhero", superheroSchema)