export const formatDate = (dateFormat, page) => {
  const x = new Date(dateFormat);
  const y = x.getFullYear();
  const m = x.getMonth();
  const d = x.getDate();
  const h = x.getHours();
  const n = x.getMinutes();
  const s = x.getSeconds();

  // if (page === 'dashUser') {
  //   const date = new Date(y, m, d, h, n, s);
  //   return date.toLocaleString();
  // } else {
  //   const date = new Date(y, m, d);
  //   return date.toLocaleDateString('id-ID');
  // }
  const localTime = new Date(y, m, d, h, n, s);

  const day = localTime.getDate();
  const month = localTime.getMonth() + 1;
  const year = localTime.getFullYear();
  const hour = localTime.getHours();
  const min = localTime.getMinutes();
  const sec = localTime.getSeconds();

  const readyDay = ("0" + day).slice(-2);
  const readyMonth = ("0" + month).slice(-2);
  const readyHour = ("0" + hour).slice(-2);
  const readyMin = ("0" + min).slice(-2);
  const readySec = ("0" + sec).slice(-2);

  if (page === 'dateOnly') {
    return readyDay + '/' + readyMonth + '/' + year;
  } else if (page === 'toISOString') {
    return localTime.toISOString().split('T')[0];
  }

  return readyDay + '/' + readyMonth + '/' + year + ', ' + readyHour + ':' + readyMin + ':' + readySec;

}

export const htmlHandleChars = (string) => {
  if (string.length) { // solve problem 'cannot read replace'
    return string.replace(/\n|\r\n|\r/g, `<br />`);
  }
}

export const replaceTag = (str) => {
  const result = str.replace(/<br\s*\/?>/gi, '&nbsp;');
  return result;
}

export const encodeHTMLEntities = (text) => {
  var textArea = document.createElement('textarea');
  textArea.innerText = text;
  return textArea.innerHTML;
}

export const cutFilePath = (filepath) => {
  return filepath.name;
  // return filepath.length && filepath.name.replace(/.*[\/\\]/, '');
}

export const truncate = (str, len) => {
  if (str) {
    if (str.length > len && str.length > 0) {
      var new_str = str + " ";
      new_str = str.substr(0, len);
      new_str = str.substr(0, new_str.lastIndexOf(" "));
      new_str = (new_str.length > 0) ? new_str : str.substr(0, len);
      return new_str + '...';
    }
  }
  return str;
}

export const validateName = (name) => {
  const regEx1 = /\s+/g;
  const regEx2 = /[^a-z\s]/ig;
  const regExp3 = /([a-z]+)/ig;

  // get rid all unwanted space
  let result = name.replace(regEx1, ' ');
  if (regEx2.test(result) || result.length > 30) {
    return null;
  }

  // check if there are forbidden characters
  const resultArr = result.match(regExp3);

  // loop through array and capitalize the first letter
  let nameArr = [];
  resultArr.forEach(el => {
    nameArr.push(uppercaseFirstLetter(el));
  })

  // change the array to string, split and jon them together
  let nameReady = nameArr.toString().split(',').join(' ');
  return nameReady;
}

export const validateEmail = (email) => {
  const regExp = /^([\w+][.+-]?){0,}\b@(\w+[.+-]?){0,}\.\w+$/igm;
  if (regExp.test(email)) {
    return email;
  };
}

export const validateUsername = (username) => {
  const regEx1 = /[^\w-_]/;         // not word except - _
  const regEx2 = /\w*([-_]\w*)?/;   // one word followeg by _ or - 

  const notWord = regEx1.test(username);
  if (notWord) return true;

  const eventuel = regEx2.test(username);
  if (!eventuel) return true;

  if (username.length > 30) return true;

  // false = valid, true = not valid
  return username;
}

export const cleanSpaces = (str) => {
  const regEx1 = /\s{2,}\n?/g;
  // const regEx2 = /[^\w\'., ]/g;
  return str.replace(regEx1, ' ');
}

export const capitalizeFirst = (nameStr) => {
  const result = nameStr.charAt(0).toUpperCase() + nameStr.slice(1);
  return result;
}

function uppercaseFirstLetter(nameStr) {
  const result = nameStr.charAt(0).toUpperCase() + nameStr.slice(1);
  return result;
}

export const findExpenseCategory = (subject) => {
  const categories = ['Pool', 'Garden', 'Internet', 'Fitness', 'Electric', 'Water', 'Security', 'Maid', 'Guard', 'Manager', 'Product', 'Legal Fees', 'Interest', 'Common Fee', 'Miscellaneous'];
  console.log(subject)
  categories.forEach(el => {
    if (el === subject) {
      return el;
    }
  })
}

export const capitalize = (nameStr) => {
  const result = nameStr.charAt(0).toUpperCase() + nameStr.slice(1);
  return result;
}

export const isToday = (otherDate) => {
  // const today = new Date()
  // return theDate.getDate() == today.getDate() &&
  //   theDate.getMonth() == today.getMonth() &&
  //   theDate.getFullYear() == today.getFullYear()
  const theDate = new Date(otherDate);
  var d = new Date()
  var bool = (d.toDateString() === theDate.toDateString());
  return bool;
}

export const isYesterday = (otherDate) => {
  const today = new Date();
  const yesterday = today.getDate() - 1;

  const result = new Date(otherDate).getDate() === yesterday ? true : false
  return result;
}



export const htmlHandleNewline = (string) => {
  return string.replace(/<br\/>/g, '\n');
}

