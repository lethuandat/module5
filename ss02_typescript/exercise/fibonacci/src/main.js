function fibonacciNumber(n) {
    if (n == 0 || n == 1) {
        return 1;
    }
    else {
        return fibonacciNumber(n - 2) + fibonacciNumber(n - 1);
    }
}
var sum = 0;
console.log("10 số fibonacci đầu tiên là:");
for (var i = 1; i <= 10; i++) {
    console.log(fibonacciNumber(i));
    sum += fibonacciNumber(i);
}
console.log("Tổng 10 số fibonacci đầu tiên: " + sum);
