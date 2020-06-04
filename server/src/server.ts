import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('teste');

    response.json([
        'Nome1',
        'Nome2',
        'Nome3'
    ]);
});

app.listen(3333);
