function capitalize(str){
    let words = str.split(' ');
    let capital = words.map(word =>{
        return word.slice(0,1).toUpperCase() + word.slice(1);
    });
    return capital.join(" ");
}
console.log(capitalize('you are a wizard harry'));