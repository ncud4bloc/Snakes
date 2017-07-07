var $content = $('#content');
var $title = $('<div id="title"></div>');
var $gameName = $('<p class="tclass"><em>Angry Marvin!!</em></p>');
var $board = $('<div id="board"></div>');
var gridArray = [];

$content.append($title);
$title.append($gameName);

$content.append($board);


//********** Functions ***************

var render = function(){
    $board.innerHTML = " ";
    for (var i=0; i < 17; i++){
        for (var j=0; j < 25; j++){
            if (i==8 && j==12){
                gridArray[i,j] = $board.append('<div class="box marvin">x</div>');
            } else {
                gridArray[i,j] = $board.append('<div class="box stdBG"></div>');
                /*aOfA[i,j] = $board.append('<div class="box stdBG"><img id="mm" src="../IMAGES/marvin1.jpg" /></div>');*/
            }
        }     
    }
    console.log(gridArray);
};


//********** Function Calls ***************

$(function(){

    render();
  

   // $('#tab1').on('click',function(){
       
   // });

});