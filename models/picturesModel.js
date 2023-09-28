const db = require('../config');

const Picture = {
  getAllPictures: () => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM pictures', (error, results) => {
        if (error) return reject(error);
        resolve(results);
      });
    });
  },

  getPictureById: (id) => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM pictures WHERE id = ?', [id], (error, results) => {
        if (error) return reject(error);
        if (results.length === 0) return resolve(null);
        resolve(results[0]);
      });
    });
  },

  createPicture: (picture) => {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO pictures (filename, caption) VALUES (?, ?)', [picture.filename, picture.caption], (error, results) => {
        if (error) return reject(error);
        resolve(results.insertId);
      });
    });
  },

  updatePicture: (id, picture) => {
    return new Promise((resolve, reject) => {
      db.query('UPDATE pictures SET filename = ?, caption = ? WHERE id = ?', [picture.filename, picture.caption, id], (error, results) => {
        if (error) return reject(error);
        resolve(results.affectedRows > 0);
      });
    });
  },

  deletePicture: (id) => {
    return new Promise((resolve, reject) => {
      db.query('DELETE FROM pictures WHERE id = ?', [id], (error, results) => {
        if (error) return reject(error);
        resolve(results.affectedRows > 0);
      });
    });
  },
};

module.exports = Picture;
