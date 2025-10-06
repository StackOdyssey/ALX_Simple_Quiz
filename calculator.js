document.addEventListener("DOMContentLoaded", function () {
    function add(number1, number2) {
        return number1 + number2;
    }

    function subtract(number1, number2) {
        return number1 - number2;
    }

    function multiply(number1, number2) {
        return number1 * number2;
    }

    function divide(number1, number2) {
        return number1 / number2;
    }

    document.getElementById("add").addEventListener("click", function () {
        const number1 = parseFloat(document.getElementById("number1").value)
        const number2 = parseFloat(document.getElementById("number1").value)
        const result = add(number1, number2);
        document.getElementById("calculation-result").textContent = result;
    });

    document.getElementById("subtract").addEventListener("click", function () {
        const number1 = parseFloat(document.getElementById("number1").value)
        const number2 = parseFloat(document.getElementById("number1").value)
        const result = subtract(number1, number2);
        document.getElementById("calculation-result").textContent = result;
    });

    document.getElementById("multiply").addEvenetListener("click", function () {
        const number1 = parseFloat(document.getElementById("number1").value) || 0;
        const number2 = parseFloat(document.getElementById("number2").value) || 0;
        const result = multiply(number1, number2);
        document.getElementById("calculation-result").textContent = result;

    });
    document.getElementById("divide").addEventListener("click", function () {
        const number1 = parseFloat(document.getElementById("number1").value) || 0;
        const number2 = parseFloat(document.getElementById("number2").value) || 0;
        const result = divide(number1, number2);
        document.getElementById("calculation-result").textContent = result;
    });

});