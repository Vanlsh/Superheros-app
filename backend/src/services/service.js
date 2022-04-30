import Superhero from "../superheroModel/superheroModel.js";
import fs from "fs";
import path from "path";

class Service{
    getPage(page, superheroArray){
        const reversed = superheroArray.reverse()
        const limit = 5
        let superheros = []
        for(let i = (page - 1) * limit, j =0; i < limit * page; i++){
            if(reversed[i]){
                superheros[j] = reversed[i]
                j++
            }
        }
        return superheros;
    }
    async update(body,file){
        const {nickname,real_name,origin_description,superpowers,catch_phrase} = body
        const editSuperhero = await Superhero.findById(body.id).exec()
        let avatar = editSuperhero.avatar
        if(file){
            fs.rm(path.resolve("./src/static/" + editSuperhero.avatar),() => console.log("Deleted"))
            avatar = file.filename
        }
        const updatedSuperhero = await Superhero.findByIdAndUpdate(body.id,
            {nickname,real_name,origin_description,superpowers,catch_phrase,avatar}
        )
        return updatedSuperhero
    }
}

export default new Service