module.exports.all = (req,res) => {
  res.json({
    Hello: "World 🌎",
    at: new Date().toISOString()
  }
)}
