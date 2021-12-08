const express = require("express")
const app = express()

const movies = require("../movies.json")
const theaters = require("../theaters.json")

app.get("/", (req, res) => {
  res.json(theaters)
})

app.get("/:id", (req, res) => {
  const { id } = req.params
  const theater = theaters.find(theater => theater.id === Number(id))

  res.json(theater)
})

app.get("/:id/movies", (req, res) => {
  const { id } = req.params
  const filteredMovies = movies.filter(movie => movie.theater_id === Number(id))
  
  res.json(filteredMovies)
})

module.exports = app