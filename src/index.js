module.exports = function check(str, bracketsConfig) {
  // your solution
  let bracket=[];
  for ( let i = 0; i < str.length; i++ ) {
    for (let n=0; n < bracketsConfig.length; n++) {
      if ( str[i] == bracketsConfig[0][0]) {bracket.push(str[i]);} else {
        if (bracket.length == 0) {return false};
        if (str[i] == bracketsConfig[0][1] && bracket[bracket.length - 1] == bracketsConfig[0][0]) {bracket.pop();};
        };
    };
          
  };
  if (bracket.length == 0) {return true} else {return false};
}
