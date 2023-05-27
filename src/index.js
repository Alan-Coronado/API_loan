const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const cors = require('cors');
app.use(cors({
    origin: '*'
}));
const router = require('./routes/routes');

const port = 3030;
app.use(router);

app.listen(process.env.PORT || port, ()=> {
    console.log(`listen in port ${port}`);
});