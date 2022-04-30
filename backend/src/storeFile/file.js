import multer from "multer";
import path from "path";
import {v4} from "uuid";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve("./src/static"))
    },
    filename: function (req, file, cb) {
        cb(null, v4()+ "-"+ file.originalname)
    }
})
const types = ['image/png', 'image/jpeg', 'image/jpg']
const fileFilter = (req, file, cd) => {
    if(types.includes(file.mimetype)){
       cd(null, true)
    } else {
        cd(null, false)
    }
}

export const upload = multer({ storage,fileFilter})