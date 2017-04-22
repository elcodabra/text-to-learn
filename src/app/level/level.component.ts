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
  level: Level;
  length: number;
  levels: Level[];

  constructor(private route: ActivatedRoute, private dataService: LevelService) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => {
        let id = +params['id'];
        return this.dataService.getLevel(id);
      })
      .subscribe((level: Level) => this.level = level);

    this.length = this.dataService.getCount();
    this.levels = this.dataService.getTitles();
  }

}
