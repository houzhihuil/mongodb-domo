const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'demodb'; // Replace with your database name

// Create a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true });

// Connect to the server
client.connect(function(err) {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }

  console.log('Connected successfully to server');

  const db = client.db(dbName);

  // Perform database operations here

  // Close the connection
  client.close();
});
