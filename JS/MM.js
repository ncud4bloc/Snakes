var $content = $('#content');
var $title = $('<div id="title"></div>');
var $imagetitle = $('<img id="imagetitle" src="../IMAGES/Red-Diner-Logo-1.jpg" />');
var $board = $('<div id="board"></div>');
var $ul = $('<ul></ul>');
var $tab1 = $('<li id="tab1">Home</li>');
var $tab2 = $('<li id="tab2">Menu</li>');
var $tab3 = $('<li id="tab3">Contact</li>');
var $articles = $('<div id="articles"></div>');

$content.append($title);
$title.append($imagetitle);

$content.append($board);
$board.append($ul);
$ul.append($tab1);
    $tab1.addClass('tabclass');
$ul.append($tab2);
    $tab2.addClass('tabclass');
$ul.append($tab3);
    $tab3.addClass('tabclass');

$content.append($articles);


var page1 = function(){
    var $dinfo = $('<div id="dinfo"></div>');
    var $infoall = $('<div id="infoall"></div>');
    var $welcome = $('<p class="welcome">Welcome to the Red Diner.</p>');

    $articles.append($dinfo);
    $dinfo.append($infoall);
    $infoall.append($welcome);  

    plot();
}


var reset = function(){
    $articles.slideUp();
    $('div#dinfo').remove();
}

var plot = function(){
    $articles.delay(200).slideDown();
}

//********** Function Calls ***************

page1();

$('#tab1').on('click',function(){
    $articles.hide();
    reset();
    page1();
});