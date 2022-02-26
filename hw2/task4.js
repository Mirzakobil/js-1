const vovelsCounter = (str) => {
    const vovels = ['a', 'e', 'i', 'o', 'u', "A", "E", "I", "O", "U"]
    let counter = 0
    for(letter of str){
     if(vovels.includes(letter)){
         console.log(letter)
         counter = counter + 1
      }
    }
    console.log(counter)
    return counter
}

vovelsCounter('The current directory is AD-123')
// expected output → 8
// actual output → 7 vovels list didn't contain capital letters