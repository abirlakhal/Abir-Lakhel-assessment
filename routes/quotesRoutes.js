const express = require('express');
const router = express.Router();
const QuotesController = require('../controllers/quotesController');

// Create a new quote
router.post('/', QuotesController.createQuote);

// Get all quotes
router.get('/', QuotesController.getAllQuotes);

// Get a specific quote by ID
router.get('/:id', QuotesController.getQuoteById);

// Update a quote by ID
router.put('/:id', QuotesController.updateQuote);

// Delete a quote by ID
router.delete('/:id', QuotesController.deleteQuote);

module.exports = router;
