(function () {
    console.log("Case1: ", exe5(0, 0));
    console.log("Case2: ", exe5(0, "0"));
    console.log("Case3: ", exe5(5, 0));
})();

function exe1(argument) {
    return `Olá, ${argument}!`;
}

function exe2(idade) {
    return idade * 365;
}

function exe3(horas, valor) {
    return `Salário igual a R$ ${horas * valor}`;
}

function exe4(number) {
    let months = [
        "",
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    return months[number];
}

function exe5(firstNumber, secondNumber) {
    return firstNumber > secondNumber || firstNumber === secondNumber;
}

