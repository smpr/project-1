let player = "red";
//player 1 vars
let player1Name = "Player 1";
let redGameboardArray = [[]];
let intRedMoveTracker = 0;
let redMoveTracker = "";
let test = "doesnt work";
// player 2 vars
let player2Name = "Player 2";
let blackGameboardArray = [[]];
let blackMoveTracker = 0;
let intBlackMoveTracker = 0;
//Prompt to ask and reassign player one and two names
let player1NameAssign = function(){
    player1Name = prompt("Player 1 Name?", "Player 1");
    player1Name.replace("player1Name");
    return player1Name;
};
let player2NameAssign = function(){
    player2Name = prompt("Player 2 Name?", "Player 2");
    player2Name.replace("player2Name");
    
};
//this will check for a winner up or down
let verticalWin = function(){
//needs to use .length so it cycles through the entire array
};
//this assigns the name value entered on initial promt to both the name and the moves tracker
player1NameAssign();
$(".player1NameDisplay").text(player1Name);
$(".nameTablePlayer1MoveTracker").text(player1Name);
player2NameAssign();
$(".player2NameDisplay").text(player2Name)
$(".nameTablePlayer2MoveTracker").text(player2Name)


let currentPlayer = function(){
    if (player === "red"){
            //identifies the row the piece was clicked by breaking the id into an array and selecting the first part of the string
            let rowRef = this.id[0];
            intRowRef = Number(rowRef);
            console.log(' Red row is:',this.id[0]);
            //indentifies the col the piece was clicked by breaking the id into an array and selecting the second part of the string
            console.log(' Red col is:',this.id[1]);
            let colRef = this.id[1];
            intColRef = Number(colRef)
            let innerRedGameboardArray = [intRowRef,intColRef]
            redGameboardArray.push(innerRedGameboardArray)
            //redGameboardArray = redGameboardArray + [intRowRef,intColRef];
            $(this).removeClass();
            $(this).addClass("playerRedTile");
            intRedMoveTracker = intRedMoveTracker + 1;
            console.log("Red Turn Complete");
            //updates the ammount of moves red player has made
           //redMoveTracker = intRedMoveTracker.toString();
           player = "black";
           $(".movesTablePlayer1MoveTracker").html(intRedMoveTracker);
          return test;
   } 
    else {
        
            //identifies the row the piece was clicked by breaking the id into an array and selecting the first part of the string
            let rowRef = this.id[0];
            intRowRef = Number(rowRef);
            console.log('row is:',this.id[0]);
            //indentifies the col the piece was clicked by breaking the id into an array and selecting the second part of the string
            console.log('col is:',this.id[1]);
            let colRef = this.id[1];
            intColRef = Number(colRef)
            let innerBlackGameboardArray = [intRowRef,intColRef]
            blackGameboardArray.push(innerBlackGameboardArray)
            $(this).removeClass();
            $(this).addClass("playerBlackTile");
            intBlackMoveTracker = intBlackMoveTracker + 1;
            console.log("Black Turn Complete");
            //updates the ammount of moves black player has made
            player = "red";
            $(".movesTablePlayer2MoveTracker").html(intBlackMoveTracker);
            return player;

        
    }
    //this is where the color will switch and store the move to the player tracker and the winchecker array using if else to change the state
     
};
$('.cleartile').on("click",currentPlayer);
//debugger
 