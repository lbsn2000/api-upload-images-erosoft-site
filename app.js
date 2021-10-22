const express = require("express");
const app = express();
const cors = require("cors")
const uploadImage = require('./middlewares/upload-image');

app.use((req,res,next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
      res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization")
      app.use(cors());
      next();
})

app.post("/upload-image", uploadImage.single('image'), async (req, res) => {

      console.log(req.body.title)
      console.log(req.body.modulo)

      if(req.file){

            return res.status(200).json({
                  erro: false,
                  mensagem: "Upload realizado com sucesso!"
            })
      }
      
      return res.status(400).json({
            erro: true,
            mensagem: "ERRO: Upload não realizado com sucesso! Verifique a extensão da imagem e tente novamente! Formatos Aceitos = png, jpg, jpeg, gif"
      })

})

app.listen(8080, () =>{
      console.log("==> servidor iniciado na porta 8080 <==")
})