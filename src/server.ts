import express from 'express';

const app = express();
app.get('/', (req, res) => res.json('Hello world'));

app.listen(3333);
