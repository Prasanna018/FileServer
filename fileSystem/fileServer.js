const express = require("express")
const fs = require("fs")
const path = require("path");

const app = express();

const DirPath = '../fileSystem';


app.get('/files', function (req, res) {

    const fileListing = fs.readdirSync(DirPath);
    res.send({

        fileListing
    }
    )

})


app.get('/files/:FileName', function (req, res) {
    const name = req.params.FileName;
    console.log(name);
    fs.readFile(name, "utf-8", function (err, data) {

        res.json(
            {
                data
            }
        )


    })





})


app.listen(4000);

