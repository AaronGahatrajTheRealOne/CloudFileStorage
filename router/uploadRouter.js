const express = require('express')
const router = express.Router();
const cloudinary = require('../utils/cloudinary');
const upload = require('../middleware/multer');
const FileInfo = require('../Schema/fileDetail');

router.get('/', (req,res) => {
    const success = req.query.success;
    return res.render('upload', {success})
})

router.post('/', upload.single('photoFromInput'),async (req,res) => {
    try{
        if(!req.file){
            return res.status(400).redirect('/upload?success=false')
        }
        const result = await cloudinary.uploader.upload(req.file.path);
        const fileDetail = new FileInfo({
            url : result.url,
            secureURL : result.secure_url
        })
        await fileDetail.save();
        console.log(fileDetail);

        res.status(200).redirect('/upload?success=true');
    }catch(err){
            console.log(err);
            return res.status(500).redirect('/upload?success=false')
    }
})

module.exports = router;
