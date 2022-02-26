function validatePhoneNumber(n){

    let result;
    const myFunc = num => Number(num);
    const arr = Array.from(String(n), myFunc);
    
    for(n of arr){
        if (n == 1 || n == 2 || n == 3 || n == 4 || n == 5 || n == 6 || n == 7 || n == 8 || n == 9 || n == " "){
            result = true;
        }
        else {
            result = false;
            break;
        }
    }
    
    console.log(result)
}
validatePhoneNumber("12 32 21")