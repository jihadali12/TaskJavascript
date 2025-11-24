
let count = 1;  
let rows = 4;

for (let i = 1; i <= rows; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line += count + " ";  
        count++;               
    }
    console.log(line.trim());  
}
