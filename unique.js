// // using array
// function unique(str){
//     let values = [];
//     for (let letter of str){
        
//         if(values.indexOf(letter) !== -1){
//             return false;
//         }
//         values.push(letter);
//         }
//     return true;
// }
// console.log(unique('abcdf'));



// // using object
// function unique(str){
//     let values = {};
//     for(let letter of str){
//         if(values[letter]){
//             return false;
//         }
//         values[letter] = 'exists' ;
//         }
//     return true;
// }
// console.log(unique('abcdbf'));



// // using lastIndexOf
// function unique(str){
//     for (let i = 0; i < str.length; i++) {
//         if(str.lastIndexOf(str[i]) !== i){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(unique('abcdpqr'));


// using set()
function unique(str){
    return new Set(str).size === str.length;
}
console.log(unique('abcda'));