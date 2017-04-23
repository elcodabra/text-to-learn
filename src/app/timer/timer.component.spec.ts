import { TestBed, inject } from '@angular/core/testing';

import { TimerComponent } from './timer.component';

describe('a timer component', () => {
	let component: TimerComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				TimerComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([TimerComponent], (TimerComponent) => {
		component = TimerComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});