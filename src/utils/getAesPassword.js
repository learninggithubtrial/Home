import CryptoJS from "crypto-js";

const encryptWithAES = (message, secretKey) => {
  const hashedKey = CryptoJS.SHA512(secretKey).toString(CryptoJS.enc.Hex);

  // Truncate the hashed key to 16 bytes (128 bits)
  const truncatedKey = CryptoJS.enc.Hex.parse(hashedKey.substring(0, 32));

  const encrypted = CryptoJS.AES.encrypt(message, truncatedKey, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  }).toString();

  console.log(encrypted);
  return encrypted;
};

const decryptWithAES = (encryptedData, secretKey) => {
  const hashedKey = CryptoJS.SHA512(secretKey).toString();

  // Truncate the hashed key to 16 bytes (128 bits)
  const truncatedKey = hashedKey.substring(0, 32);

  const decrypted = CryptoJS.AES.decrypt(encryptedData, truncatedKey);
  const decryptedData = decrypted.toString(CryptoJS.enc.Utf8);
  console.log(decryptedData);
  return decryptedData;
};

const encryptMD5WithKey = (plaintext, secretKey) => {
  const hmac = CryptoJS.HmacMD5(plaintext, secretKey);
  const encryptedMessage = CryptoJS.enc.Hex.stringify(hmac).substr(0, 32);
  const encryptedText = CryptoJS.MD5(plaintext).toString();
  console.log('Encrypted Text:', encryptedText);
  console.log(encryptedMessage);
  return encryptedMessage;
};
// Example usage

export default encryptMD5WithKey;
