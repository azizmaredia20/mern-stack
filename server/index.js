import path from 'path';
import express from 'express';
import apiRouter from './controller';

const port = 3000;
const app = express();

app.get('/', function(req, res) {
    const filePath = path.resolve(__dirname, '../dist/index.html');
    res.sendFile(filePath);
});
app.use('/', express.static('dist'));
app.use('/api', apiRouter);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;