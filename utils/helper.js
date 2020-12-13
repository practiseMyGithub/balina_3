const crypto = require('crypto');

exports.htmlHandleChars = (string) => {
  return string.replace(/\n|\r\n|\r/g, '<br/>');
}

exports.trim = (str) => {
  const characters = '+*-';
  var c_array = characters.split('');
  var result = '';

  for (var i = 0; i < characters.length; i++)
    result += '\\' + c_array[i];

  return str.replace(new RegExp('^[' + result + ']+|[' + result + ']+$', 'g'), '');
}

exports.toUniqueFileName = (file) => {
  let buf = crypto.randomBytes(16);
  buf = buf.toString('hex');
  let uniqFileName = file.originalname.replace(/\.jpeg|\.jpg|\.png/ig, '');
  uniqFileName += '-' + buf + '.jpeg';
  return uniqFileName;
}

exports.validatePassword = (password) => {
  const theLength = /^.{8,32}$/;  // max. length 32 chars
  const upper = /[A-Z]/;
  const lower = /[a-z]/;
  const number = /[0-9]/;
  const special = /^[^{}$<>#`'"]+$/;
  // const special = /[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]?/;

  if (theLength.test(password) && upper.test(password) && lower.test(password) && number.test(password) && special.test(password)) {
    return true;
  }
  return false;
}

