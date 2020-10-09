const dieRolls = document.querySelector("#DiceNumber");
const total = document.querySelector ("#TotalRoll");
const rollButton = document.querySelector ("#DiceRoll")
const revealButton = document.querySelector("#RollReveal")
const diceSides = document.querySelector("#DiceSides")
const resetButton = document.querySelector("#Reset")
const rollList = document.querySelector("#RollList")
var rollOutput = [];
var diceSided = 0
var totalNumber = 0
var dieRoll = 0
var diceList = ""
var dieCounter = 0
var diceArray = []
//create dice roll. Random math 1-6 x the number of dice.
//add numbers to an array.
//add number to dice total
//create a counter to countdown the while loop. 
//the while loop should spit out the collected numbers in the list.

rollButton.addEventListener ("click", function () {
//diceroll function
dieCounter = dieRolls.value;
diceSided = diceSides.value;
console.log(dieCounter)
while (dieCounter > 0){
diceRoll = (Math.floor(Math.random() * diceSided) + 1);
if ((diceSided === 20) || (diceRoll === 1)){
    console.log("CRITICAL FAILURE!!!!!!!!!!!!!!!!!!!!!")
    console.log("Roll Value" + " " + diceRoll);
    dieCounter= dieCounter - 1;
    console.log ("Dice Remaining" + " " + dieCounter);
    totalNumber = diceRoll + totalNumber;
    console.log("Dice Total" + " " + totalNumber)
    diceArray.push(diceRoll)
    total.innerHTML= totalNumber
}
else
if ((diceSided === 20) || (diceRoll === 20)){
console.log("CRITICAL SUCCESS!!!!!!!!!!!!!!!!")
console.log("Roll Value" + " " + diceRoll)
//should be roll to confirm in both cases, but we'll save that for another project
dieCounter= dieCounter - 1;
console.log ("Dice Remaining" + " " + dieCounter);
totalNumber = diceRoll + totalNumber;
console.log("Dice Total" + " " + totalNumber)
diceArray.push(diceRoll)
total.innerHTML= totalNumber
}
else
console.log("Roll Value" + " " + diceRoll);
dieCounter= dieCounter - 1;
console.log ("Dice Remaining" + " " + dieCounter);
totalNumber = diceRoll + totalNumber;
console.log("Dice Total" + " " + totalNumber)
diceArray.push(diceRoll)
total.innerHTML= totalNumber }})

//spit out the array list. rolls should be an ordered list.
revealButton.addEventListener ("click", function() {
 console.log(diceArray);
 rollOutput = diceArray;
 
 console.log(rollOutput);
 RollReveal.innerHTML += "<li>"+ [diceArray] + "</li>";

})
//reset button
resetButton.addEventListener("click", function(){
    totalNumber = 0
    dieCounter = 0
    diceRoll = 0
    total.innerHTML = 0
    delete diceArray
    diceArray = []
    RollReveal.innerHTML = "Show All Rolls"
})


//I could put in a field to calculate DR and resistance, but it would be superfluous.