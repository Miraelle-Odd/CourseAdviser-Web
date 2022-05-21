const { ImgurClient } = require('imgur');
const fs = require('fs')
const path = require("path");

const client = new ImgurClient({
    clientId: "2ea9bd6c41d0bf2"
});

const uploadToImgur = async(req, res) => {
    try {
        await client.upload({
                image: fs.createReadStream(path.join(__dirname, '../img_holder/' + req.file.filename)),
                type: "stream"
            })
            .then((response) => {
                fs.unlinkSync(path.join(__dirname, '../img_holder/' + req.file.filename))
                res.send(response.data);
            });

    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    uploadToImgur
}