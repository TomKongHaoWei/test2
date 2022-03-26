export default function handler(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json({ 
    name: 'John Doe',
    req
  });
}

// export default function getUserInfo (req, res) {
//   console.log('参数', req);
//   const { sex } = req.query
  
//   const _sex = sex ? '男' : '女'
  
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'application/json');
//   res.json({ 
//     code: req,
//     '性别': _sex
//   });
// }