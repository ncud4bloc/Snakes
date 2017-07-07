var $content = $('#content');
var $title = $('<div id="title"></div>');
var $gameName = $('<p class="tclass"><em>Angry Marvin!!</em></p>');
var $board = $('<div id="board"></div>');
var aOfA = [];

$content.append($title);
$title.append($gameName);

$content.append($board);


//********** Functions ***************

var render = function(){
    $board.innerHTML = " ";
    for (var i=0; i < 17; i++){
        for (var j=0; j < 25; j++){
            aOfA[i,j] = $board.append('<div class="box stdBG"></div>');
            /*aOfA[i,j] = $board.append('<div class="box stdBG"><img id="mm" src="../IMAGES/marvin1.jpg" /></div>');*/
        }     
    }
    console.log(aOfA);
};


//********** Function Calls ***************

$(function(){

    render();

   // $('#tab1').on('click',function(){
       
   // });

});