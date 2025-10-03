function translatePigLatin(str) {
  let index=str.length;
  for (let x of str){
    if ("aeiou".includes(x)){
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