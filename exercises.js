/*
If statements - Evaluates (or checks) a condition. If the condition is true, any statements in the subsequent code block are executed
*/
/*var today = new Date();

if(today === "Friday"){
  return "Let's Party!";
};*/

/*
If/else statements = Evaluates (or checks) a condition. If the condition is true, the first code block is executed. If the condition is false, the second code block is executed instead.
*/

/*if(today === "Friday"){
  return "Let's Party!";
}else{
  return "Get back to coding!";
};*/


/*
 * #1
 * Function - canVote
 * Create a function named `canVote` which will take a parameter: `age`.
 *
 *  @param Datatype: Number `age`
 *  @return Datatype: Boolean
 *
 * The function will return true if the number passed into the function is equal to or greater than Hawaii's voting age. Console.log your result.
*/
function canVote (age){

	return age >= 18;
}

console.log("** * * Problem 1 * * **");

console.log("canVote(22): " + canVote(22));
console.log("canVote(5): " + canVote (5));

console.log("--------------------------------------------------------------");

/*
 * #2
 * Function - login
 * Create a function named `login` which will take a parameter: `password`.
 *
 *  @param Datatype: String `password`
 *  @return Datatype: String
 *
 * The function will return the message: "Login Success!", if the string passed into the function is "test1234"
 * Console.log your result.
*/

console.log("** * * Problem 2 * * **");

function login(password){

	return password == "test1234";
}

console.log("login('test1234'): " + login("test1234"));
console.log("login('password'): " + login("password"));

console.log("--------------------------------------------------------------");

/*
 * #3
 * Function - isGreaterThan
 * Create a function named `isGreaterThan` which will take two parameters: `first` and `second`
 *
 *  @param Datatype: Number `first`
 *  @param Datatype: Number `second`
 *  @return Datatype: Boolean
 *
 * The function will return true if the first number is greater than the second.
 * Console.log your result.
*/

console.log("** * * Problem 3 * * **");

function isGreaterThan(first, second){

	return first > second;
}

console.log("isGreaterThan(4, 3): " + isGreaterThan(4, 3));
console.log("isGreaterThan(1, 3): " + isGreaterThan(1, 3));


console.log("--------------------------------------------------------------");

/*
 * #4
 * Function - mustBeTrue
 * Create a function named `mustBeTrue` which will take a parameter: `boo`.
 *
 *  @param Datatype: Boolean `boo`
 *  @return Datatype: Boolean
 *
 * The function will return true if the value passed into the function is "true".
 * Console.log your result.
*/

console.log("** * * Problem 4 * * **");

function mustBeTrue(boo){

	return boo === true;
}

console.log("mustBeTrue(10>2): " + mustBeTrue(10>2));
console.log("mustBeTrue(1>2): " + mustBeTrue(1>2));

console.log("--------------------------------------------------------------");

/*
 * #5
 * Function - bigBird
 * Create a function named `bigBird` which will take a parameter: `word`.
 *
 *  @param Datatype: String `word`
 *  @return Datatype: String
 *
 * The function will return the message "Word to Big Bird!", if the string passed into the function is a three-letter word. 
 * Console.log your result.
*/

console.log("** * * Problem 5 * * **");

function bigBird(word){

	if (word.length == 3){

		return "Word to Big Bird!";
	} else{

		return "Word to your mother.";
	}

}

console.log("bigBird('big'): " + bigBird('big'));
console.log("bigBird('bird'): " + bigBird('bird'));

console.log("--------------------------------------------------------------");

/*
 * #6
 * Function - isEqual
 * Create a function named `isEqual` which takes two parameters: `first` and `second`.
 *
 *  @param Datatype: String `first`
 *  @param Datatype: String `second`
 *  @return Datatype: String
 *
 * If the strings are equal, the function will return the message "You look mahvelous!" Otherwise, return the message: "I don't know who you are anymore." 
 * Console.log your result.
*/

console.log("** * * Problem 6 * * **");

function isEqual(first, second){

	if (typeof first === "string" && typeof second === "string"){
		
		if (first === second){

			return "You look mahvelous!";
		}
		else {

			return "I don't know who you are anymore.";
		}
	}
	else{

		return "Please enter strings as parameters.";
	}
}

