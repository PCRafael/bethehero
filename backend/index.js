const express = require('express')

const app = express();

app.get('/users', (request, response) => {
  return response.json({ 
    evento: 'Semana Omnistack 11.0',
    aluno: 'Rafael Couto'
  });
});

app.listen(3333);