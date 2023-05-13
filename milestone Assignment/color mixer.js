function mixColors(color1, color2) {
    let result;
    switch(color1) {
      case 'red':
        switch(color2) {
          case 'blue':
            result = 'purple';
            break;
          case 'yellow':
            result = 'orange';
            break;
          default:
            result = 'Invalid color combination';
            break;
        }
        break;
      case 'blue':
        switch(color2) {
          case 'yellow':
            result = 'green';
            break;
          case 'red':
            result = 'purple';
            break;
          default:
            result = 'Invalid color combination';
            break;
        }
        break;
      case 'yellow':
        switch(color2) {
          case 'red':
            result = 'orange';
            break;
          case 'blue':
            result = 'green';
            break;
          default:
            result = 'Invalid color combination';
            break;
        }
        break;
      default:
        result = 'Invalid color combination';
        break;
    }
    console.log(result);
  }
  
  mixColors('red', 'blue'); 
  mixColors('blue', 'red'); 
  mixColors('red', 'yellow'); 
  mixColors('yellow', 'red'); 
  mixColors('blue', 'yellow');
  mixColors('yellow', 'blue'); 
  mixColors('green', 'red');
  