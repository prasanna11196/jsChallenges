function dirReduc(arr){
    // let dir = [];
    // let arrv = [];
    // let arrh = [];
    // let north = arr.filter(item => item === 'NORTH');
    // let south = arr.filter(item => item === 'SOUTH');
    // let east = arr.filter(item => item === 'EAST');
    // let west = arr.filter(item => item === 'WEST');
    // let hd;
    // let vd;
    // //console.log(north.length - south.length);
    // if(north.length > south.length){
    //   dir = arr.filter(item => item !== 'SOUTH');
    //   //console.log(dir);
    //   for(let i = 0; i < south.length; i++){
    //     vd = dir.indexOf('NORTH');
    //     //console.log(vd);
    //     dir.splice(vd, 1);
    //     //console.log(dir);
    //   }
      
    // }else if(north.length == south.length){
    //   dir = arr.filter(item => item !== 'SOUTH');
    //   dir = dir.filter(item => item !== 'NORTH');
    // }else{
    //   dir = arr.filter(item => item !== 'NORTH');
    //   for(let i = 0; i < north.length; i++){
    //     vd = dir.indexOf('SOUTH');
    //     dir.splice(vd, 1);
    //   }  
    // }
    
    // if(east.length > west.length){
    //   dir = dir.filter(item => item !== 'WEST');
    //   for(let i = 0; i < west.length; i++){
    //     hd = dir.indexOf('EAST');
    //     dir.splice(hd, 1);
    //   }
    // }else if(east.length == west.length){
    //   dir = dir.filter(item => item !== 'EAST');
    //   dir = dir.filter(item => item !== 'WEST')
    // }else{
    //   dir = dir.filter(item => item !== 'EAST');
    //   for(let i = 0; i < east.length; i++){
    //     hd = dir.indexOf('WEST');
    //     dir.splice(hd, 1);
    //   }
    // }
    // return dir;

    for(let i = 0; i < arr.length; i++){
      for(let j = 0; j < arr.length; j++){
      if(arr[j] == 'NORTH' && arr[j+1] == 'SOUTH'){
        arr.splice(j,2);
        j--;
      }else if(arr[j] == 'SOUTH' && arr[j+1] == 'NORTH'){
        arr.splice(j,2);
        j--;
      }else if(arr[j] == 'EAST' && arr[j+1] == 'WEST'){
      arr.splice(j,2);
      j--;
      }else if (arr[j] == 'WEST' && arr[j+1] == 'EAST'){
        arr.splice(j,2);
        j--;
      }else{
        continue;
      }
    }
  }
    return arr;
}
  console.log(dirReduc(['SOUTH', 'NORTH', 'WEST', 'EAST', 'SOUTH', 'NORTH', 'NORTH', 'EAST', 'WEST', 'EAST', 'NORTH', 'SOUTH', 'WEST', 'EAST']));