console.log("and we are up!")
$().click(function(){ 
    $(this).removeClass(".emptytile");
    $(this).addClass("playerRedTile");
    console.log("It worked");
 });
 