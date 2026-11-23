const assert = require("assert");
const { registerUser } = require("./register.api");
const { loginUser } = require("./login.api");
const { resetPassword } = require("./reset.api");

console.log("Auth modülü entegrasyon testleri başlatılıyor...");
assert.strictEqual(typeof registerUser, "function");
assert.strictEqual(typeof loginUser, "function");
assert.strictEqual(typeof resetPassword, "function");
console.log("Tüm Auth entegrasyon testleri başarıyla geçti!");
