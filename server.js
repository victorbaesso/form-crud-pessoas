const express = require('express');

const app = express();

const baseDir = `${__dirname}/build/`;

app.use(express.static(baseDir));
app.get('*', (req, res)=>{
  res.sendFile('index.html', {
    root: baseDir
  })
});

app.listen(3600, ()=>{ console.log("Listen on 3600") })