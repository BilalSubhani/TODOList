const express = require('express');
const path = require('path');
const app = express();

const PORT = 8000;
const staticPath = path.join(__dirname, '../public');

app.use(express.static(staticPath));

app.get('/', (req, res) =>{
    // res.send("Hello from Express Server!");
});


app.listen(PORT, ()=>{
    console.log(`Port: ${PORT}`);
})