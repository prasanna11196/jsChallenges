function songDecoder(song){
    // arr = song.split('WUB');
    // let arr1 = [];
    // for(let i = 0; i < arr.length ; i++){
    //   if(arr[i] === 'W' &&  arr[i+1] === 'U'  && arr[i+2] === 'B'){
    //     arr.splice(i , 3, " ");
    //   }
    //   console.log(arr);
    // }
    return song.replace(/(WUB)+/g," ").trim();
  }
  console.log(songDecoder('MEWUBIWUBWUBAMWUBXWUB'));