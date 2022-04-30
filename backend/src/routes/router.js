import {Router} from "express";
import {upload} from "../storeFile/file.js"
import SuperheroController from "../controllers/superheroController.js";

export const router = new Router()

router.post('/superhero',upload.single('avatar'), SuperheroController.create)
router.delete('/superhero/:id', SuperheroController.remove)
router.patch('/superhero',upload.single('avatar'),SuperheroController.update )
router.get('/superhero/page/:page',SuperheroController.getPage)
router.get('/superhero/:id',SuperheroController.getOne )
router.get('/superhero/', SuperheroController.getAll)

