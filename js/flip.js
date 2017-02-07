var curPage = 1;
var prev = function() {
	if(1===curPage) return;
	//左边翻页
	var lPage = e("#gua-flip-pageL" + curPage);
	lPage.style.transform = "rotateY(85deg)";
	lPage.style.transitionDelay = '0s';
	//右边翻页
	var rPage = e("#gua-flip-pageR" + (curPage-1));
	rPage.style.transform = "rotateY(0deg)";
	rPage.style.transitionDelay = '0.5s';
	curPage--;
}
var next = function() {
	if(3===curPage) return;
	//左边翻页
	var lPage = e("#gua-flip-pageL" + (curPage+1));
	lPage.style.transform = "rotateY(0deg)";
	lPage.style.transitionDelay = '0.5s';
	//右边翻页
	var rPage = e("#gua-flip-pageR" + curPage);
	rPage.style.transform = "rotateY(-85deg)";
	rPage.style.transitionDelay = '0s';
	curPage++;
}

var hoverIn = function() {
	if(3===curPage) return;
	//右边翻页
	var rPage = e("#gua-flip-pageR" + curPage);
	rPage.style.transform = "rotateY(-50deg)";
	rPage.style.transitionDelay = '0s';
}

var hoverOut = function() {
	if(3===curPage) return;
	//右边翻页
	var rPage = e("#gua-flip-pageR" + curPage);
	rPage.style.transform = "rotateY(0deg)";
	rPage.style.transitionDelay = '0s';
}

var bindEventFlip = function() {
	var flipRight = e('.guaPlayer .flip-right')
	var flipLeft = e('.guaPlayer .flip-left')
	var flipSide = e('#guaPlayer-aside')

	var sideOver = false

	bindEvent(flipSide, 'mouseover', function(event){
		sideOver = true
	})

	bindEvent(flipSide, 'mouseleave', function(event){
		sideOver = false
	})

	bindEvent(flipRight, 'mouseenter', function(event) {
		if (sideOver == false) {
			hoverIn()
		} 
	})
	bindEvent(flipRight, 'mouseleave', hoverOut)

	bindEvent(flipLeft, 'click', prev)
	bindEvent(flipRight, 'click', function(event) {
		if (sideOver == false) {
			next()
		}
	})

	
}

bindEventFlip()