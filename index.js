function reS(resValue) {
    let resdValue = "";
    resValue.split("").forEach((char) => {
        resdValue = char + resdValue;
    });
    return resdValue;
}

console.log(reS("hi"));

var hello = "hello";
console.log(hello);

hello = "Hello World";
console.log(hello);

if (1) {
    let world = "HelloWorld";
    console.log(world);
}

const cyan = "cyans";
console.log(cyan);
cyan = "new cyans"

let str1 = "Hello ";
let str2 = "World";
console.log(str1 + str2);
console.log(str1 + "Big " + str2);

let num1 = 1;
let num2 = "5";
console.log(num1 + num2);
console.log(num1 + 1);

let str1 = "JavaScript";
let str2 = "fun";
console.log(`I am writing code in ${str1}.`);
console.log(`Formatting in ${str1} is ${str2}.`);

let boolean1 = true;

console.log(`1 + 1 is ${1+1}.`);
console.log(`The opposite of true is ${!boolean1}!1`);

let str = 'true';
console.log(typeof(str));

let str1 = 0 == ''; //type coerced, only 0 equals to true
let str2 = 'abc' === 'abc'; //type respected
console.log(str2);

const people = ["John", "Lisa", "Peter"];
const one = new Number(1);
const str = "Hello World";
const b = true;
const person = {
    firstName: "Linus",
    lastName: "Torvalds"
};

function sayHello(person) {
    console.log("Hello " + person.firstName);
}
console.log("------type of------");
console.log(typeof(people)); //object
console.log(typeof(one));
console.log(typeof(str));
console.log(typeof(b));
console.log(typeof(person));
console.log(typeof(sayHello));


console.log("------instanceof------");
console.log(people instanceof Array);
console.log(one instanceof Number);
console.log(str instanceof String);
console.log(b instanceof Boolean);
console.log(person instanceof Object);
console.log(sayHello instanceof Function);

let num1 = 300;
console.log(Math.PI);
console.log(Math.sqrt(num1)); //Square root
console.log(num1 + 100);
console.log(num1 - 100);
console.log(num1 * 100);
console.log(num1 / 100);
console.log(++num1); //Increment
console.log(--num1); //Decrement

const num1 = '150';
console.log(parseInt('1.5'));
console.log(parseInt(num1));
console.log(parseInt('Hello'));
console.log(parseInt('0xA')); //Hexadecimal number

console.log(parseFloat('1.5'));
console.log(parseInt(`${1+1}`));

const num2 = 114.514;
console.log(num2.toString());
console.log((0xf).toString());

throw 'myException';
throw true;

try {
    // criticalCode();
    throw "Error throwed"
} catch (ex) {
    console.log("Got an error!");
    logError(ex);
} finally {
    console.log("Finally will run always!");
}

function criticalCode() {
    throw "throwing an exception";
    // console.log("Hello,There is no error");
}

function logError(theException) {
    console.log(theException);
}
console.log("\n**********Throwing Exceptions*********\n");
throw 'myException';
throw true;

// Try...Catch
console.log("\n**********Try...Catch*********\n");
try {
    criticalCode();
} catch (ex) {
    console.log("Got an error");
    logError(ex);
}

// Throwing in Try..Catch
console.log("\n*********Throwing in Try..Catch*******\n");
try {
    throw "An exception that is thrown every time";
} catch (ex) {
    console.log("Got an error");
    logError(ex);
}

// Try..Catch..Finally
console.log("\n*********Try..Catch..Finally*******\n");
try {
    throw "An exception that is thrown every time";
} catch (ex) {
    console.log("Got an error");
    logError(ex);
} finally {
    console.log("Code that always will run");
}

// Start at 1970.01.01
const now = new Date();
now.setFullYear(2022);
now.setMonth(0);
now.setDate(28);
now.setHours(17);
now.setMinutes(17);
now.setSeconds(59);
console.log(now);
console.log(`Day of Week :${now.getDay()}`);
console.log(`Date :${now.getDate()}`);
console.log(now.getTime()); //Since 1970.01.01 to now with millionsecond
console.log(now.getFullYear());

const randomDate = new Date(2022, 0, 28, 17, 28, 20); //2020.01.28 17:28:20
const win95Launch = new Date(1995, 7, 24);
console.log(randomDate);
console.log(win95Launch);

const status1 = 400;
if (status1 == 200) {
    console.log("OK!")
}
// ===
if (status1 === 200) {
    console.log('OK!');
} else if (status1 === 400) {
    console.log('Error');
} else {
    console.log('Unknown status');
}
// if-ternary
const statv = 400;
let message = '';
if (statv === 200) {
    message = 'OK!';
} else {
    message = 'Error!';
}
const message = (statv === 200) ? 'OK!' : 'Error!';
console.log(message);

const namee = '';
if (!namee) {
    console.log('No name');
} else {
    console.log('We have a name!');
}

const namee = 'error';
if (namee.toLocaleUpperCase() === 'ERROR') {
    console.log('Something went wrong');
} else {
    console.log('Looks great');
}

const statuss = 200;
if (statuss === 200) {
    console.log('OK!');
} else if (statuss === 400 || statuss === 500) {
    console.log('Error!');
} else {
    console.log('Unknown Status');
}


const statuss = 401;
switch (statuss) {
    case 200:
        console.log('OK!');
        break;
    case 400: //or
    case 500: //or
        console.log('Error');
        break;
    default: //else
        console.log('Unknown Status');
        break;
}

let arrayLength = 5;
let arr1 = [];
let arr2 = Array(arrayLength);
console.log(arr1.length);
console.log(arr2.length);
arr2[3] = 'This is value';
console.log(arr2[3]);
console.log(arr2[arr2.length - 2]);

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr2 = ['Hello', 'Hi', 'Bye', 'GoodBye'];
let arr3 = arr1.concat(arr2);
console.log(arr3);
console.log(arr1.push('New Value'));
arr1.unshift('New Value');
console.log(arr1);
console.log(arr1.pop());
arr1.shift();
arr1.shift();
arr1.shift();
console.log(arr1);

let arr1 = ['1', '2', '3', '4'];
let index = 0;
while (index < arr1.length) {
    console.log(arr1[index]);
    index++;
}
for (let index = 0; index < arr1.length; index++) {
    console.log(arr1[index]);
}
for (const index of arr1) {
    console.log(arr1[index - 1]);
}