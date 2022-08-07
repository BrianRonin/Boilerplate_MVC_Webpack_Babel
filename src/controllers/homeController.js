exports.home = (req, res) => {
  req.session.usuario = { nome: "BrianRonin", logado: true };
  //req.flash("info", "ola tudo bem");
  console.log(req.flash("info"));

  res.render("index", {
    titulo: "Ola Tudo Bem :D",
    label: "cliente",
    csrfToken: req.csrfToken(),
  });
  console.log(req.session.usuario);
  return;
};
exports.trataPost = (req, res) => {
  console.log(req.body);
  //res.send(`enviado ${req.body.nome}`);
  res.send(req.body);
  return;
};
