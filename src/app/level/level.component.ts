import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { LevelService } from '../services/level.service';
import { Level } from '../services/level.model';
import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'app-level',
	templateUrl: './level.component.html',
	styleUrls: ['./level.component.scss']
})
export class LevelComponent implements OnInit {
	private ttl: string;
	level: Level;
	length: number;
	levels: Level[] = [];
	private levelsComplete: Level[] = [];

	constructor(private route: ActivatedRoute, private dataService: LevelService) { }

	ngOnInit() {
		let self = this;

		this.route.params
			.switchMap((params: Params) => {
				let id = +params['id'];
				return this.dataService.getLevel(id);
			})
			.subscribe((level: Level) => {
				this.level = level
				if (this.levels.length === 0)
					this.levels = this.dataService.getTitles();
				this.ttl = this.levels[0]['name'];
				this.checkLevels();
			});

		this.length = this.dataService.getCount();
		
	}

	checkLevels() {
		this.levelsComplete.push(this.levels[0]);
		this.levels.shift();
	}
}
