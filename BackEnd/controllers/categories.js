const con = require('../mysqlConfig')
const jwt = require('jsonwebtoken')


exports.createCategorie = (req, res, next) => {
    const categorie = req.body
    con.query('INSERT INTO categories SET ?', categorie, function(
        error,
        _results,
        _fields
    ) {
        if (error) {
            return res.status(400).json(error)
        }
        return res.status(201).json({ message: 'Votre categorie a bien été créé !' })
    })
}



exports.getAllCategories = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1]
    const decodedToken = jwt.verify(token, config.secret)
    const userId = decodedToken.userId
    con.query(
        "SELECT * FROM categorie",
        function(error, results, _fields) {
            if (error) {
                return res.status(400).json(error)
            }
            return res.status(200).json({ results })
        }
    )
}

/*exports.modifyCategorie = (req, res, next) => {
    con.query(
        'SELECT * FROM categorie WHERE id=?',
        req.params.id,
        function(error, results, _fields) {
            if (error) {
                return res.status(400).json(error)
            }
            const token = req.headers.authorization.split(' ')[1]
            const decodedToken = jwt.verify(token, config.secret)
            const userId = decodedToken.userId
            const role = decodedToken.role
            const categorieId = results[0].idUsers
            if (userId !== categorieId && role !== 'admin') {
                return res.status(401).json({ message: 'Accès non autorisé' })
            }
            const updatedMessage = req.body
            con.query(
                'UPDATE categorie SET ? WHERE id=?', [updatedCategorie, req.params.id],
                function(error, _results, _fields) {
                    if (error) {
                        return res.status(400).json(error)
                    }
                    return res
                        .status(200)
                        .json({ message: 'Votre categorie a bien été modifié !' })
                }
            )
        }
    )
}

exports.deleteCategorie = (req, res, next) => {
    con.query(
        'SELECT * FROM categorie WHERE id=?',
        req.params.id,
        function(error, results, _fields) {
            if (error) {
                return res.status(400).json(error)
            }
            const token = req.headers.authorization.split(' ')[1]
            const decodedToken = jwt.verify(token, config.secret)
            const userId = decodedToken.userId
            const role = decodedToken.role
            const categorieId = results[0].idUSERS
            if (userId !== categorieId && role !== 'admin') {
                return res.status(401).json({ message: 'Accès non autorisé' })
            }
            con.query(
                `DELETE FROM messages WHERE idMESSAGES=${req.params.id}`,
                req.params.id,
                function(error, _results, _fields) {
                    if (error) {
                        return res.status(400).json(error)
                    }
                    return res
                        .status(200)
                        .json({ message: 'Votre message a bien été supprimé !' })
                }
            )
        }
    )
}*/



