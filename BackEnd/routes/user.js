const express = require('express')
const router = express.Router()

const userCtrl = require('../controllers/user')
const auth = require('../middelware/auth')

router.post('/signup', userCtrl.signup)
router.post('/login', userCtrl.login)
router.get('/', userCtrl.getAllUsers)
router.get('/:id', userCtrl.deleteUser)

module.exports = router
