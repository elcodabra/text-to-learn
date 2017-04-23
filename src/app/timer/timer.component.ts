import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'timer',
	templateUrl: 'timer.component.html',
	styleUrls: ['timer.component.scss']
})

export class TimerComponent implements OnInit {
	@Input() finish: boolean = false;

	seconds: number = 0;
	minutes: number = 0;

	timer: any;

	ngOnInit() {
		this.initTimer();
	}

	initTimer() {
		let self = this;
		let timer = setInterval(function() {
			self.seconds++;
			if ( self.seconds > 59 ) {
				self.seconds = 0;
				self.minutes++;
			}
		}, 1000);
	}

	stopTimer():void {
		clearInterval(this.timer);
	}
}