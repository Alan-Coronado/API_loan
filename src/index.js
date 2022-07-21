const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const router = require('./routes/routes');

const port = 3030;
app.use(router);

app.listen(port, ()=> {
    console.log(`listen in port ${port}`);
});