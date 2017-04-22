import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() ttl: string = 'Input your text';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  startLevels() {
    this.router.navigate(['level/', 0])
  }
}
