var $content = $('#content');
var $title = $('<div id="title"></div>');
var $gameName = $('<p class="tclass"><em>Marvin!!</em></p>');
var $board = $('<div id="board"></div>');
var $row = $('<div class="row" id="rows"></div>');
var $cell = $('<div class="box stdBG" id="entry"></div>')
var $aRow;
var $aCell;
var $mvArray = [];
var chArray = [];
var direction = "rt";
var $new;


$content.append($title);
$title.append($gameName);

$content.append($board);


//********** Functions ***************

var $move = function(){
    var $mHead = $('.marvin');
    var $cellID = $mHead.attr('id');
    console.log('The cellID is: ' + $cellID);
    
    $mvArray = $cellID.split('e');
    $mvArray.shift();
    console.log('The head array is: ' + $mvArray);
    
    switch(direction) {
        case 'lft':
            /* reduce j by 1 */
            var add = parseInt($mvArray[1]);
            $new = '#e'+$mvArray[0]+'e'+(add-1);
            console.log('The new id is: ' + $new);
            break;
        case 'rt':
            /* increase j by 1 */
            var add = parseInt($mvArray[1]);
            $new = '#e'+$mvArray[0]+'e'+(add+1);
            console.log('The new id is: ' + $new);
            break;
        case 'up':
            /* reduce i by 1 */
            var add = parseInt($mvArray[0]);
            $new = '#e'+(add-1)+'e'+$mvArray[1];
            console.log('The new id is: ' + $new);
            break;
        case 'dwn':
            /* increase i by 1 */
            var add = parseInt($mvArray[0]);
            $new = '#e'+(add+1)+'e'+$mvArray[1];
            console.log('The new id is: ' + $new);
    }
    console.log('Its type is: ' + typeof($new));
};

//********** Calls ***************

$(function(){
    
    for (var i=0; i < 17; i++){
        $aRow = $row.clone();
        $board.append($aRow);
        
        $('#rows').attr('id', 'row_' +i);
        
        for (var j =0; j <25; j++){
            $aCell = $cell.clone();
            $aRow.append($aCell); 
            $('#entry').attr('id', 'e' +i+ 'e' +j);
        }
    }
    
    $marvinHeadStart = $('#e8e12').removeClass('stdBG').addClass('marvin');
    
    var keys = [37, 38, 39, 40];
	$("body").on("keydown", function(event) {
        $move();
		var activeKey = event.keyCode;
        /*console.log('The keycode is: ' + activeKey);*/
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
        /*console.log('The direction is: ' + direction);*/
	});

    
});