const express = require("express");
const router = express.Router();
const { Image } = require("../controllers");
const path = require("path");
const multer = require("multer")

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log("running")
        cb(null, "./img_holder")
    },
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const uploader = multer({ storage: storage })

router.post("/upload-to-imgur", uploader.single('image'), Image.uploadToImgur)

module.exports = router