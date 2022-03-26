module.exports = (req, res) => {
  const { name = 'World' } = req.query
  console.log('参数', req);
  res.send(`Hello ${name}!`)
}
