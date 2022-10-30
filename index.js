const express = require('express')
const app = express()
const port = 3000
const path = '/:name'

const Color = ['Red', 'Blue','Green','Black','White','Purple'];

app.get(path, (req, res) => {
  res.status(200).json({ 
    'Name' : String(req.params.name),
    'Age' : Math.round(Math.random() * 60),
    'Color' : Color[Math.floor(Math.random() * 3)]
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})