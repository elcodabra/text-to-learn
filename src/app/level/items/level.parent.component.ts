import {OnInit, Component, Input} from "@angular/core";
import {Level} from "../service/level.model";

// Parent component for level items. Items should implements this component
@Component({})
export class LevelParentComponent implements OnInit {
  @Input() level: Level;
  @Input() levels: Level[];
  @Input() length: number;
  @Input() sentences: string[];
  @Input() inputSentences: any[];
  @Input() inputTextArea: string = "";
  @Input() wordingSentences: string[] = [];
  @Input() workspaceSentences: string[] = [];
  @Input() wordMatrix: any[] = [];

  constructor() { }

  ngOnInit() {

  }
}
