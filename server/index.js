// server/index.js
const path = require('path');
const express = require("express");
const queryDB =  require('./queryDB')
const PORT = process.env.PORT || 3001;

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello Marcin, this is from server! - API call to nodeJS as backend :)" });
});


app.get("/mongo", async (req, res) => {
  try {
    const data = await queryDB()
    res.json(JSON.stringify(data))
  }
  catch (e) {
    console.log("Could not the data from database: ", e)
  }
}
);

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});