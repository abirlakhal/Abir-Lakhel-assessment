const Picture = require('../models/picturesModel');

const PicturesController = {
  getAllPictures: async (req, res) => {
    try {
      const pictures = await Picture.getAllPictures();
      res.json(pictures);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getPictureById: async (req, res) => {
    const { id } = req.params;
    try {
      const picture = await Picture.getPictureById(id);
      if (!picture) {
        res.status(404).json({ error: 'Picture not found' });
      } else {
        res.json(picture);
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createPicture: async (req, res) => {
    const { filename, caption } = req.body;
    if (!filename || !caption) {
      return res.status(400).json({ error: 'Filename and caption are required' });
    }

    const picture = { filename, caption };
    try {
      const newPictureId = await Picture.createPicture(picture);
      res.status(201).json({ id: newPictureId, ...picture });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  updatePicture: async (req, res) => {
    const { id } = req.params;
    const { filename, caption } = req.body;
    if (!filename || !caption) {
      return res.status(400).json({ error: 'Filename and caption are required' });
    }

    const picture = { filename, caption };
    try {
      const updated = await Picture.updatePicture(id, picture);
      if (updated) {
        res.json({ message: 'Picture updated successfully', ...picture });
      } else {
        res.status(404).json({ error: 'Picture not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  deletePicture: async (req, res) => {
    const { id } = req.params;
    try {
      const deleted = await Picture.deletePicture(id);
      if (deleted) {
        res.json({ message: 'Picture deleted successfully' });
      } else {
        res.status(404).json({ error: 'Picture not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = PicturesController;
