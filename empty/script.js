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


//this actually makes something show up!
document.getElementById('hello').innerHTML = 'Your first front-end Javascript!';

//create new elements in HTML
var new_element = document.createElement('button')
new_element.innerHTML = "Let's create a button!"
document.getElementById('create-button').append

//plug-ins can advance java's abilities
// popular ones: jquery, datatables, leaflet, D3

//Things to expand on this - put data into a table! Convert a csv into a json and console.log it; create an <input> textbox and display result when user clicks button
