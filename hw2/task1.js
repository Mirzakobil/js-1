function pinCodeGenerator(n) {
    const pin = Math.floor(Math.random() * 10**n);
    console.log(pin)
    return pin;
}
pinCodeGenerator(5);
