for(let i = 1; i <= 100; i++){
    if(i % 3 == 0){
        if(i % 5 == 0){
            console.log(i, " is devisible by 3 and 5")
        }
        else console.log(i, " is devisible by 3")
    }
    else if(i % 5 == 0){
        if(i % 3 == 0){
            console.log(i, " is devisible by 3 and 5")
        }
        else console.log(i, " is devisible by 5")
    }
    else{
        console.log(i)
    }
}