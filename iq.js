function iq(str){
    let even = 0;
    let odd = 0;
    let evenArr = [];
    let oddArr = [];
    numbers = str.split(" ");

    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 == 0){
            even += 1;
            evenArr.push(numbers[i]);
        }else{
            odd += 1;
            oddArr.push(numbers[i]);
        }        
    }
    
    if(evenArr.length == 1){
        return numbers.indexOf(evenArr[0]) + 1;
    }else{
        return numbers.indexOf(oddArr[0]) + 1;
    }
}

console.log(iq("2 4 6 7 8 10"));
console.log(iq("1 3 5 11 25 30 41 43 55"));