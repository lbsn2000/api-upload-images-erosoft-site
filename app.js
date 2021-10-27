const express = require("express");
const fs = require('fs')
const app = express();
const cors = require("cors")
const uploadImage = require('./middlewares/upload-image');
const ModeloFuncionalidade = require('./model/ModeloFuncionalidade');

app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization")
    app.use(cors());
    next();
})

app.post("/upload-image", uploadImage.single('image'), async (req, res) => {

    const funcionalidade = new ModeloFuncionalidade({
        titulo: req.body.title,
        modulo: req.body.modulo,
        URLimagem: `uploads/${req.file.filename}`
    });

    await funcionalidade

        .save()

        .then(response => {
            return res.status(200).json(response);
        })

        .catch(error => {
            return res.status(500).json(error);
        });
})


app.get("/all/:modulo", async (req, res) => {

    console.log("===> Carrengando Modulos <===")

    await ModeloFuncionalidade.find({ 'modulo': { '$in': req.params.modulo } })

        .then(response => {

            return res.status(200).json(response);
        })
        .catch(error => {

            return res.status(500).json(error);
        });
}
)

app.get("/delete/:id/:url", async (req, res) => {

    fs.unlink(`./public/uploads/${req.params.url}`, (err) => {
        if (err) {
            console.error(err)
            return
        }
    })

    await ModeloFuncionalidade.deleteOne({ '_id': req.params.id })

        .then(response => {

            return res.status(200).json(response);
        })

        .catch(error => {

            return res.status(500).json(error);
        });
})


app.listen(8080, () => {
    console.log("==> servidor iniciado na porta 8080 <==")
})