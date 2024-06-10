//Define variables;
let mango = "mango";
let uppercasemango = "MANGO";
let ten = 10;
let twenty = 20;
let vegetables = ["turnip","cucumber","mint"];

//Test for equality and inequality with strings;

console.log("Is mango is eqaul to mango?");
console.log(mango == "mango");

console.log("\nIs mango is not equal to mango?");
console.log(mango != "mango");

//Test uding lowercase Function;

console.log("\nIs MANGO is equal to mango after converting to lowercase");
console.log(uppercasemango.toLowerCase() == "mango");

console.log("\nIs MANGO is not equal to mango after coverting to uppercase");
console.log(uppercasemango.toLowerCase() != "mango");

//Numerical tests;

//Equal to
console.log("\nIs ten is equal to twenty?");
console.log(ten == twenty);

//Not Equal to
console.log("\nIs ten is not equal to twenty?");
console.log(ten != twenty);

//Greator than
console.log("\nIs ten is greator than Zero?");
console.log(10 > 0);

//Less than
console.log("\nIs twenty is less than ten?");
console.log(20 < 10 );

//Greator than or Equal to;
console.log("\nIs ten is greator than or equal to 5?");
console.log(ten >= 5 );

//Less than or Equal to;
console.log("\nIs twenty is less than or equal to 10?");
console.log(twenty <= 10);

//Tests using "and" and "or" Operators;

//Using && (and)
console.log("\ntwenty is not equals to ten and twenty is greator than 10");
console.log(twenty != 10 && twenty > 10);

console.log("\ntwenty is not equals to ten and twenty is greator than 30");
console.log(twenty != 10 && twenty > 30);


//Using || (or)
console.log("\ntwenty is greator than 50 OR twenty is equal to 20");
console.log(20 > 50 || 20 == 20);

console.log("\ntwenty is greator than 50 OR twenty is not equal to 20");
console.log(20 > 50 || 20 != 20);

//Test whether an item is include in array;
console.log("\nIs turnip include in my vegetables array");
console.log(vegetables.includes("turnip"));

console.log("\nIs turnip not include in my vegetables array");
console.log(!vegetables.includes("turnip"));
