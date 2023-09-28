const db = require('../config');

const Quote = {
  getAllQuotes: () => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM quotes', (error, results) => {
        if (error) return reject(error);
        resolve(results);
      });
    });
  },

  getQuoteById: (id) => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM quotes WHERE id = ?', [id], (error, results) => {
        if (error) return reject(error);
        if (results.length === 0) return resolve(null);
        resolve(results[0]);
      });
    });
  },

  createQuote: (quote) => {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO quotes (title, description) VALUES (?, ?)', [quote.title, quote.description], (error, results) => {
        if (error) return reject(error);
        resolve(results.insertId);
      });
    });
  },

  updateQuote: (id, quote) => {
    return new Promise((resolve, reject) => {
      db.query('UPDATE quotes SET title = ?, description = ? WHERE id = ?', [quote.title, quote.description, id], (error, results) => {
        if (error) return reject(error);
        resolve(results.affectedRows > 0);
      });
    });
  },

  deleteQuote: (id) => {
    return new Promise((resolve, reject) => {
      db.query('DELETE FROM quotes WHERE id = ?', [id], (error, results) => {
        if (error) return reject(error);
        resolve(results.affectedRows > 0);
      });
    });
  },
};

module.exports = Quote;
