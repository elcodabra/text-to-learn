import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SentencesService } from '../shared/service/sentences.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ttl: string = 'Input your text';
  inputText: string;

  constructor(private router: Router, private sentencesService: SentencesService) { }

  ngOnInit() {}

  startLevels() {
    this.sentencesService.setSentences(this.inputText)
    this.router.navigate(['level/', 0])
  }
}
