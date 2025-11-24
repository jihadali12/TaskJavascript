
let     Fullname = "  Jihad Ali Abdulrahman Aldabouqi   ";

console.log("Original Fullname:", `"${Fullname}"`);

console.log(Fullname.trim());

console.log(Fullname.trimStart());

console.log(Fullname.trimEnd());

console.log(Fullname.padStart(10,"*"));

console.log(Fullname.padEnd(10,"*"));

console.log(Fullname.charAt(2));

console.log(Fullname.charCodeAt(2));

console.log(Fullname.split(","));

console.log(Fullname.length);

console.log(Fullname.slice(2,6));

console.log(Fullname.substring(2,6));

console.log(Fullname.replace("Jihad","Mr.Jihad"));

console.log(Fullname.replaceAll("a","@"));

console.log(Fullname.toUpperCase());

console.log(Fullname.toLowerCase());

console.log(Fullname.concat("-"));

console.log(Fullname.indexOf("A"));
console.log(Fullname.lastIndexOf("a"));

console.log(Fullname.search("Ali"));

console.log(Fullname.match(/a/gi));

console.log(Fullname.matchAll(/a/gi));  

console.log(Fullname.includes("Abdulrahman"));

console.log(Fullname.startsWith("Jihad"));

console.log(Fullname.endsWith("qi"));

