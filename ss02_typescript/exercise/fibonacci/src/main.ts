function fibonacciNumber(n: number): number {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return fibonacciNumber(n - 2) + fibonacciNumber(n - 1);
    }
}

function isFibonacci(numb: number): boolean {
    let flag = false;
    for (let i = 0; i <= numb; i++) {
        if (fibonacciNumber(i) === numb) {
            flag = true;
            break;
        }
    }
    return flag;
}

let array = [1, 5, 9, 2, 6, 15, 19, 35, 51, 53];

let arrayFibonacci = [];

let sum = 0;

for (let number of array) {
    if (isFibonacci(number)) {
        // arrayFibonacci.push(number);
        sum += number;
    }
}

console.log(`Dãy ban đầu: `);
for (let number of array) {
    console.log(number)
}

// console.log("Dãy fibonacci: " + arrayFibonacci.toString());

console.log(`Tổng các số fibonacci: ` + sum);
