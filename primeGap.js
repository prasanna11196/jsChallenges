function gap(g, m, n) {
    let prime = [];
    let flag = 1;
    
      for(i = m; i <= n; i++){
        flag = 1;
        for(j = 2; j <= Math.floor(Math.sqrt(i)); j++){
          if(i%j === 0){
            flag = 0;
            break;
          }
        }
        if(flag === 1){
          prime.push(i);
          if(prime[prime.length - 1] - prime[prime.length - 2] === g){
            return [prime[prime.length - 2], prime[prime.length - 1]];
          }
        }
      }
    return null;
  }
console.log(gap(4,100,110));
console.log(gap(6,100,110));
console.log(gap(10,130303, 230307));
console.log(gap(10,300,400));
