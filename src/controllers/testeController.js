exports.parametros = (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send({ query: req.query, params: req.params });
};
