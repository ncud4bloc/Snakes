var $content = $('#content');
var $title = $('<div id="title"></div>');
var $gameName = $('<p class="tclass"><em>Marvin!!</em></p>');
var $board = $('<div id="board"></div>');
var $row = $('<div class="row"></div>');
var $cell = $('<div class="box stdBG"></div>')
var $aRow;
var $aCell;
var direction = "rt";
var indexI;
var indexJ;
var bodyLen = 1;
var snakePart = 'b8b12';
var snake = [snakePart];
var mvTime = 300;
var tTime = 10000;

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
    makeTarget();
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
    switch(direction) {
        case 'lft':
            indexJ -= 1;
            break;
        case 'rt':
            indexJ += 1;
            break;
        case 'up':
            indexI -= 1;
            break;
        case 'dwn':
            indexI += 1;
    }   
    snakePart = 'b'+indexI+'b'+indexJ;
        if(snake.indexOf(snakePart) != -1){
            stop();
        }
    snake.unshift(snakePart);
    console.log('The snake is: ' + snake);
    if(snake.length > bodyLen){
        var exSnake = snake.pop();
        var partArr = exSnake.split('b');
        partArr.shift();
        var xIndI = parseInt(partArr[0]);
        var xIndJ = parseInt(partArr[1]);
        $('.row').eq(xIndI).find('.box').eq(xIndJ).removeClass('marvin').addClass('stdBG');
    }
    if((indexI > 17) || (indexI < 0) || (indexJ > 24) || (indexJ < 0)){
        stop();
    }
    if($('.row').eq(indexI).find('.box').eq(indexJ).hasClass('planet')){
        bodyLen +=1;
        $('.row').eq(indexI).find('.box').eq(indexJ).removeClass('planet').addClass('marvin');
    } else {
        $('.row').eq(indexI).find('.box').eq(indexJ).removeClass('stdBG').addClass('marvin');
    }
    mvTime += 300;
    tTime += 10000;
};

var play = function(){
    var gamePlay = setInterval(moveHead, mvTime);
    var addTarget = setInterval(makeTarget, tTime);
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