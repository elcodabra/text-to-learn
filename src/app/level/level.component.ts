import { Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import {ActivatedRoute, Params, Router, NavigationEnd} from '@angular/router';
import { LevelService } from './service/level.service';
import { SentencesService } from '../shared/service/sentences.service';
import { Level } from './service/level.model';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';

@Component({
	selector: 'app-level',
	templateUrl: './level.component.html',
	styleUrls: ['./level.component.scss']
})
export class LevelComponent implements OnInit {
  timerStop: boolean = false;
	level: Level;
	levels: Level[];
  length: number;

	constructor(private router: Router,
              private route: ActivatedRoute,
              private dataService: LevelService) {}

	ngOnInit() {
    /*
    this.route.params
      .switchMap((params: Params) => this.dataService.setCurrentLevel(+params['id']))
      .subscribe((level: Level) => this.level = level);
    */
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .switchMap((event: NavigationEnd) => this.dataService.setCurrentLevel(+event.url.split("/")[2]))
      .subscribe((level: Level) => this.level = level);

    this.levels = this.dataService.getTitles();
    this.length = this.levels.length;
	}

}
