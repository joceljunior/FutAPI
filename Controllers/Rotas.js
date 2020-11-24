module.exports = app => {
    app.get("/rota", (req, res) => {
        res.send("Bem vindo a primeira Rota!");
    })
}