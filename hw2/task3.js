const arr =  ["НПП Прізвище Кіл-ть Приблизно","______________________в_ базіпо_Україні", "0-rt-rgfr", "8484fjdfkf", "МЕЛЬНИК","ШЕВЧЕНКО","БОЙКО","КОВАЛЕНКО","БОНДАРЕНКО","ТКАЧЕНКО","КОВАЛЬЧУК","КРАВЧЕНКО","ОЛІЙНИК"]
const invalidValue = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "_"]


for(str of arr){
    for(letter of str){
        if (invalidValue.includes(letter)){
            console.log(arr.indexOf(str))
            console.log(str)
            console.log(letter)
            const index = arr.indexOf(str);
            delete arr[index]
            // arr.splice(index, 1)
            break;
        }
    }
}
console.log(arr)
