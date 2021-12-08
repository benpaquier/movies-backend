const express = require("express")
const app = express()
const port = 5000
const bodyparser = require("body-parser")
const cors = require("cors")

app.use(cors())

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

// import des routes
const movies = require("./routes/movies")
const theaters = require("./routes/theaters")

// utilisation des routes
app.use('/movies', movies)
app.use('/theaters', theaters)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
