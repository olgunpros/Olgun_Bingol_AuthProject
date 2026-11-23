const { users } = require("./register.api");

function loginUser(req, res) {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ error: "Geçersiz e-posta veya şifre." });
  }
  return res.status(200).json({ message: "Giriş başarılı", token: "jwt-sample-token" });
}

module.exports = { loginUser };
