function moveZeros (arr) {
    let arr1 = [];
    let count = 0;
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === 0){
        count += 1;        
      }
      else{
        arr1.push(arr[i]);
      }
      //console.log(arr1, count);
    }
    for(let i = 1; i <= count; i++){
        arr1.push(0);
    }
    return arr1;
  }


// function moveZeros (arr) {
//     let arr1 = [];
//     let count = 0;
//     let array = arr.map(item => {
//       if(item.charCodeAt(0) !== 48){
//         arr1.push(arr[i]);
//       }
//       else{
//          count += 1;
//       }
      
//     })
//     for(let i = 1; i <= count; i++){
//         arr1.push(0);
//     }
//     return array;
//   }
console.log(moveZeros([1,false,null,2,0,1,0,1,0,3,0,1])); 

let va = [1,2,3,false]
let ba = va.map(item => {
    return item.toString() ;
})
console.log(ba);
