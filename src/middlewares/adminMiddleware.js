function adminMiddleware(req, res, next) {
    if (req.session.loggedUser.email === "quotterimateo@gmail.com") {
        next()
    }
    else return res.render("not-found")
}

module.exports = adminMiddleware