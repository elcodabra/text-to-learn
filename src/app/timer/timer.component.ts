import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'timer',
	templateUrl: 'timer.component.html',
	styleUrls: ['timer.component.scss']
})

export class TimerComponent implements OnInit {
	@Input() timerStop: boolean = false;
	
	timerResult: {};

	timer: any;
	seconds: number;
	minutes: number;
	hours: number;

	constructor() {
		this.seconds = 0;
		this.minutes = 0;
		this.hours = 0;
	}

	ngOnInit() {
		let self = this;
		
		this.initTimer();

		let promise = new Promise(function(resolve, reject) {
			resolve(self.timerStop);
		});

		promise
			.then(
				result => {
					if(result) {
						self.stopTimer();
					}
				}
			);
	}

	initTimer() {
		let self = this;

		if (!this.timerStop) {
			let timer = setInterval(() => {
				self.seconds++;
				if ( self.seconds > 59 ) {
					self.seconds = 0;
					self.minutes++;
				}

				if ( self.minutes > 59 ) {
					self.seconds = 0;
					self.minutes = 0;
					self.hours++;
				}
			}, 1000);
		}
	}

	stopTimer() {
		clearInterval(this.timer);
	}
}