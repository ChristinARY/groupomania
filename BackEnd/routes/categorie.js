const express = require('express')
const router = express.Router()

const categorieCtrl = require('../controllers/categories')
const auth = require('../middelware/auth')
const multer = require('../middelware/multer-config')

router.post('/', auth, multer, categorieCtrl.createCategorie)
router.get('/', auth, categorieCtrl.getAllCategories)


module.exports = router
