** start of script.js **

function translatePigLatin(str) {
  function isVowel(v){
    return "aeiou".split("").includes(v)
  };
  let index=str.length;
  for (let x of str){
    if (isVowel(x)){
      index = str.indexOf(x);
      break
    };
  };
  if(index==0){return str+'way'};
  let start = str.substring(0,index);
  let end = str.substring(index,str.length);
  return end+start+'ay'
};

translatePigLatin("consonant");

** end of script.js **

