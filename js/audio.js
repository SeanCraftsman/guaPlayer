var changeSong = function(path) {
	var a = e('#id-audio-player')
	a.src = path	
}

changeSong('music/Girl.mp3')

// 播放和暂停功能

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

// 音量条拖动以及音量设置绑定

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


// 总时间 以及 当前时间显示
var rjust = function(str, size, delimeter='0') {
	var result = str
	while(result.length < size) {
		result = delimeter + result
	}
	return result
}

var formatTime = function(sum) {
	var m = String(Math.floor(sum % 3600 / 60))
	var s = String(Math.floor(sum % 60))
	var time = `${rjust(m, 2)}:${rjust(s, 2)}`
	return time
}

var showDuration = function() {
	var a = e('#id-audio-player')
	var t = e('#id-audio-sum')
	var sum = a.duration
	if(!isNaN(sum)) {
		var time = formatTime(sum)
		t.innerHTML = time
	}
}

var showCurrentTime = function() {
	var a = e('#id-audio-player')
	var t = e('#id-audio-now')
	var sum = a.currentTime
	if(!isNaN(sum)) {
		var time = formatTime(sum)
		t.innerHTML = time
		var percent = sum / a.duration
		changeTimeBar(percent)
	}
}

// 时间进度条显示
var changeTimeBar = function(percent) {
	var bar = e('.guaSlider .guaSliderBar')
	bar.style.width = percent*100 + '%'
}

var bindEventCanPlay = function() {
	var a = e('#id-audio-player')
	bindEvent(a, 'canplay', function(){
		showDuration()
		showCurrentTime()
		setInterval(showCurrentTime, 100)
	})
}


// 时间进度条事件
// 
var changeTime = function(percent) {
	changeTimeBar(percent)
	var a = e('#id-audio-player')
	a.currentTime = a.duration * percent
	showCurrentTime()
}

var bindEventChangeTime = function() {
	log('a')
	var track = e('.guaSlider')
	log(track)
	var down = false
	var changePercent = function(event){
		var barWidth = track.offsetWidth
		var percent = (event.clientX - getElementViewLeft(track)) / barWidth;
		log(percent)
		percent = percent > 0 ? percent : 0;
		percent = percent < 1 ? percent : 1;
		changeTime(percent)
	}
	bindEvent(track, 'mousedown', function(event){
		down = true
		changePercent(event)
	})
	bindEvent(track, 'mouseup', function(){
		down = false
	})
	bindEvent(track, 'mouseleave', function(){
		down = false
	})
	bindEvent(track, 'mousemove', function(event){
		if (down) {
			changePercent(event)
		}
	})
}



bindEventChangeTime()
bindEventCanPlay()
bindEventPlayer()
bindEventChangeVolume()
