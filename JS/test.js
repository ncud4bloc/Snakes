var $content = $('#content');
var $title = $('<div id="title"></div>');
var $gameName = $('<p><em>Test Case</em></p>');
var $board = $('<div></div>');
var $row = $('<div class="row"></div>');
var $cell = $('<div class="box stdBG"></div>')
var $aRow;
var $aCell;
var direction = "rt";
var indexI;
var indexJ;
$content.append($title);
$title.append($gameName);
$content.append($board);

$(function(){  
    for (var i=0; i < 2; i++){
        $aRow = $row.clone();
        $board.append($aRow);
        for (var j =0; j <4; j++){
            $aCell = $cell.clone();
            $aRow.append($aCell); 
            if (i===0 && j==1){
                $aCell.removeClass('stdBG').addClass('updated');
                indexI = i;
                indexJ = j+1;
                
            }
        }
    }
    $('.row').eq(indexI).find('.cell').eq(indexJ).removeClass('stdBG').addClass('updated');
});