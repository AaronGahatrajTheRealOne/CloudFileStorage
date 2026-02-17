const express = require('express')
const router = express.Router();
const cloudinary = require('../utils/cloudinary');
const upload = require('../middleware/multer');
const FileInfo = require('../Schema/fileDetail');

router.get('/', (req,res) => {
    res.render('upload')
})

router.post('/', upload.single('photoFromInput'),async function (req,res) {
    cloudinary.uploader.upload(req.file.path,async function(err, result){
        if(err){
            console.log(err);
            return res.status(500).json({
                success: false,
                message: "Error"
            })
        }

        const fileDetail = new FileInfo({
            url : result.url,
            secureURL : result.secure_url
        })
        await fileDetail.save();
        console.log(fileDetail);

        res.status(200).json({
            filePath: req.file,
            success:true,
            message:"Uploaded!",
            data:result
        })
    })
})

module.exports = router;