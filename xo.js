// function XO(str) {
//     console.log(str.toLowerCase().split('x'));
//     console.log(str.toLowerCase().split('o'));
//     return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
// }
// console.log(XO('oanoxmoxxa'));


// function XO(str) {
//     let x = str.match(/x/gi);
//     let o = str.match(/o/gi);
//     console.log(x,o);
//     return (x.length) === (o.length);
// }
//   console.log(XO('oanoxmoxxa'));


//   const XO = str => {
//     str = str.toLowerCase().split('');
//     return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
// }


// function XO(str) {
//     var a = str.replace(/x/gi, ''),
//         b = str.replace(/o/gi, '');
//     return a.length === b.length;
// }


// function XO(str) {
//     return str.replace(/o/ig, '').length == str.replace(/x/ig, '').length
//   }

  

function XO(str) {
    var sum = 0;
    for(var i=0; i<str.length; i++){
      if(str[i].toLowerCase() == 'x') sum++;
      if(str[i].toLowerCase() == 'o') sum--;
    }
    return sum == 0;
}