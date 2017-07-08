var $content = $('#content');
var $title = $('<div id="title"></div>');
var $gameName = $('<p class="tclass"><em>Marvin!!</em></p>');
var $board = $('<div id="board"></div>');
var $row = $('<div class="row" id="rows"></div>');
var $cell = $('<div class="box stdBG" id="entry"></div>')
var $aRow;
var $aCell;
var gridArray = [];
var direction = "rt";

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
    
    $marvinHead = $('#entry_r8_c12').removeClass('stdBG').addClass('marvin');
    /*$marvinHead.removeClass('stdBG').addClass('marvin');*/
    
    var keys = [37, 38, 39, 40];
	$("body").on("keydown", function(event) {
		var activeKey = event.keyCode;
        console.log('The keycode is: ' + activeKey);
		if (keys.indexOf(activeKey) < 0)
			return;
		switch(activeKey) {
			case 37:
				direction = 'lft';
				break;
			case 38:
				direction = 'up';
				break;
			case 39:
				direction = 'rt';
				break;
			case 40:
				direction = 'dwn';
		}
        console.log('The direction is: ' + direction);
	});

});