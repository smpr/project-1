let player1Name = "Player 1";
let player2Name = "Player 2";
//gameboard array to store what piece is where using rcola
let gameboardArray = [[]];
//Prompt to ask and reassign player one and two names
let player1NameAssign = function(){
    player1Name = prompt("Player 1 Name?", "Player 1");
    player1Name.replace("player1Name");
    return player1Name;
};
player1NameAssign();
$("player1NameDisplay").text(player1Name)

//selector for tile
$('.cleartile').click(function(){ 
    //identifies the row the piece was clicked by breaking the id into an array and selecting the first part of the string
    console.log('row is:',this.id[0]);
    //indentifies the col the piece was clicked by breaking the id into an array and selecting the second part of the string
    console.log('col is:',this.id[1]);
    $(this).removeClass();
    $(this).addClass("playerRedTile");
    //code to parse and push to the game board array
    console.log("It worked");
 });
let currentPlayer = function(){
    //this is where the color will switch and store the move to the player tracker and the winchecker array using if else to change the state

};
// 
 