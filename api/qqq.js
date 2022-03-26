export function getUserInfo (req, res) {
  console.log('参数', req);
  const { sex } = req.query
  
  const _sex = sex ? '男' : '女'
  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json({ 
    code: req,
    '性别': _sex
  });
}

export function setUserInfo (req, res) {
  console.log('参数', req);
  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json({ 
    '设置': req
  });
}