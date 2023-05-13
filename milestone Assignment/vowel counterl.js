function countVowels(name) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
  
    for (let i = 0; i < name.length; i++) {
      if (vowels.includes(name[i].toLowerCase())) {
        count++;
      }
    }
  
    return count;
  }
  
  let name1 = "John Doe";
  let name2 = "Jane Smith";
  
  console.log(countVowels(name1)); 
  console.log(countVowels(name2)); 
  