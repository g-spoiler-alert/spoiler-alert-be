const express = require("express");
const router = express.Router()
const queries = require('../queries')

router.get('/', (req, res, next) => {
  res.send({ message: 'this is working, but under construction!' })
  .catch(next)
})

router.get('/pantry', (req, res, next) => {
  queries.readItem()
    .then(items => { res.json({ items }) })
    .catch(next);
})

router.post("/newitem", (req, res, next) => {
  queries.createItem(req.body)
  .then(item => {
      res.status(201).json({item})
  })
  .catch(next);
})

router.delete("/:id", (req, res, next) => {
  queries.deleteItem(req.params.id)
  .then(() => {
      res.status(204).json({deleted: true})
  })
  .catch(next)
})

router.get('/users', (req, res, next) => {
  queries.readUsers()
    .then(users => {
      res.json({
        users
      })
    })
    .catch(next);
})

module.exports = router