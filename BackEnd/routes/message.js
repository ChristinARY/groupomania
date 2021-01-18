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
router.post('/:id', multer, messageCtrl.modifyMessages)
router.get('/del/:id', messageCtrl.deleteMessage)
router.post('/signaler/:id', messageCtrl.signalerMessage)
router.get('/AllMsgSignaler', messageCtrl.getSignalMessages)

//router.post('/:id/like', auth, messageCtrl.addLike)
//router.delete('/:id/like', auth, messageCtrl.removeLike)

module.exports = router
