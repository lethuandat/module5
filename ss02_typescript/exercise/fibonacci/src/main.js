function fibonacciNumber(n) {
    if (n == 0 || n == 1) {
        return 1;
    }
    else {
        return fibonacciNumber(n - 2) + fibonacciNumber(n - 1);
    }
}
function isFibonacci(numb) {
    var flag = false;
    for (var i = 0; i <= numb; i++) {
        if (fibonacciNumber(i) == numb) {
            flag = true;
            break;
        }
    }
    return flag;
}
var arrayFibonacci = [];
var sum = 0;
for (var i = 0; i < 50; i++) {
    if (isFibonacci(i)) {
        arrayFibonacci.push(i);
        sum += i;
    }
}
for (var i = 0; i < arrayFibonacci.length; i++) {
    console.log(arrayFibonacci[i]);
}
console.log("Tổng số fibonacci trong mảng: " + sum);
