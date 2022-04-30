import Superhero from "../superheroModel/superheroModel.js"
import * as fs from "fs";
import path from "path";
import Service from "../services/service.js";

class SuperheroController{
    async create(req,res){
        try {
            const superhero = req.body
            if(req.file){
                superhero.avatar = req.file.filename
            }
            const superheroSaved = await Superhero.create(superhero)
            res.status(200).json(superheroSaved)
        }catch (e){
            res.status(400).json(e.message)
        }
    }
    async remove(req,res){
        try{
            const removed = await Superhero.findByIdAndRemove(req.params.id)
            fs.rm(path.resolve("./src/static/" + removed.avatar),
                () => console.log("Deleted"))
            res.status(200).json(removed)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async update(req,res){
        try{
            const superhero = await Service.update(req.body,req.file)
            res.status(200).json(superhero)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async getOne(req,res){
        try{
            const superhero = await Superhero.findById(req.params.id).exec()
            res.status(200).json(superhero)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async getAll(req,res){
        try{
            const superheros = await Superhero.find()
            res.status(200).json(superheros)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async getPage(req,res){
        try{
            const superheros = await Superhero.find()
            const superherosResult = Service.getPage(req.params.page,superheros)
            res.status(200).json(superherosResult)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

}
export default new SuperheroController()