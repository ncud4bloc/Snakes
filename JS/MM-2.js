var $content = $('#content');
var $title = $('<div id="title"></div>');
var $gameName = $('<p class="tclass"><em>Marvin!!</em></p>');
var $board = $('<div id="board"></div>');
var $row = $('<div class="row"></div>');
var $cell = $('<div class="box stdBG"></div>')
var $aRow;
var $aCell;
var direction = "rt";
var keyCount = 0;
var indexI;
var indexJ;
var bodyLen = 1;


$content.append($title);
$title.append($gameName);

$content.append($board);


//********** Functions ***************

var makeGrid = function(){
    for (var i=0; i < 17; i++){
        $aRow = $row.clone();
        $board.append($aRow);
        
        for (var j =0; j <25; j++){
            $aCell = $cell.clone();
            $aRow.append($aCell); 
            if (i===8 && j==12){
                $aCell.removeClass('stdBG').addClass('marvin');
                indexI = i;
                indexJ = j;
            }
        }
    }    
};

var getMvDirection = function(){
    var keys = [37, 38, 39, 40];
	$("body").on("keydown", function(event) {
		var activeKey = event.keyCode;
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
        keyCount +=1;
        makeTarget();
        play();
	});
};

var makeTarget =function(){
    var locI = Math.floor((Math.random() * 17) + 1);
    var locJ = Math.floor((Math.random() * 25) + 1);
    if($('.row').eq(locI).find('.box').eq(locJ).hasClass('marvin')){
        return;
    } else {
        $('.row').eq(locI).find('.box').eq(locJ).removeClass('stdBG').addClass('planet');
    }
};

var moveHead = function(){
    var bodyIndexI = indexI;
    var bodyIndexJ = indexJ;
    var diagI;
    var diagJ;
    switch(direction) {
        case 'lft':
            indexJ -= 1;
            bodyIndexJ = indexJ + bodyLen;
            bodyIndexI = indexI;
            diagI = bodyIndexI +1;
            diagJ = bodyIndexJ;
            break;
        case 'rt':
            indexJ += 1;
            bodyIndexJ = indexJ - bodyLen;
            bodyIndexI = indexI;
            diagI = bodyIndexI -1;
            diagJ = bodyIndexJ;
            break;
        case 'up':
            indexI -= 1;
            bodyIndexI = indexI + bodyLen;
            bodyIndexJ = indexJ;
            diagI = bodyIndexI;
            diagJ = bodyIndexJ +1;
            break;
        case 'dwn':
            indexI += 1;
            bodyIndexI = indexI - bodyLen;
            bodyIndexJ = indexJ;
            diagI = bodyIndexI;
            diagJ = bodyIndexJ -1;
    }
    if($('.row').eq(indexI).find('.box').eq(indexJ).hasClass('planet')){
        bodyLen +=1;
        $('.row').eq(indexI).find('.box').eq(indexJ).removeClass('planet').addClass('marvin');
    } else {
        $('.row').eq(indexI).find('.box').eq(indexJ).removeClass('stdBG').addClass('marvin');
    }

    /* WIP */
    if ((diagI != indexI) && (diagJ != indexJ)){
        $('.row').eq(diagI).find('.box').eq(diagJ).removeClass('marvin').addClass('stdBG');
    }
    /* WIP */
    
    $('.row').eq(bodyIndexI).find('.box').eq(bodyIndexJ).removeClass('marvin').addClass('stdBG');
    
    
/* BEGIN BODY CONTITIONS */    
 
    
/* END BODY CONTITIONS */  
    
    
    
    
/* BEGIN END CONTITIONS */    
    if((indexI > 17) || (indexI < 0) || (indexJ > 24) || (indexJ < 0)){
        stop();
    }
/* END END CONTITIONS */  
    
};

var play = function(){
    /*var gamePlay = setInterval(moveHead, 1000);
    var addTarget = setInterval(makeTarget, 10000);*/
    moveHead();
};

var stop = function(){
    $('.box').removeClass('marvin');
    $('.box').removeClass('planet');
    $('.box').addClass('fini');
    /*$('.row').eq(indexI).find('.box').eq(indexJ).removeClass('marvin').addClass('fini');*/
    clearInterval(gamePlay);
    delete gamePlay;
    clearInterval(addTarget);
    delete addTarget;
};


//********** Calls ***************

$(function(){
    
    makeGrid();
    getMvDirection();
    
});