console.log("isEqual('equal', 'equal'): " + isEqual("equal", "equal"));
console.log("isEqual('not', 'equal'): " + isEqual("not", "equal"));
console.log("isEqual(2, 'equal'): " + isEqual(2, "equal"));

console.log("--------------------------------------------------------------");

/*
 * #7
 * Function - notEqual
 * Create a function named `notEqual` which takes two parameters: `first` and `second`.
 *
 *  @param Datatype: String `first`
 *  @param Datatype: String `second`
 *  @return Datatype: String
 *
 * If the strings are not equal, the function will return the message "Opposites do attract." Otherwise, return the message: "Cause it's like you're my mirror." 
 * Console.log your result.
*/

console.log("** * * Problem 7 * * **");

	function notEqual(first, second){

	if (typeof first === "string" && typeof second === "string"){
		
		if (first !== second){

			return "Opposites do attract.";
		}
		else {

			return "Cause it's like you're my mirror.";
		}
	}
	else{

		return "Please enter strings as parameters.";
	}

	}

console.log("notEqual('not', 'equal'): " + notEqual("not", "equal"));
console.log("notEqual('equal', 'equal'): " + notEqual("equal", "equal"));
console.log("notEqual(2, 'equal'): " + notEqual(2, "equal"));

console.log("--------------------------------------------------------------");

/*
 * #8
 * Function - spareChange
 * Create a function named `spareChange` which takes a parameter: `money`.
 *
 *  @param Datatype: Number `money`
 *  @return Datatype: Boolean
 *
 * The function will return true if the number passed into the function is greater than 100, otherwise it will return false.
 * Console.log your result.
*/ 

console.log("** * * Problem 8 * * **");

function spareChange(money){

	return money > 100;
}

console.log("spareChange(101): " + spareChange(101));
console.log("spareChange(10): " + spareChange(10));

console.log("--------------------------------------------------------------");

/*
 * #9
 * Function - dirty30
 * Create a function named `dirty30` which takes three parameters: `one`, `two` and `three`.
 *
 *  @param Datatype: Number `one`
 *  @param Datatype: Number `two`
 *  @param Datatype: Number `three`
 *  @return Datatype: Boolean
 *
 * The function will return true if the sum of all the number values is greater than 30, otherwise it will return false.
 * Console.log your result.
*/ 

console.log("** * * Problem 9 * * **");

function dirty30(one, two, three){

	return (one + two + three) > 30;
}

console.log("dirty30(5, 15, 20): " + dirty30(5,15,20));
console.log("dirty30(5, 1, 20): " + dirty30(5,1,20));

console.log("--------------------------------------------------------------");

/*
 * #10
 * Function - evenStevens
 * Create a function named `evenStevens` which takes a parameter: `num`.
 *
 *  @param Datatype: Number `num`
 *  @return Datatype: Boolean
 *
 * The function will return true if the number passed in is an even integer, otherwise it will return false.
 * Console.log your result.
*/ 

console.log("** * * Problem 10 * * **");

function evenStevens(num){

	return num%2 == 0;
}

console.log("evenStevens(16): " + evenStevens(16));
console.log("evenStevens(61): " + evenStevens(61));

console.log("--------------------------------------------------------------");

/*
 * #11
 * Function - daClub
 * Create a function named `daClub` which takes two parameters: `cover` and `age`.
 *
 *  @param Datatype: Number `cover`
 *  @param Datatype: Number `age`
 *  @return Datatype: String
 *
 * If BOTH values are 21 or over, the function will return the message: "Welcome to the Legends Lounge." Otherwise, it will return the message: "Chuck E Cheese is across the street."
 * Console.log your result.
*/ 

console.log("** * * Problem 11 * * **");

function daClub(cover, age){

	if (cover >= 21 && age >= 21){

		return "Welcome to the Legends Lounge.";
	}
	else {

		return "Chuck E Cheese is across the street.";
	}
}

console.log("daClub(22, 30): " + daClub(22, 30));
console.log("daClub(2, 30): " + daClub(2, 30));

console.log("--------------------------------------------------------------");

/*
 * #12
 * Function - graduation
 * Create a function named `graduation` which takes two parameters: `credits` and `thesis`.
 *
 *  @param Datatype: Number `credit`
 *  @param Datatype: Boolean `thesis`
 *  @return Datatype: String
 *
 * If EITHER the number value is greater than or equal to 120 or the boolean value is true, then the function will return the message: "Congratulations on a job well done." Otherwise, return the message: "See you in summer school."
 * Console.log your result.
*/ 

