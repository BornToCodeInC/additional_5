module.exports = function check(str, bracketsConfig) {
  var brackets=[];
  var bracketsEven=[];
  var bracketsOdd=[];
  var stackEven=[];
  var stackOdd=[];

  if(str.length==0 || str.length%2!=0 || bracketsConfig.length==0){
    return false;
  }
  else{
    for(var i=0;i<bracketsConfig.length; i++){
      if(bracketsConfig[i] instanceof Array){
        for(var j=0;j<bracketsConfig[i].length;j++){
          brackets.push(bracketsConfig[i][j]);
        }
      }
    }

    for(var k=0; k<brackets.length;k++){
      if(k%2==0){
        bracketsEven.push(brackets[k]);
      } 
      else{
          bracketsOdd.push(brackets[k]);
      }
    }

  var same_bracket = [];
  
  for(var l=0; l<str.length;l++){
    
    var opening_bracket = false;
    
    for(var m=0; m<bracketsEven.length; m++){
    if(str[l]==bracketsEven[m]){
      if(same_bracket[same_bracket.length - 1] != str[l])
      {
        opening_bracket = true;	
        stackEven.push(str[l]);
        stackOdd.push(bracketsOdd[m]);
      }
      if(opening_bracket && stackEven[stackEven.length - 1] == stackOdd[stackOdd.length - 1]) same_bracket.push(str[l]);
      break;
    }
    }
    
    if (!opening_bracket && stackOdd[stackOdd.length - 1] == str[l])
    {
      stackEven.pop();
      stackOdd.pop();
      if (same_bracket[same_bracket.length - 1] == str[l]) same_bracket.pop();
    }
    
    else if (opening_bracket) continue;
    
    else return false;
  }

  if(!stackEven[0] || !stackOdd[0]) return true;
  
  return false;

  }
}
