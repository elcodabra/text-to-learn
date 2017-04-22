import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { LevelService } from './service/level.service';
import { SentencesService } from '../shared/service/sentences.service';
import { Level } from './service/level.model';
import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'app-level',
	templateUrl: './level.component.html',
	styleUrls: ['./level.component.scss']
})
export class LevelComponent implements OnInit {
	level: Level;
	levels: Level[];
  length: number;

	constructor(private route: ActivatedRoute, private dataService: LevelService, private sentencesService: SentencesService) { }

	ngOnInit() {
		this.route.params
			.switchMap((params: Params) => this.dataService.getLevel(+params['id']))
			.subscribe((level: Level) => this.level = level)

    this.levels = this.dataService.getTitles()
		this.length = this.dataService.getCount()
    console.log("level", this.sentencesService.getSentences())
	}

}
