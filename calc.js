function calc() {

    var a = parseInt(document.querySelector("#value1").value);
    var b = parseInt(document.querySelector("#value2").value);
    var select = (document.querySelector("#select").value);
    var calculate;

    if (select == "add") {
        calculate = a + b;
    } else if (select == "minus") {
        calculate = a - b;
    } else if (select == "multiply") {
        calculate = a * b;
    } else if (select == "divide") {
        calculate = a / b;
    }
    document.querySelector('#answer').innerHTML = calculate;
}