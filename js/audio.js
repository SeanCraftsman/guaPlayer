var changeSong = function(path) {
	var a = e('#id-audio-player')
	a.src = path	
}

changeSong('music/Girl.mp3')

var bindEventPlayer = function() {
	var buttonToggle = e('#guaPlayer-toggle')
	bindEvent(buttonToggle, 'click', function(event){
		var a = e('#id-audio-player')
		a.volume = getVolume()
		var target = event.target
		if (target.classList.contains('guaPlayer-play')) {
			target.classList.remove('guaPlayer-play')
			target.classList.add('guaPlayer-pause')
			a.play()	
		} else {
			target.classList.add('guaPlayer-play')
			target.classList.remove('guaPlayer-pause')
			a.pause()	
		}		
	})
	
	
}

var getVolume = function() {
	var v = e('#guaPlayer-volume')
	var track = v.querySelector('.gua-vertical-slider')
	var bar = track.querySelector('.gua-vertical-bar')
	barLength = bar.offsetHeight
	trackLength = track.offsetHeight
	return barLength / trackLength
}

var changeVolume = function(percent) {
	var a = e('#id-audio-player')
	a.volume = percent
	var bar = document.querySelector('.gua-vertical-bar')
	bar.style.height = percent * 100 + '%'
}

var getElementViewLeft = function (element) {
    var actualLeft = element.offsetLeft;
    var current = element.offsetParent;
    var elementScrollLeft;
    while (current !== null) {
        actualLeft += current.offsetLeft;
        current = current.offsetParent;
    }
    elementScrollLeft = document.body.scrollLeft + document.documentElement.scrollLeft;
    return actualLeft - elementScrollLeft;
}

var getElementViewTop = function (element) {
    var actualTop = element.offsetTop;
    var current = element.offsetParent;
    var elementScrollTop;
    while (current !== null) {
        actualTop += current.offsetTop;
        current = current.offsetParent;
    }
    elementScrollTop = document.body.scrollTop + document.documentElement.scrollTop;
    return actualTop - elementScrollTop;
}

var bindEventChangeVolume = function() {
	var v = e('#guaPlayer-volume')
	var track = v.querySelector('.gua-vertical-slider')
	var down = false
	var changePercent = function(){
		var barHeight = track.offsetHeight
		var percent = (barHeight - event.clientY + getElementViewTop(track)) / barHeight;
		percent = percent > 0 ? percent : 0;
		percent = percent < 1 ? percent : 1;
		changeVolume(percent);
	}
	bindEvent(track, 'mousedown', function(event){
		down = true
		changePercent()
	})
	bindEvent(track, 'mouseup', function(){
		down = false
	})
	bindEvent(track, 'mouseleave', function(){
		down = false
	})
	bindEvent(track, 'mousemove', function(){
		if (down) {
			changePercent()
		}
	})
}

bindEventPlayer()
bindEventChangeVolume()
