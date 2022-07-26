const path = require("path")
const express = require("express")

const app = express()
const router = require("./router")


app.use(express.urlencoded({ extended: false}))
app.use(express.json())
app.use(express.static("public"))
app.set("views", "views")
app.set("view engine", "hbs")

app.use("/", router)

// app.get("/", (req, res) => {
//     res.render("index", {
//         title: "Nuel Weather Finder"
//     })
// })

// app.get("/about", (req, res) => {
//     res.render("about")
// })

// app.get("/", (req, res) => {
//     res.sendFile("index.html", {
//         root: path.join(__dirname, "../public")

//     })
// })



// app.get("/about", (req, res)=> {
//     res.sendFile("about.html", {
//         root: path.join(__dirname, "../public")

//     })
// })

app.listen(3000, () => {
    console.log("server is now running on port 3000");
})