import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LevelParentComponent } from './items/level.parent.component';
import { Level0Component } from './items/0/item.0.component';
import { Level1Component } from './items/1/item.1.component';
import { Level4Component } from './items/4/item.4.component';
import { Level3Component } from './items/3/item.3.component';
import { Level2Component } from './items/2/item.2.component';


@NgModule({
  imports: [ CommonModule, FormsModule,
    RouterModule.forChild([
      { path: '', redirectTo: './0', pathMatch: 'full' },
      { path: '0', component: Level0Component },
      { path: '1', component: Level1Component },
      { path: '2', component: Level2Component },
      { path: '3', component: Level3Component },
      { path: '4', component: Level4Component },
    ])
  ],
  declarations: [
    LevelParentComponent,
    Level0Component,
    Level1Component,
    Level2Component,
    Level3Component,
    Level4Component
  ],
  exports: [ RouterModule ]
})
export class LevelModule { }
