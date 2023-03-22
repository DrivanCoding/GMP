const express = require('express');


require('dotenv').config();
const path = require('path');

const app = express();
const userRouter = require("./api/users/user.router");
const projetRouter = require("./api/projet/projet.router");
const equipeRouter = require("./api/equipe/equipe.router");
const sprintRouter = require("./api/sprint/sprint.router");
const tacheRouter = require("./api/tache/tache.router");
const ticketRouter = require("./api/ticket/ticket.router");
const msgRouter = require("./api/msg/msg.router");
const ressourceRouter = require("./api/ressource/ressource.router");
const docsRouter = require("./api/docs/docs.router");
const route = require("./routes/router");
let bodyParser = require('body-parser')
const cors=require("cors")
const fileUpload = require('express-fileupload');
const morgan = require('morgan');
const _ = require('lodash');


app.use(express.static(path.join(__dirname, "asset")));
app.use(express.static(path.join(__dirname, "views")));
const publicDirectory = path.join(__dirname,'./public');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: false })) // for parsing application/x-www-form-urlencoded


app.use(express.json());
app.set('view engine','ejs');

app.use(fileUpload({
    createParentPath: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));




app.use(cors())
app.use("/", route)
app.use('/api/users', userRouter);
app.use('/api/projets', projetRouter);
app.use('/api/equipe', equipeRouter);
app.use('/api/sprints', sprintRouter);
app.use('/api/res', ressourceRouter);
app.use('/api/docs', docsRouter);
app.use('/api/taches', tacheRouter);
app.use('/api/ticket', ticketRouter);
app.use('/api/msg', msgRouter);

app.post('/upload', async (req, res) => {
    try {
        console.log(req.files)
        if(!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
            let avatar = req.files.file;
            
            //Use the mv() method to place the file in the upload directory (i.e. "uploads")
            avatar.mv('../src/assets/uploads/' + avatar.name);

            //send response
            res.send({
                status: true,
                message: 'File is uploaded',
                data: {
                    name: avatar.name,
                    mimetype: avatar.mimetype,
                    size: avatar.size
                }
            });
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

app.listen(process.env.APP_PORT,()=>{
    console.log("server up and running on port :", process.env.APP_PORT);
})

