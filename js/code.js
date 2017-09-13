let player1Name = "Player 1";
let player2Name = "Player 2";
//gameboard array to store what piece is where using rcola
let redGameboardArray = [[]];
let redMoveTracker = 0;
let blackGameboardArray = [[]];
let blackMoveTracker = 0;
//Prompt to ask and reassign player one and two names
let player1NameAssign = function(){
    player1Name = prompt("Player 1 Name?", "Player 1");
    player1Name.replace("player1Name");
    return player1Name;
};
let player2NameAssign = function(){
    player2Name = prompt("Player 2 Name?", "Player 2");
    player2Name.replace("player2Name");
    return player2Name;
};
//this assigns the name value entered on initial promt to both the name and the moves tracker
player1NameAssign();
$(".player1NameDisplay").text(player1Name)
$(".nameTablePlayer1MoveTracker").text(player1Name)
player2NameAssign();
$(".player2NameDisplay").text(player2Name)
$(".nameTablePlayer2MoveTracker").text(player2Name)
//selector for red tile
let redPlayerSelector = $('.cleartile').click(function(){ 
    //identifies the row the piece was clicked by breaking the id into an array and selecting the first part of the string
    let rowRef = this.id[0];
    intRowRef = Number(rowRef);
    console.log('row is:',this.id[0]);
    //indentifies the col the piece was clicked by breaking the id into an array and selecting the second part of the string
    console.log('col is:',this.id[1]);
    let colRef = this.id[1];
    intColRef = Number(colRef)
    gameboardArray = [intRowRef,intColRef];
    $(this).removeClass();
    $(this).addClass("playerRedTile");
    //code to parse and push to the game board array
    console.log("It worked");
    return redGameboardArray;
 });
let currentPlayer = function(){
    //this is where the color will switch and store the move to the player tracker and the winchecker array using if else to change the state

};
// 
 