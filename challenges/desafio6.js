db.produtos.find(
  { $and: [{ curtidas: { $lt: 100 } },
  { vendidos: { $gt: 10 } }] },
  { nome: 1, _id: 0, curtidas: 1 },
);
