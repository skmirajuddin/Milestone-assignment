function capitalizeName(name) {
    let capitalized = (name[0] >= 'a' && name[0] <= 'z') ? name[0].toUpperCase() + name.slice(1) : name;
    return capitalized;
  }
  
  let name1 = "john";
  let name2 = "Mary";
  
  console.log(capitalizeName(name1));
  console.log(capitalizeName(name2)); 
  