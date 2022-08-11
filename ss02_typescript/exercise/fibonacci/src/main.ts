function fibonacciNumber(n: number): number {
    if (n == 0 || n == 1) {
        return 1;
    } else {
        return fibonacciNumber(n - 2) + fibonacciNumber(n - 1);
    }
}

function isFibonacci(numb: number): boolean {
    let flag = false;
    for (let i = 0; i <= numb; i++) {
        if (fibonacciNumber(i) == numb) {
            flag = true;
            break;
        }
    }
    return flag;
}

let arrayFibonacci = [];

let sum = 0;

for (let i = 0; i < 50; i++) {
    if (isFibonacci(i)) {
        arrayFibonacci.push(i);
        sum += i;
    }
}

for (let i = 0; i < arrayFibonacci.length; i++) {
    console.log(arrayFibonacci[i]);
}

console.log("Tổng số fibonacci trong mảng: " + sum);
