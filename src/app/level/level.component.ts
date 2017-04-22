import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss']
})
export class LevelComponent implements OnInit {
  level: number = 0;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.level = +this.route.snapshot.params['id'];
  }

  goToSlide(level) {
    this.router.navigate(['../', level], { relativeTo: this.route })
  }

}
