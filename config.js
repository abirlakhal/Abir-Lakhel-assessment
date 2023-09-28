

const mysql = require('mysql2');

const fs = require('fs');

// Read the configuration file
const rawdata = fs.readFileSync('config.json');
const config = JSON.parse(rawdata);

// Access the database connection details
const { host, user, password, database } = config;

// Configuration de la connexion à la base de données
let connection = mysql.createConnection({
  host: host,
  user: user,
  password: password,
  database: database
});


// Connexion à la base de données
connection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données : ' + err.message);
  } else {
    console.log('Connexion à la base de données MySQL réussie');
  }
});

