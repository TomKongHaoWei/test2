module.exports = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  const { name = 'World', sex } = req.query
  const _sex = sex ? '男' : '女'

  res.json({ 
    name: name,
    sex: _sex
  });
}