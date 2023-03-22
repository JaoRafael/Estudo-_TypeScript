function identity(arg) {
    console.log(typeof arg);
    return "Esse é o resultado final " + arg.toString();
}
console.log(identity('texto'));
console.log(identity(5));
console.log(identity(true));
