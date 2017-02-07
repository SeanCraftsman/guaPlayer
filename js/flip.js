var curPage = 1;
var prev = function() {
	if(1===curPage) return;
	//左边翻页
	var lPage = document.querySelector("#gua-flip-pageL" + curPage);
	lPage.style.transform = "rotateY(180deg)";
	lPage.style.webkitTransform = "rotateY(180deg)";
	//右边翻页
	var rPage = document.querySelector("#gua-flip-pageR" + (curPage-1));
	rPage.style.transform = "rotateY(0deg)";
	rPage.style.webkitTransform = "rotateY(0deg)";
	curPage--;
}
var  next = function() {
	if(3===curPage) return;
	//左边翻页
	var lPage = document.querySelector("#gua-flip-pageL" + (curPage+1));
	lPage.style.transform = "rotateY(0deg)";
	//右边翻页
	var rPage = document.querySelector("#gua-flip-pageR" + curPage);
	rPage.style.transform = "rotateY(-180deg)";
	curPage++;
}
document.querySelector('#prev').addEventListener('click', prev)
document.querySelector('#next').addEventListener('click', next)