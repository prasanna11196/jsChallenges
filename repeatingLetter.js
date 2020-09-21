// program to find the word with highest number of repeating letters
function repeat(str) {
    let words = str.toLowerCase().split(' ');
    let arr = [];
    // count : The number of times a letter is repeated in the word.
    let count = 0;
    // countArr : stores 'count' value for each word.
    let countArr = [];   

    console.log(words);

    for(let word of words){   
        // count set to zero after each word     
        count = 0;
        for(let letter of word){
            console.log(letter);            
            if(arr.indexOf(letter) !== -1){
                count = count + 1;;
                console.log(count);
            }
            arr.push(letter);            
        }
        countArr.push(count);
        arr = []        
    }
    console.log(countArr);

    // big : Largest vale in the countArr
    let big = 0;
    let indx = 0;  
    for(let i = 0; i < countArr.length; i++){
        if (countArr[i] > big){
            big = countArr[i];
            indx = i;
        }
    }
    console.log(words[indx]);
}

repeat('Gryffindor Slytherin Hufflepuff Ravenclaw');
