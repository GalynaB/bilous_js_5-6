var btnStart = document.querySelector('.start');
var btnReset = document.querySelector('.reset');
var btnTimer = document.querySelector('.timer');
var forMsek = document.querySelector('.msek');

btnStart.addEventListener('click', startClick);
btnReset.addEventListener('click', resetClick);

var count = 0;
var timerId;
var go = 0;

function startClick() {

	btnStart.innerHTML = 'Pause';

	if (go == 0) {

		timerId = setInterval(function() {
			count += 10;

      var hour = Math.floor(count/3600000)%24;
				if (hour < 10) {
          hour = '0' + hour;
        };
			var min = Math.floor(count/60000)%60;
				if (min < 10) {
          min = '0' + min;
        };
			var sec = Math.floor(count/1000)%60;
				if (sec < 10) {
          sec = '0' + sec;
        };
			var mSek = count % 1000;
				if (mSek < 100) {
          mSek = '0' + mSek;
        };
				if (mSek < 10) {
          mSek = '0' + mSek;
        };

			btnTimer.innerHTML = hour + ' : ' + min + ' : ' + sec;
      forMsek.innerHTML = ' ' + mSek;

		}, 10);

		go = 1;

	} else {

		clearInterval(timerId);
		go = 0;
		btnStart.innerHTML = 'Start';
	}
}

function resetClick() {
	clearInterval(timerId);
	go = 0;
	count = 0;
	btnTimer.innerHTML = '00 : 00 : 00';
  forMsek.innerHTML = ' 000';
	btnStart.innerHTML = 'Start';
}
