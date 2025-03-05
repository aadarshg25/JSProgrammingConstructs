function isPalindrome(num) {
    let originalNum = num;
    let reversedNum = 0;

    while (num > 0) {
        let digit = num % 10;  
        reversedNum = (reversedNum * 10) + digit;
        num = Math.floor(num / 10);
    }

    return originalNum === reversedNum;
}

// Test the function
let num1 = 121, num2 = 123121;

console.log(`${num1} is ${isPalindrome(num1) ? "" : "not "}a palindrome`);
console.log(`${num2} is ${isPalindrome(num2) ? "" : "not "}a palindrome`);
