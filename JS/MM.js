var $content = $('#content');
var $title = $('<div id="title"></div>');
var $gameName = $('<p class="tclass"><em>Angry Marvin!!</em></p>');
var $board = $('<div id="board"></div>');
var $row = $('<div class="row" id="rows"></div>');
var $cell = $('<div class="box stdBG" id="entry"></div>')
var $aRow;
var $aCell;
var gridArray = [];

$content.append($title);
$title.append($gameName);

$content.append($board);


//********** Functions ***************



//********** Calls ***************

$(function(){
    
    for (var i=0; i < 17; i++){
        $aRow = $row.clone();
        $board.append($aRow);
        
        $('#rows').attr('id', 'row_' +i);
        
        for (var j =0; j <25; j++){
            $aCell = $cell.clone();
            $aRow.append($aCell); 
            $('#entry').attr('id', 'entry_r' +i+ '_c' +j);
        }
    }
    
    $marvinHead = $('#entry_r8_c12');
    $marvinHead.removeClass('stdBG').addClass('marvin');

});