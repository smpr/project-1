console.log("and we are up!")
$('.cleartile').click(function(){ 
    //identifies the row the piece was clicked by breaking the id into an array and selecting the first part of the string
    console.log('row is:',this.id[0]);
    //indentifies the col the piece was clicked by breaking the id into an array and selecting the second part of the string
    console.log('col is:',this.id[1]);
    $(this).removeClass();
    $(this).addClass("playerRedTile");
    console.log("It worked");
 });
 