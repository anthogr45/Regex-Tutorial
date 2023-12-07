// // Matching against a string:
// const regex1 = /[a-z]+/;
// const string1 = "Hello World";
// const match = string1.match(regex1);
// console.log(match); // Output: ["ello"]

// In this example, the match() method is used to match the regular expression against the string. It returns an array containing the matched substring(s).


// Replacing parts of a string:
// const regex = /[A-z]+/;
// const string = "Hello World ";
// const replacedString = string.replace(regex, "Goodbye");
// console.log(replacedString); // Output: "Goodbye World"

// In this example, the replace() method is used to replace the substring(s) that match the regular expression with the specified replacement string.

// const regex = /[a-z]+/;
// const string = "Hello World";
// const replacedString = string.replace(regex, "Goodbye");
// console.log(replacedString); // Output: "Goodbye World"

// const regex = /[A-z]+/;
// const string = "Hello World ";
// const replacedString = string.replace(regex, "Goodbye");
// console.log(replacedString); // Output: "Goodbye World"

// let str = 'AnthonyG';
// console.log(/^A/.test(str));

// let str = 'AnthonyG';
// console.log(/G$/.test(str));

// let str = 'Bootcamp 2023';
// let re = /\d{4}/;

// let result = str.match(re);

// console.log(result);

// let str = 'I am in the bootcamp of July31 2023';
// let re = /\d{2,4}/g;

// let result = str.match(re);
// console.log(result);


// let phone = "+1-(613)-123-4567";
// let result = phone.match(/\d+/g);

// console.log(result);

// let str = 'Is this color or colour?';
// let result = str.match(/colou?r/g);

// console.log(result);


// let str = 'Jason was not JasonX the killer';
// let re = /Jason\w*/g

// let results = str.match(re);

// console.log(results);

let phone = '+1-(613)-123-4567';
let re = /\d/g;

let numbers = phone.match(re);
let phoneNo = numbers.join('');

console.log(phoneNo);
