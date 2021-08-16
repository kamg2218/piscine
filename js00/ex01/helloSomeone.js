export default function helloSomeone(str) {
	if (typeof str === "string" && str === "")
		console.log('Who are you?');
	else if (typeof str === "string")
		console.log('Hello', str + '!');
	else if (str === null)
		console.log('I am null and void');
	else if (typeof str === "number" && str <= 0)
		console.log('I am Benjamin Button!');
	else if (typeof str === "number" && !(isNaN(str)))
		console.log('My age is', str);
	else if (str === undefined)
		console.log('Nobody can define me!');
	else if (isNaN(str))
		console.log('Age is just a number');
}
