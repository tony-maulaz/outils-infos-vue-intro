const express = require('express')
const app = express()
const cors = require('cors');

const port = 3000

// Middleware pour servir les fichiers statiques (HTML, CSS)
app.use(express.static(__dirname))
app.use(cors());

// Route pour la page d'accueil
app.get('/api/test', (req, res) => {
  res.json({id:1, name:"test"})
})

// Écoutez le serveur sur le port 3000
app.listen(port, () => {
  console.log(`Le serveur Express écoute sur le port ${port}`)
})
