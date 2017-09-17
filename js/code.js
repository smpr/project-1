let gameLocationArray = [[]];
//sets up the array
let setupGameboard = function(){
    gameLocationArray=[[]];
    for(i=0;i<7;i++){
        gameLocationArray[i] = [];
        for(j=0;j<7;j++){
            gameLocationArray[i][j]= "unassigned";
            
        };
    };
};
setupGameboard();
let player = "red";
let testArray = [[]];

//player 1 vars
let player1Name = "Player 1";
let intRedMoveTracker = 0;
let redMoveTracker = "";
// player 2 vars
let player2Name = "Player 2";
let blackMoveTracker = 0;
let intBlackMoveTracker = 0;
//Prompt to ask and reassign player one and two names

let player1NameAssign = function(){
    player1Name = prompt("Player 1 Name?", "Player 1");
    player1Name.replace("player1Name");
    
};
let player2NameAssign = function(){
    player2Name = prompt("Player 2 Name?", "Player 2");
    player2Name.replace("player2Name");
    
};
//this will check to see if there is any open space under it
let openSpace = function(){
    let colRef = this.id[1];
    let rowRef = this.id[0];
    
    if(gameLocationArray[rowRef][colRef] === "unassigned"){

        while(gameLocationArray[rowRef][colRef] === "unassigned" && rowRef > 0){
            if(gameLocationArray[rowRef-1][colRef] != "unassigned"){
                break;
            }
        
        rowRef--;    
    }
        currentPlayer(rowRef,colRef);
        console.log('this is unasssigned')

    }else{
        console.log("this is already assigned...asshat")
    }
// need to pull the rows from the array and loop through and make sure there are no empty places bellow it
 
};
//win conditions
let winDown = function(player,rowRef,colRef){
    if(rowRef < 3){
        return false;
    }

    if(gameLocationArray[rowRef][colRef] === player && gameLocationArray[rowRef-1][colRef]=== player && gameLocationArray[rowRef-2][colRef]=== player && gameLocationArray[rowRef-3][colRef]=== player){
    return true;
    }
    else {
        return false;
    }
};
let winRight = function(player,rowRef,colRef){
    if(colRef > 3){
        return false;
    }

    if(gameLocationArray[rowRef][colRef] === player && gameLocationArray[rowRef][colRef+1]=== player && gameLocationArray[rowRef][colRef+2]=== player && gameLocationArray[rowRef][colRef+3]=== player){
    return true;
    }
    else {
        return false;
    }
};
let winLeft = function(player,rowRef,colRef){
    if(colRef < 3){
        return false;
    }

    if(gameLocationArray[rowRef][colRef] === player && gameLocationArray[rowRef][colRef-1]=== player && gameLocationArray[rowRef][colRef-2]=== player && gameLocationArray[rowRef][colRef-3]=== player){
    return true;
    }
    else {
        return false;
    }
};
let winUpRight = function(player,rowRed,colRef){
    if(rowRef > 3 || colRef > 3){
        return false;
    }
    if(gameLocationArray[rowRef][colRef] === player && gameLocationArray[rowRef+1][colRed+1]=== player && gameLocationArray[rowRef +2][colRef+2]=== player && gameLocationArray[rowRef+3][colRef+3]=== player){
        return true;
    }
    else {
        return false;
    }
}
let winDownLeft = function(player,rowRed,colRef){
    if(rowRef < 3 || colRef < 3){
        return false;
    }
    if(gameLocationArray[rowRef][colRef] === player && gameLocationArray[rowRef-1][colRed-1]=== player && gameLocationArray[rowRef -2][colRef-2]=== player && gameLocationArray[rowRef-3][colRef-3]=== player){
        return true;
    }
    else {
        return false;
    }
}
let winUpLeft = function(player,rowRed,colRef){
    if(rowRef > 3 || colRef < 3){
        return false;
    }
    if(gameLocationArray[rowRef][colRef] === player && gameLocationArray[rowRef+1][colRef-1]=== player && gameLocationArray[rowRef+2][colRef-2]===player && gameLocationArray[rowRef+3][colRef-3]===player){
        return true;
    }else{
        return false;
    }

}
let winDownRight = function(player,rowRed,colRef){
    if(rowRef < 3 || colRef > 3){
        return false;
    }
    if(gameLocationArray[rowRef][colRef] === player && gameLocationArray[rowRef-1][colRef+1]=== player && gameLocationArray[rowRef-2][colRef+2]===player && gameLocationArray[rowRef-3][colRef+3]===player){
        return true;
    }else{
        return false;
    }

}
//this assigns the name value entered on initial promt to both the name and the moves tracker
//setTimeout(player1NameAssign(), 5000);
player1NameAssign();
$(".player1NameDisplay").text(player1Name);
$(".nameTablePlayer1MoveTracker").text(player1Name);
player2NameAssign();
$(".player2NameDisplay").text(player2Name)
$(".nameTablePlayer2MoveTracker").text(player2Name)

//this is where the color will switch and store the move to the player tracker and the winchecker array using if else to change the state
let currentPlayer = function(rowRef,colRef){

            //identifies the row the piece was clicked by breaking the id into an array and selecting the first part of the string
            
            let intRowRef = Number(rowRef);
            console.log(' Red row is:',rowRef);
            //indentifies the col the piece was clicked by breaking the id into an array and selecting the second part of the string
            console.log(' Red col is:',colRef);
            let intColRef = Number(colRef)
            gameLocationArray[intRowRef][intColRef]=player;
            $("#"+rowRef+colRef).removeClass();


    if (player === "red"){ 
            $("#"+rowRef+colRef).addClass("playerRedTile");

            intRedMoveTracker = intRedMoveTracker + 1;
            console.log("Red Turn Complete");
            //updates the ammount of moves red player has made
           player = "black";
           $(".movesTablePlayer1MoveTracker").html(intRedMoveTracker);
           console.log(gameLocationArray)
          
   } 
    else {
         $("#"+rowRef+colRef).addClass("playerBlackTile");

        intBlackMoveTracker = intBlackMoveTracker + 1;
         console.log("Black Turn Complete");
         //updates the ammount of moves red player has made
        player = "red";
        $(".movesTablePlayer2MoveTracker").html(intBlackMoveTracker);

        console.log(gameLocationArray)
        
    }

 
    
     
};
$('.cleartile').on("click",openSpace);
//debugger

 