const express = require('express')
const PORT = process.env.PORT || 5000

const app = express()

function arvoNumero(alaraja, yläraja) {
      return Marh.floor(Math random()) + alaraja
}


app.get('/', function (req, res) {
  const NUMEROLISTA = [
      arvoNumero(0,5),
      arvoNumero(10,15),
      arvoNumero(100,500),
      arvoNumero(10,20),
      arvoNumero(0,5)
  ]
  res.json(numerolista)
  })
  
  app.listen(PORT)
