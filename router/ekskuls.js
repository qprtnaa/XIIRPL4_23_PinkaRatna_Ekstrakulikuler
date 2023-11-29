const express = require('express')
const router = express.Router()

const ekskulcontroller = require('../controllers/ekskuls')

router.get('/ekskuls', ekskulcontroller.index)

router.get('/ekskul/:id', ekskulcontroller.show)

router.post('/ekskul', ekskulcontroller.store)

router.put('/ekskul/:id', ekskulcontroller.update)

router.delete('/ekskul/:id', ekskulcontroller.delete)

module.exports = router