function nbYear(p0, percent, aug, p) {
    let year;
    let pn;
   for(year = 1; ; year++){
    pn = p0 + (p0 * percent / 100) + aug;
    p0 = pn;
    if(pn >= p){
       return year;
    }
   }
}

console.log(nbYear(1500, 5, 100, 50000));