const con = require('../mysqlConfig')
const jwt = require('jsonwebtoken')


exports.createMessage = (req, res, next) => {
    const message = req.body
    con.query('INSERT INTO messages SET ?', message, function(
        error,
        _results,
        _fields
    ) {
        if (error) {
            return res.status(400).json(error)
        }
        return res.status(201).json({ message: 'Votre message a bien été posté !' })
    })
}
exports.modifyMessages = (req, res, next) => {
    const messageTitle = req.body.title
    const messagecontent = req.body.content
    con.query('UPDATE messages SET title=?, content=? WHERE id=?', [messageTitle,messagecontent,req.params.id],
    function(
        error,
        _results,
        _fields
    ) {
        if (error) {
            return res.status(400).json(error)
        }
        return res.status(201).json({ message: 'Votre message a bien été posté !' })
    })
}


exports.replyMessage = (req, res, next) => {
    const commentaire = req.body
    con.query('INSERT INTO commentaires SET ?', commentaire, function(
        error,
        _results,
        _fields
    ) {
        if (error) {
            return res.status(400).json(error)
        }
        return res.status(201).json({ message: 'Votre commentaire a bien été postée !' })
    })
}

exports.getAllMessages = (req, res, next) => {
    //const token = req.headers.authorization.split(' ')[1]
    //const decodedToken = jwt.verify(token, config.secret)
    //const userId = decodedToken.userId
    con.query(
        //"SELECT messages.*, COUNT(likes.idUSERS) AS 'likes', COUNT(myLikes.idUSERS) AS 'myLikes', DATE_FORMAT(created_at,\"%d/%m/%Y %H:%i:%s\") AS created_at_formated FROM messages LEFT JOIN likes ON messages.idMESSAGES = likes.idMESSAGES LEFT JOIN likes myLikes ON messages.idMESSAGES = myLikes.idMESSAGES AND myLikes.idUSERS= ? GROUP BY messages.idMESSAGES ORDER BY created_at DESC", [userId],
        //"SELECT * FROM messages", SELECT * FROM messages INNER JOIN `commentaires` ON messages.ID = commentaires.messageId
        //"SELECT * FROM messages LEFT JOIN `commentaires` ON messages.ID = commentaires.messageId", 
        "SELECT * FROM messages",
        //" SELECT * FROM messages LEFT JOIN `commentaires` ON messages.ID = commentaires.messageId HAVING messageId=?",[req.params.id], 
        function(error, results, _fields) {
            if (error) {
                return res.status(400).json(error)
            }
            return res.status(200).json({ results })
        }
    )
}
exports.getAllCommentaire = (req, res, next) => {
    //const token = req.headers.authorization.split(' ')[1]
    //const decodedToken = jwt.verify(token, config.secret)
    //const userId = decodedToken.userId
    con.query(
        //"SELECT messages.*, COUNT(likes.idUSERS) AS 'likes', COUNT(myLikes.idUSERS) AS 'myLikes', DATE_FORMAT(created_at,\"%d/%m/%Y %H:%i:%s\") AS created_at_formated FROM messages LEFT JOIN likes ON messages.idMESSAGES = likes.idMESSAGES LEFT JOIN likes myLikes ON messages.idMESSAGES = myLikes.idMESSAGES AND myLikes.idUSERS= ? GROUP BY messages.idMESSAGES ORDER BY created_at DESC", [userId],
        "SELECT * FROM commentaires WHERE messageId=?",[req.params.id],
        function(error, results, _fields) {
            if (error) {
                return res.status(400).json(error)
            }
            return res.status(200).json({ results })
        }
    )
}

/*exports.modifyMessage = (req, res, next) => {
    con.query(
        'SELECT * FROM messages WHERE id=?',
        req.params.id,
        function(error, results, _fields) {
            if (error) {
                return res.status(400).json(error)
            }
            const token = req.headers.authorization.split(' ')[1]
            const decodedToken = jwt.verify(token, config.secret)
            const userId = decodedToken.userId
            const role = decodedToken.role
            const messageId = results[0].idUSERS
            if (userId !== messageId && role !== 'admin') {
                return res.status(401).json({ message: 'Accès non autorisé' })
            }
            const updatedMessage = req.body
            con.query(
                'UPDATE messages SET ? WHERE idMESSAGES=?', [updatedMessage, req.params.id],
                function(error, _results, _fields) {
                    if (error) {
                        return res.status(400).json(error)
                    }
                    return res
                        .status(200)
                        .json({ message: 'Votre message a bien été modifié !' })
                }
            )
        }
    )
}*/

exports.deleteMessage = (req, res, next) => {
    //const sup = req.body
    /*con.query(
        'SELECT * FROM messages WHERE id=?',
        req.params.id,
        function(error, results, _fields) {*/
           /* if (error) {
                return res.status(400).json(error)
            }
            const token = req.headers.authorization.split(' ')[1]
            const decodedToken = jwt.verify(token, config.secret)
            const userId = decodedToken.userId
            const role = decodedToken.role
            const messageId = results[0].idUSERS
            if (userId !== messageId && role !== 'admin') {
                return res.status(401).json({ message: 'Accès non autorisé' })
            }*/
            console.log(req.params.id)
            con.query(
                `DELETE FROM messages WHERE id=?`,
                [req.params.id],
                function(error, _results, _fields) {
                    if (error) {
                        return res.status(400).json(error)
                    }
                    return res
                        .status(200)
                        .json({ message: 'Votre message a bien été supprimé !' })
                }
            )
        //}
    //)
}

exports.signalerMessage = (req, res, next) => {
    
    /*con.query(
        //"SELECT messages.*, COUNT(likes.idUSERS) AS 'likes', COUNT(myLikes.idUSERS) AS 'myLikes', DATE_FORMAT(created_at,\"%d/%m/%Y %H:%i:%s\") AS created_at_formated FROM messages LEFT JOIN likes ON messages.idMESSAGES = likes.idMESSAGES LEFT JOIN likes myLikes ON messages.idMESSAGES = myLikes.idMESSAGES AND myLikes.idUSERS= ? GROUP BY messages.idMESSAGES ORDER BY created_at DESC", [userId],
        //"SELECT * FROM commentaires WHERE messageId=?",[req.params.id],
        //SELECT COUNT(*) As userSig FROM messagessignaler WHERE userId = ?"
        function(error, results, _fields) {
            if (error) {
                return res.status(400).json(error)
            }
            return res.status(200).json({ results })
        }
    )*/


    const signaler = req.body
    con.query('INSERT INTO messagessignaler SET ?', signaler, function(
        error,
        _results,
        _fields
    ) {
        if (error) {
            return res.status(400).json(error)
        }
        return res.status(201).json({ message: 'Votre signalement a été pris en compte avec succes !' })
    })
}
exports.addLike = (req, res, next) => {
    const like = req.body
    con.query('INSERT INTO likes SET ?', like, function(
        error,
        _results,
        _fields
    ) {
        if (error) {
            return res.status(400).json(error)
        }
        return res.status(201).json({ message: 'Votre like a bien été ajouté !' })
    })
}

exports.removeLike = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1]
    const decodedToken = jwt.verify(token, config.secret)
    const userId = decodedToken.userId
    con.query(
        `DELETE FROM likes WHERE idMESSAGES=${req.params.id} && idUSERS=${userId}`,
        function(error, _results, _fields) {
            if (error) {
                return res.status(400).json(error)
            }
            return res
                .status(200)
                .json({ message: 'Votre like a bien été supprimé !' })
        }
    )
}