console.log("** * * Problem 12 * * **");

function graduation(credits, thesis){

	if (credits >= 120 || thesis == true){

		return "Congratulations on a job well done.";
	}
	else {

		return "See you in Summer School.";
	}
}

console.log("graduation(140, true): " + graduation(140, true));
console.log("graduation(14, true): " + graduation(14, true));
console.log("graduation(14, false): " + graduation(14, false));

console.log("--------------------------------------------------------------");

/*
 * #13
 * Function - moneyTrain
 * Create a function named `moneyTrain` which takes a parameter: `speed`.
 *
 *  @param Datatype: Number `speed`
 *  @return Datatype: String
 *
 * The function will return the message: "You are riding Honolulu's Rail.", if the number value is less than 50, otherwise it will return the message: "You are riding an Amtrak.", if the number value is less than 100, and return the message: "Now you ballin' in the Shinkansen!", if the number value is greater than or equal to 100.
 * Console.log your result.
*/ 

console.log("** * * Problem 13 * * **");

function moneyTrain(speed){

	if (speed < 50){

		return "You are riding Honolulu's Rail.";
	}
	else if (speed < 100){

		return "You are riding an Amtrak.";
	}
	else {

		return "Now you ballin' in the Shinkansen!";
	}
}

console.log("moneyTrain(45): " + moneyTrain(45));
console.log("moneyTrain(95): " + moneyTrain(95));
console.log("moneyTrain(100): " + moneyTrain(100));

console.log("--------------------------------------------------------------");

/*
 * #14
 * Function - buyDoughnut
 * Declare a variable named `budget` and assign it with a number value that is greater than 20.
 * Declare a variable named `doughnutPrice` and assign it with a number value that is greater than 0 but less than 6.
 * Declare a variable named `doughnutBought` and assign it with a number value of 0.
 *
 * Create a function named `buyDoughnut` which takes NO parameters.
 * When the function is invoked, the budget will be decreased by the doughnutPrice and doughnutBought will increase by 1.
 * Console.log budget and doughnutBought.
 * Invoke your function again.
 * Console.log budget and doughnutBought again.
*/ 

console.log("** * * Problem 14 * * **");

var budget = 35;
var doughnutPrice = 4;
var doughnutBought = 0;

function buyDoughnut(){

	budget -= doughnutPrice;
	doughnutBought ++;

}

console.log("Starting Values: budget = " + budget + ", doughnutPrice = " + doughnutPrice + ", doughnutBought = " + doughnutBought);


buyDoughnut();

console.log("1 invoke of 'buyDoughnut': budget = " + budget + ", doughnutPrice = " + doughnutPrice + ", doughnutBought = " + doughnutBought);

buyDoughnut();

console.log("2 invokes of 'buyDoughnut': = " + budget + ", doughnutPrice = " + doughnutPrice + ", doughnutBought = " + doughnutBought);

console.log("--------------------------------------------------------------");

/*Final Boss*/
/*Create a function name dailySpecials which takes in a parameter: `special`.
Inside the function, create a switch statement that will check the daily specials of your favorite restaurant (or make up your own daily specials for each day of the week.*/



/*
For loops - A for loop checks a condition a specific number of times and allows us to execute a code block and evaluate a condition to determine if our loop should run again.

The for loop is made up for 3 parts:

1) Initialization (i.e. var i = 0;)
2) Condition (i.e. i<arr.length;)
3) Update (i.e. i++)
*/

var toyotaModels = ["Corolla", "Prius", "4 Runner", "Camry", "Land Cruiser"];

for (var i = 0; i<toyotaModels.length; i++){
   console.log("Toyota " + toyotaModels[i]);
}


/* 
 * #15
 * Create a for loop that will iterate 5 times and console.log the following:
 * "Player: 1"
 * "Player: 2"
 * "Player: 3"
 * "Player: 4"
 * "Player: 5"
*/
console.log("*    *   *   FINAL BOSS   *   *   *");
console.log("** * * Problem 15 * * **");

for (var i = 1; i<=5; i++){

	console.log("Player: " + i);
}

console.log("--------------------------------------------------------------");

