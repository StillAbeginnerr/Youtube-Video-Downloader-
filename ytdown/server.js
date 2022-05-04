
const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();

app.use('/static',express.static('./static'));

app.listen(4000,() =>{
    console.log("positive");
});

app.get('/',(req,res) =>{
    res.sendFile('index.js',{root:'./'});
    console.log("First");
});


app.get('/download',(req,res)=>{
    let url = req.query.url;
    res.header("Content-disposition",'attachment;\ filename="Video.mp4');
    ytdl(url, {format: 'mp4'}).pipe(res);
    console.log("working");
});
