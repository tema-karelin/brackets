module.exports = function check(str, bracketsConfig) {
  // your solution
  let bracket=[];
  for ( let i = 0; i < str.length; i++ ) {
    for (let n=0; n < bracketsConfig.length; n++) {
      if (str[i] == bracketsConfig[n][0] && str[i] != bracket[bracket.length - 1] || str[i] == bracketsConfig[n][0] && bracketsConfig[n][0] != bracketsConfig[n][1]) {bracket.push(str.charAt(i));} else {
        if (bracket.length == 0 && str[i] == bracketsConfig[n][1]) {return false};
        if ((str[i] == bracketsConfig[n][1]) && (bracket[bracket.length - 1] == bracketsConfig[n][0])) {bracket.pop();};
        };
    };
          
  };
  if (bracket.length == 0) {return true} else {return false};
}
