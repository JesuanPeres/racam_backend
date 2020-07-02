const router = require('express').Router();
const multer = require('multer');

const uploadConfig = require('./config/upload')
const PhotoController = require('./controllers/PhotoController');
const UserController = require('./controllers/UserController');

const upload = multer(uploadConfig)


router.get('/' , (req,res) => {
    res.json(
        {
            frase: "é nois q voa"
        }
    );
});

//route used to store a photo coming from the esp
router.post('/store_photo',upload.single('image'), PhotoController.store);
//route used to retrieve all photos from the user
router.get('/photos', PhotoController.getAllPhotos);
//route used to see a single photo
router.get('/photos/:id', PhotoController.getPhoto);

//route used to register a new user
router.post('/user', UserController.store);




module.exports = router;