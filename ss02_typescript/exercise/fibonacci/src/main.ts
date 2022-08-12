function fibonacciNumber(n: number): number {
    if (n == 0) {
        return 0;
    }

    if (n == 0 || n == 1) {
        return 1;
    } else {
        return fibonacciNumber(n - 2) + fibonacciNumber(n - 1);
    }
}

let sum = 0;

console.log("10 số fibonacci đầu tiên là:");

for (let i = 0; i < 10; i++) {
    console.log(fibonacciNumber(i))
    sum += fibonacciNumber(i);
}

console.log("Tổng 10 số fibonacci đầu tiên: " + sum);
