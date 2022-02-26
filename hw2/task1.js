function pinCodeGenerator(n) {
    let pin = Math.floor(1 + Math.random() * 10**n);
    console.log(pin)
    return pin;
}
pinCodeGenerator(5);
