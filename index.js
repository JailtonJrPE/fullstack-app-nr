const { readFileSync } = require("fs")
const http = require("http")


server = http.createServer((req,res) => {
    console.log(req.url)
    aluno = "Jegante"
    curso = "ADS"
    if (req.url == "/alunos") {
         page = readFileSync("./pages/alunos.html")
         page = page.toString("utf-8").replace("{aluno}",aluno)
    } else if (req.url == "/cursos") {
        page = readFileSync("./pages/cursos.html")
        page = page.toString("utf-8").replace("{curso}",curso)
    } else {
        page = readFileSync("./index.html")
    }
    res.end(page)
    id = req.url.replace("/","")
     
   

})

server.listen(5002,()=>{
    console.log("servidor rodando na porta", 5002)
})
