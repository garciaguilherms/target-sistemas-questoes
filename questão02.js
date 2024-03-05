function fibonacciSequence(n) {
    const sequence = [0, 1];
    for (let i = 2; i <= n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    console.log('Sequência gerada:',sequence);
    return sequence;
}

function isAFibonacci(n) {
    const fibonacci = fibonacciSequence(20);
    if (fibonacci.includes(n)) {
        return 'Pertence a sequência';
    }
    return 'Não pertence a sequência';
}

console.log(isAFibonacci(20));