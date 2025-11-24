function pandigital(num) {
    let strNum = num.toString();         
    for (let digit = 0; digit <= 9; digit++) {
        if (!strNum.includes(digit.toString())) {
            return false;                
        }
    }
    return true;                         
}


console.log(pandigital(98140723568910)); 
console.log(pandigital(90864523148909)); 
console.log(pandigital(1234567890));     