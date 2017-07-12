var $content = $('#content');
var $title = $('<div id="title"></div>');
var $gameName = $('<p class="tclass"><em>Marvin!!</em></p>');
var $board = $('<div id="board"></div>');
var $row = $('<div class="row" id="rows"></div>');
var $cell = $('<div class="box stdBG" id="entry"></div>')
var $aRow;
var $aCell;
var direction = "rt";
var $headAr = [];
var $bodyAr = [];
var end = false;
var $new;
var $cellID;

$content.append($title);
$title.append($gameName);

$content.append($board);


//********** Functions ***************

var makeGrid = function(){
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
};

var getMvDirection = function(){
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
};

var updateHead = function(){
    var $mHead = $('.marvin');
    $cellID = $mHead.attr('id');
    console.log('The cellID is: ' + $cellID);
    
    $headAr = $cellID.split('e');
    $headAr.shift();
    console.log('The head array is: ' + $headAr);
    
    switch(direction) {
        case 'lft':
            /* reduce j by 1 */
            var add = parseInt($headAr[1]);
            var newC = '#e'+$headAr[0]+'e'+(add-1);
            $new = $('<div class="box stdBG" id=newC></div>')
            console.log('The new head id is: ' + $new);
            break;
        case 'rt':
            /* increase j by 1 */
            var add = parseInt($headAr[1]);
            $new = '#e'+$headAr[0]+'e'+(add+1);
            console.log('The new head id is: ' + $new);
            break;
        case 'up':
            /* reduce i by 1 */
            var add = parseInt($headAr[0]);
            $new = '#e'+(add-1)+'e'+$headAr[1];
            console.log('The new head id is: ' + $new);
            break;
        case 'dwn':
            /* increase i by 1 */
            var add = parseInt($headAr[0]);
            $new = '#e'+(add+1)+'e'+$headAr[1];
            console.log('The new head id is: ' + $new);
    }
};

var move = function(){
    /*
    var newID = $new;
    $addToMarvinHead = $('div#newID');
    $addToMarvinHead.addClass('marvin');
    */
}

//********** Calls ***************

$(function(){
    
    makeGrid();
    $marvinHeadStart = $('#e8e12').removeClass('stdBG').addClass('marvin');
    getMvDirection();
    updateHead();
    var newID = $new;
    $addToMarvinHead = $('div#newID');
    $addToMarvinHead.addClass('marvin');

    
   /* while (end = false){
        updateHead();
        var finish = prompt('End movement (y/n)?');
        if (finish == n){
            end = false;
        } else {
            end = true;
        }
    }*/
    

});