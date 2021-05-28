module.exports.all = (req,res) => {
  res.json({
    Hello: ['Hola', 'Hello', 'Привет', '你好'],
    World: '🌎',
    at: new Date().toISOString()
  }
)}
