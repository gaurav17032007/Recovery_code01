let num;

do {
    num = prompt("Enter a number");
    num = Number(num);
} while (num <= 10 || num % 3 !== 0 || num === 0);