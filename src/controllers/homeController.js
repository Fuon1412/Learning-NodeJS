const getHomePage= (req, res) => {
    res.send("Hello World with nodejs and express");
}
const getDumbPage = (req, res) => {
    res.render("sample.ejs");
}
module.exports ={
    getHomePage, getDumbPage
}
