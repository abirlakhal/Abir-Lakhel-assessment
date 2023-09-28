const Quote = require('../models/quotesModel');

const QuotesController = {
  getAllQuotes: async (req, res) => {
    try {
      const quotes = await Quote.getAllQuotes();
      res.json(quotes);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getQuoteById: async (req, res) => {
    const { id } = req.params;
    try {
      const quote = await Quote.getQuoteById(id);
      if (!quote) {
        res.status(404).json({ error: 'Quote not found' });
      } else {
        res.json(quote);
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createQuote: async (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
      return res.status(400).json({ error: 'Title and description are required' });
    }

    const quote = { title, description };
    try {
      const newQuoteId = await Quote.createQuote(quote);
      res.status(201).json({ id: newQuoteId, ...quote });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  updateQuote: async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    if (!title || !description) {
      return res.status(400).json({ error: 'Title and description are required' });
    }

    const quote = { title, description };
    try {
      const updated = await Quote.updateQuote(id, quote);
      if (updated) {
        res.json({ message: 'Quote updated successfully', ...quote });
      } else {
        res.status(404).json({ error: 'Quote not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  deleteQuote: async (req, res) => {
    const { id } = req.params;
    try {
      const deleted = await Quote.deleteQuote(id);
      if (deleted) {
        res.json({ message: 'Quote deleted successfully' });
      } else {
        res.status(404).json({ error: 'Quote not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = QuotesController;
