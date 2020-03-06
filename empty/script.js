// This is a comment. Start typing here to add more script. 

// Keep in mind that Javascript will take the last line first -- so if you write over your old code later in the file,
// It will only run the later code.
console.log("Nicar 2020")

var first_variable = 5;
console.log(first_variable)

var array_variable = [6,15,2,36,420]
console.log(array_variable)

//arrays in java start at 0
console.log(array_variable[0])

//looping an array
//i++ goes through each variable in the list, aka here variables 1-4
for (i=0; i<5; i++){
	console.log(array_variable[i]);
}

//looping with for each
array_variable.forEach(function(element) {
	console.log(element + 5)
})

//json is javascriptoriented notation; just shorthand
//dictionary (python lol) or array dictionary
var pets = [
	{
		"Name": "Princess Mia",
		"Type": "cat",
		"Age": 3,
		"Color": "orange",
	},
	{
		"Name": "Willy",
		"Type": "cat",
		"Age": 6,
		"Color": "grey",
	},
	{
		"Name": "Sophie",
		"Type": "dog",
		"Age": 4,
		"Color": "brown",
	},
]

for (i=0; i<3; i++){
	console.log(pets[i]);
}