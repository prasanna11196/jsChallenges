// const binaryArrayToNumber = arr => {
//     var num = 0;
//     for (var i = 0, exponent = 3; i < arr.length; i++) {
//       if (arr[i]) {
//         num += Math.pow(2, exponent);
//       }
//       exponent--;
//     }
//     return num;
//   };

  const binaryArrayToNumber = arr => {
    return parseInt(arr.join(""), 2)
  };

  console.log(binaryArrayToNumber([0,0,1,0]));