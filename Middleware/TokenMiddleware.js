//verifyToken
function verifyToken (req, res, next) {
    const TokenHeader = req.headers['authorization'];
    if (typeof TokenHeader !== 'undefined') {
        req.token = TokenHeader;
        next();
    } else {
        res.sendStatus(403);
    }
}

module.exports = verifyToken;