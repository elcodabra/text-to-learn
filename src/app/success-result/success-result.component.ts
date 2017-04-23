import { Component, OnInit } from '@angular/core';
import { LevelService } from '../level/service/level.service';

@Component({
  selector: 'app-success-result',
  templateUrl: './success-result.component.html',
  styleUrls: ['./success-result.component.scss']
})
export class SuccessResultComponent implements OnInit {

  timerStop: boolean = true;
  levelList: any[] = [];

  constructor(private dataService: LevelService) { }

  ngOnInit() {
    for(let i = 1; i < this.dataService.getCount(); i++) {
      this.levelList.push(i);
    }
  }

}
