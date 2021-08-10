//We need six alien ships or objects that attack one at a time
//USS_Schwarzenegger always attacks first
//Options or buttons would be to either attack or retreat
//attack would be a either a 1 or a 0, 1 being a hit
//or 0 being a miss
//On a hit, it must calculate and substract the damage from 
//the hitpoints of either the enemyShip or USS_Schwarzenegger

//for now lets have retreating end the game.

//What do I need:

//Menu for starting the game
//The USS ship with its stats
//The enemy ships with their stats
//A combat system with prompts of what is happening
//think of it like a text-base game
//function for damage calucation and subtracting the hitpoints then replacing the old hitpoints with the new


//Run-down:
//Click on a button to start the game - need a function to start the game
//Give player two buttons to either attack or retreat(end the game)

//clicking the attack button would start a function that will use the firepower to determine whether the firepower hit or rolled a 1 
//if the firepower rolls a 1, subtract 10 damage from hitpoints

//after combat, give the options to either attack or retreat again 

//when an enemy ship's hitpoints = 0, console.log(you win)

//instead of console.log I should use alert then, have it take me back with the updated 
//hitpoints after damage calc

//console log your hitpoints and the emenies hitpoints after each battle\


//Goals: Figure how to have to javascript continue after the alert


//if the ships hitpoints are still above 0 then cycle through the next ship in the array

//for something that is in something else or for (variable in object)
// for(let hit in enemyShip1 ){
// for(i = 0; i < allTheAlienShips.length; i++){ //for loop that will run through the enemy ships
// var allTheAlienShips =  // array of the enemy ships
// [
// enemyShip1={
//     enemyHitpoints: 50,
//     enemyFirepower: 2   
// },
// enemyShip2={
//     enemyHitpoints: 50,
//     enemyFirepower: 2   
// },
// enemyShip3={
//     enemyHitpoints: 50,
//     enemyFirepower: 2   
// },
// enemyShip4={
//     enemyHitpoints: 50,
//     enemyFirepower: 2   
// },
// enemyShip5={
//     enemyHitpoints: 50,
//     enemyFirepower: 2   
// },
// enemyShip6={
//     enemyHitpoints: 50,
//     enemyFirepower: 2   
// }
// ]
// if(allTheAlienShips[i].enemyHitpoints = 0){ //will determine whether the hitpoints of the object or the enemy ship is 0
//     i++ //if it is true, increase the index of the array by 1 which should move on to the next enemy ship
//     console.log("Ship is destoryed")
// }
// }

console.log('%c spacebattle', 'font-size: 40px')

var startBattleButton=()=>{ //button function
    const USS_Schwarzenegger = { //player ship object declared
        yourHitpoints:  100,
        yourFirepower: 2 
    }
    const enemyShip = {
        enemyHitpoints: 50,
        enemyFirepower: 2   
    }


var theHullHitpoints = USS_Schwarzenegger.yourHitpoints //declaring the hit points for the battle
var enemyHullpoint = enemyShip.enemyHitpoints //declaring the enemy hit points for the battle



while(theHullHitpoints > 0 && enemyHullpoint > 0){ //dont know why "and" works but "or" doesnt

ussAttackButton=()=>{
    var enemyHitOrMiss = (Math.floor(Math.random() * enemyShip.enemyFirepower)) //determines whether something hit or miss //math.random(seed) for future
    if(enemyHitOrMiss == 1){ //if it hit do what is in this if statement
        theHullHitpoints -= 25 //will subtract 25 from the hull if the enemy hits you
        console.log("%c The Enemy ship hit you!!","color: red; border: 1px black solid; font-size: 15px")
        console.log("%c USS Schwarzenegger hull remaining " + theHullHitpoints, 'font-style: italic; border: 1px solid black; font-size: 15px')
        
    }
    else{
        console.log("%c The Enemy missed!", "color: green; border: 1px black solid; font-size: 15px")
    }
    //new problem: while loop cause infinite loop because USS_Schwarzenegger.yourHitpoints is always going to be more than 0

}
ussAttackButton() //calling the function



enemyAttackButton = ()=>{
    var yourHitOrMiss = (Math.floor(Math.random() * USS_Schwarzenegger.yourFirepower))//determines whether something hit or miss
    if(yourHitOrMiss == 1){ //if statement that will do whether if it's a hit or miss
    
    enemyHullpoint -= 25 //subtracts 25 from the enemy hull if player hits
    console.log(" %c You hit the enemy","color: green; border: 1px black solid; font-size: 15px" )
    console.log(" %c Enemy hull remaining " + enemyHullpoint, 'font-style: italic; border: 1px solid black; font-size: 15px' )
    }
    else{
    console.log("%c Missed!", "color: red; border: 1px black solid; font-size: 15px")
    }    
}
enemyAttackButton()

}
console.log("%c Click the Next Button", "font-size: 30px; border: 5px black solid; color: black; background-color: red")
if(theHullHitpoints == 0){
    console.log("%c You Lose :(", "font-size: 50px; color: red; background-color: black; border 2px black solid")
    count = -1
}
}
count = -1
buttonClick = ()=>{
    console.log(" %c Do you want to continue? Click continue, then start battle.", "font-size: 30px; border: 5px black solid; color: black; background-color: red")
    count++
}
upCount=()=>{
    console.log("%c" + count + " Enemy(s) ship(s) destoryed", "font-size: 25px; font-style: italic; border 2px black solid")
    if(count >= 6){
        console.log("%c You win!", "font-size: 50px; color: green; background-color: black; border 2px black solid")
    }
}


buttonClick()
upCount()
//can break my game by just clicking 


//have the enemy start attacking once the game is started. Enemy doesnt need a button
//use a while loop until the hitpoints reach 0

 

//new strat =  make a counter for how many times button is clicked or how many times the while loop goes