/* 
 * #16
 * Create a for loop that will iterate and console.log each item in the array below:
*/
  var myFavFoods = ["lemon bar", "carrot cake", "nachos", "bacon cheeseburger", "ramen", "sweet potato fries", "chimichanga"];

console.log("** * * Problem 16 * * **");

for (var i = 0; i< myFavFoods.length; i++){

	console.log(myFavFoods[i]);
}

console.log("--------------------------------------------------------------");

/*
 * #17
 * Function - sumItUp
 * Declare a variable named `numArray` and assign it with an array of 5 random numbers of your choice.
 * Declare a variable named `total` and assign it with a number value of 0.
 * 
 * Create a function named sumItUp which takes a parameter: `arr`.
 * 
 *   @param Datatype: Array `arr`
 *   @return Datatype: Number
 * 
 * The function will loop through and add up all the values in the array that is passed into the function and return the total.
 * Console.log your result.
*/

console.log("** * * Problem 17 * * **");

var numArray = [2, 17, 8, 90, 5];
console.log("numArray = " + numArray);


function sumItUp(arr){

	var num = 0;
	for (i = 0; i< arr.length; i++){

		num += arr[i];
	}

	return num;
}

console.log("sumItUp(numArray): " + sumItUp(numArray));

console.log("--------------------------------------------------------------");

/*
 * #18
 * Function - allStars
 * Create a function named `allStars` which takes a parameter: `ballers`.
 *
 *  @param Datatype: Array `ballers`
 *  @return Datatype: Array
 *
 * The function will loop through the players array and will put all the even number indexed players in the `east` array and the rest in the `west` array.
 * Console.log both the east and west arrays.
*/ 
var players = ["Yao Ming", "BrookLin", " Jesus Shuttlesworth", "Manute Bol", "Sidney Deane", "World B Free"];

console.log("** * * Problem 18 * * **");

console.log("Version 1");

function allStars(ballers){

	var eastArr = [];
	var westArr = [];
	var e = 0;
	var w = 0;

	for (var i = 0; i < players.length; i++){
	
		if (i%2 === 0){
			eastArr[e] = players[i];
			e++;
		}
		else {
			westArr[w] = players[i];
			w++;
		}

	}
	console.log("East Array: " + eastArr);
	console.log("West Array: " + westArr);
}

allStars(players);

function allStars2(ballers){

	var eastArr = [];
	var westArr = [];

	for (var i = 0; i < players.length; i++){
	
		if (i%2 === 0){
			eastArr.push(players[i]);
		}
		else {
			westArr.push(players[i]);
		}

	}

	console.log("East Array: " + eastArr);
	console.log("West Array: " + westArr);
}

console.log("Version 2");
allStars(players);

console.log("--------------------------------------------------------------");

/*
 * #19
 * Function - subways
 * Create a function named `subways` which takes a parameter: `special`.
 *
 *  @param Datatype: Array `special`
 *  @return Datatype: Array
 *
 * The function will loop through the array value and replace all the odd numbered indexed items with "Classic Tuna".
 * Console.log your results.
*/ 

  var subOftheDay = ["Teriyaki Chicken", "Spicy Italian", "Turkey", "BMT", "Black Forest Ham", "Meatball Marinara", "Veggie"];

console.log("** * * Problem 19 * * **");

function subways(special){

	for (var i = 0; i < special.length; i++){

		if (i%2 == 1){

			special[i] = "Classic Tuna";
		}
	}
	return special;
}

console.log("subways(subOftheDay): " + subways(subOftheDay));

console.log("--------------------------------------------------------------");

/*
Final Boss
 * #20
 * Function - removeLetter
 * Create a function named `removeLetter`, which takes a parameter `str`. 
 *
 *   @param Datatype: String `str`
 *   @return Datatype: Array
 *
 *  The function will loop through the string value and put all the letters into an array, except for the letter "A" and "a". We don't want no stinking "A" or "a" in our array. Test your function with the `phrase` below!
*/

var phrase = "An apple a day keeps Alice feeling awesome!";
 
console.log("** * * Problem 20 * * **");

function removeLetter(str){

	var outArray = [];

	for (var i = 0; i < str.length; i++){

		if (str.charAt(i) != "A" && str.charAt(i) != "a"){

			outArray.push(str.charAt(i));
		}
	}

	return outArray;
}

console.log("removeLetter(phrase): " + removeLetter(phrase));

console.log("--------------------------------------------------------------");  
  










