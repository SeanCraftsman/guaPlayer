var curPage = 1;
var prev = function() {
	if(1===curPage) return;
	//左边翻页
	var lPage = document.querySelector("#gua-flip-pageL" + curPage);
	lPage.style.transform = "rotateY(85deg)";
	lPage.style.transitionDelay = '0s';
	//右边翻页
	var rPage = document.querySelector("#gua-flip-pageR" + (curPage-1));
	rPage.style.transform = "rotateY(0deg)";
	rPage.style.transitionDelay = '0.5s';
	curPage--;
}
var next = function() {
	if(3===curPage) return;
	//左边翻页
	var lPage = document.querySelector("#gua-flip-pageL" + (curPage+1));
	lPage.style.transform = "rotateY(0deg)";
	lPage.style.transitionDelay = '0.5s';
	//右边翻页
	var rPage = document.querySelector("#gua-flip-pageR" + curPage);
	rPage.style.transform = "rotateY(-85deg)";
	rPage.style.transitionDelay = '0s';
	curPage++;
}

var hoverIn = function() {
	if(3===curPage) return;
	//右边翻页
	var rPage = document.querySelector("#gua-flip-pageR" + curPage);
	rPage.style.transform = "rotateY(-50deg)";
	rPage.style.transitionDelay = '0s';
}

var hoverOut = function() {
	if(3===curPage) return;
	//右边翻页
	var rPage = document.querySelector("#gua-flip-pageR" + curPage);
	rPage.style.transform = "rotateY(0deg)";
	rPage.style.transitionDelay = '0s';
}

document.querySelector('.guaPlayer .flip-right').addEventListener('mouseenter', hoverIn)
document.querySelector('.guaPlayer .flip-right').addEventListener('mouseleave', hoverOut)

document.querySelector('.guaPlayer .flip-left').addEventListener('click', prev)
document.querySelector('.guaPlayer .flip-right').addEventListener('click', next)