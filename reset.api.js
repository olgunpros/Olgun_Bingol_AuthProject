const { users } = require("./register.api");

function resetPassword(req, res) {
  const { email, newPassword } = req.body;
  const user = users.find((u) => u.email === email);
  if (!user) {
    return res.status(404).json({ error: "Kullanıcı bulunamadı." });
  }
  user.password = newPassword;
  return res.status(200).json({ message: "Şifre başarıyla güncellendi." });
}

module.exports = { resetPassword };
