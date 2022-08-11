function fibonacciNumber(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    else {
        return fibonacciNumber(n - 2) + fibonacciNumber(n - 1);
    }
}
function isFibonacci(numb) {
    var flag = false;
    for (var i = 0; i <= numb; i++) {
        if (fibonacciNumber(i) === numb) {
            flag = true;
            break;
        }
    }
    return flag;
}
var array = [1, 5, 9, 2, 6, 15, 19, 35, 51, 53];
var arrayFibonacci = [];
var sum = 0;
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var number = array_1[_i];
    if (isFibonacci(number)) {
        // arrayFibonacci.push(number);
        sum += number;
    }
}
console.log("D\u00E3y ban \u0111\u1EA7u: ");
for (var _a = 0, array_2 = array; _a < array_2.length; _a++) {
    var number = array_2[_a];
    console.log(number);
}
// console.log("Dãy fibonacci: " + arrayFibonacci.toString());
console.log("T\u1ED5ng c\u00E1c s\u1ED1 fibonacci: " + sum);
