const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).send({
    mensagem: 'Usando o GET dentro da rota de produtos',
  });
});

router.post('/', (req, res, next) => {
  res.status(201).send({
    mensagem: 'usando POST dentro da rota de produtos',
  });
});

router.get('/:id_produto', (req, res, next) => {
  const id = req.params.id_produto;
  if (id === 'especial') {
    res.status(200).send({
      mensagem: 'Você descobriu o ID Special',
      id: id,
    });
  } else {
    res.status(200).send({
      mensagem: 'Você dentrou com um ID',
      id: id,
    });
  }
});
module.exports = router;
