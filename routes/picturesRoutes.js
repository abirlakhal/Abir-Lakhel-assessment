const express = require('express');
const router = express.Router();
const PicturesController = require('../controllers/picturesController');

// Create a new picture
router.post('/', PicturesController.createPicture);

// Get all pictures
router.get('/', PicturesController.getAllPictures);

// Get a specific picture by ID
router.get('/:id', PicturesController.getPictureById);

// Update a picture by ID
router.put('/:id', PicturesController.updatePicture);

// Delete a picture by ID
router.delete('/:id', PicturesController.deletePicture);

module.exports = router;
