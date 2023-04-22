const jwt = require("jwt")

const auth = async (req, res, next) => {
    try {
        const token = req.header("token")

        if (!token) {
            return res.status(401).json({msg: "Unauthorized, no token present"})
        }

        const tokenVerified = jwt.verify(token, "passwordKey")

        if (!tokenVerified) {
            return res.status(401).json({mesg : "Unauthorized, invalid token"})
        }
        next()
    } catch(error) {
        return res.status(500).json({error : error.message})
    }
}

module.exports = auth