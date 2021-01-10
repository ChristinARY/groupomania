const express = require('express')
const router = express.Router()

const messageCtrl = require('../controllers/message')
const auth = require('../middelware/auth')
const multer = require('../middelware/multer-config')

router.post('/', multer, messageCtrl.createMessage)
//router.get('/', auth, messageCtrl.getAllMessages)
router.get('/', messageCtrl.getAllMessages)
router.post('/commentaires',multer, messageCtrl.replyMessage)
router.get('/commentaires/:id', messageCtrl.getAllCommentaire)
router.put('/:id', auth, multer, messageCtrl.modifyMessages)
router.delete('/:id', auth, messageCtrl.deleteMessage)
router.post('/signaler', messageCtrl.signalerMessage)
//router.post('/:id/like', auth, messageCtrl.addLike)
//router.delete('/:id/like', auth, messageCtrl.removeLike)

module.exports = router
