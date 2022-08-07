exports.middlewareGlobal = (req, res, next) => {
  if (req.body.cliente) {
    req.body.cliente = req.body.cliente.replace("Brian", "Senhor Brian");
    console.log();
    console.log(`ola querido cliente ${req.body.cliente}`);
    console.log();
  } else {
    console.log();
    console.log("passei pelo middleware global");
    console.log();
  }
  res.locals.varLocal = "esta é uma variavel local";

  next();
};
