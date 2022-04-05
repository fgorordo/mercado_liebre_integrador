const express = require('express')
const path = require('path')

//Express basics
const app = express();
const expressPort = 3030;

// Ruta de archivos estaticos y uso
const publicPath = path.resolve(__dirname, './public')
app.use(express.static(publicPath))

// Server start
app.listen(expressPort, () => {
  console.log(`Servidor iniciado en el puerto: ${expressPort}`)
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/index.html'))
})
