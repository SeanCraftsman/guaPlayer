var changeSong = function(path) {
	var a = e('#id-audio-player')
	a.src = path	
}

changeSong('music/Girl.mp3')

var bindEventPlayer = function() {
	var buttonToggle = e('#guaPlayer-toggle')
	bindEvent(buttonToggle, 'click', function(event){
		var a = e('#id-audio-player')
		a.volume = 0.5
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
	
	// var volume = e('#id-volume')
	// bindEvent(volume, 'mouseup', function(event){
	// 	var value = event.target.value
	// 	var a = e('#id-audio-player')
	// 	a.volume = value/100
	// })
}

bindEventPlayer()
