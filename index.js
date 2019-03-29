const express = require('express')
const app = express()
app.listen(3000, () => console.log('JK server running on port 3000'))
app.get('/', (req, res) => {
  res.send('Booyah 2 Axe Center')
})