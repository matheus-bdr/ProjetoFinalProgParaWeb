function indexView(req, res){
    res.render("index.html", {});
}

function acessoCss(req,res){
    app.use(express.static('public'))
}
module.exports =  {
    indexView,
    acessoCss
};