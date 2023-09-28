const express = require('express');
const app = express();
const bodyParser = require('body-parser');

var cors = require('cors');

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
// Include routes
const quotesRoutes = require('./routes/quotesRoutes');
const picturesRoutes = require('./routes/picturesRoutes');

app.use('/quotes', quotesRoutes);
app.use('/pictures', picturesRoutes);



const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
