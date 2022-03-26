module.exports = (req, res) => {
  const { name = 'World', sex } = req.query
  const _sex = sex ? '男' : '女'
  res.send(`Hello ${name}!, 性别 ${sex}`)
}

// export function getUserInfo (req, res) {
//   const { sex } = req.query
  
//   const _sex = sex ? '男' : '女'
  
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'application/json');
//   res.json({ 
//     code: req,
//     '性别': _sex
//   });
// }