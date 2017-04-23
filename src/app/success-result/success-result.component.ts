import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-result',
  templateUrl: './success-result.component.html',
  styleUrls: ['./success-result.component.scss']
})
export class SuccessResultComponent implements OnInit {

  private finish: boolean = true;
  private levelList: any[] = ['1','2','3','4','5'];

  constructor() { }

  ngOnInit() {
  }

}
