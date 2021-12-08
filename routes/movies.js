const express = require("express")
const app = express()

let movies = require("../movies.json")
const theaters = require("../theaters.json")

app.get("/", (req, res) => {
  res.json(movies)
})

app.get("/:id", (req, res) => {
  const { id } = req.params
  const movie = movies.find(movie => movie.id === Number(id))
  
  res.json(movie)
})

app.get("/:id/theaters", (req, res) => {
  const { id } = req.params
  const movie = movies.find(movie => movie.id === Number(id))
  const theater = theaters.find(theater => theater.id === movie.theater_id)

  res.json(theater)
})

app.post("/", (req, res) => {
  console.log(req.body)

  const movie = {
    ...req.body,
    id: movies.length + 1
  }

  movies = [...movies, movie]

  res.json(movie)
})

module.exports = app
