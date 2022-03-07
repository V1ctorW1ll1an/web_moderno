(function () {
    console.log(exe4(4));
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

function name(params) {}
