const logs = (req, res, next) => {
    console.log("Menghit api dengan path:", req.path);
    next();
}

module.exports = logs;