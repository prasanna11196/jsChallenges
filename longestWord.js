// function longestWoord(str){
//     let words = str.split(" ");
//     let longestWord = '';
//     for(let word of words){
//         if(word.length > longestWord.length){
//             longestWord = word;
//         }
        
//     }
//     words.forEach(word => 
//         {if(word.length == longestWord.length){
//             console.log(word);
//         }
//     })
       
// }
// longestWoord('a cd ef b');


function longestWoords(str){
    let words = str.split(' ');
    console.log(words);
    let size = 0;
    let max = [''];
    for(let i = 0; i < words.length; i++){
        if(words[i].length >= max[max.length - 1].length){
            //size = words[i].length;
            if(max[max.length - 1].length < words[i].length){
                max = [];
                max.push(words[i]);
                //console.log(max);
            }
            else{
                max = [...max, words[i]];
            }
        }
        //console.log(max);
    
    }    
    return [...max];
}
console.log(longestWoords('a bc f hjk lmn de'))
