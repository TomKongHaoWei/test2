module.exports = (req, res) => {
  const { name = 'World', sex } = req.query
  const _sex = sex ? '男' : '女'

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json({ 
    name: name,
    sex: _sex
  });
}