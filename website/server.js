const express = require('express')
const path = require('path');

const app = express()

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const port = 28704
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})