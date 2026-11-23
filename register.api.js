const users = [];

function registerUser(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "E-posta ve şifre zorunludur." });
  }
  users.push({ id: users.length + 1, email, password });
  return res.status(201).json({ message: "Kullanıcı kaydı başarılı." });
}

module.exports = { registerUser, users };
