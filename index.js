const express = require('express')
const app = express()
const port = 3000
const path = '/'

const Color = ['Red', 'Blue','Green'];
let JSON_obj = {
    'Name' : 'Anish',
    'Age' : Math.round(Math.random() * 50),
    'Color' : Color[Math.round(Math.random() * 2)]
}
app.get(path, (req, res) => {
  res.status(200).json({ JSON_obj })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})