export function getUserInfo (req, res) {
  const { sex } = req.query
  
  const _sex = sex ? '男' : '女'
  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json({ 
    '性别': _sex
  });
}

export function setUserInfo (req, res) {
  const { sex } = req.query

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json({ 
    '设置': sex
  });
}

// module.exports = (req, res) => {
//   res.statusCode = 200;
//   const { name = 'World', sex } = req.query
//   const _sex = sex ? '男' : '女'

//   // res.setHeader('Content-Type', 'application/json');
//   res.json({ 
//     name: name,
//     sex: _sex
//   });
// }