import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { LevelComponent } from './level/level.component';
import { TimerComponent } from './timer/timer.component';
import { SuccessResultComponent } from './success-result/success-result.component';
import { LevelService } from './level/service/level.service';
import { SentencesService } from './shared/service/sentences.service';
import { ReversePipe } from './shared/pipe/reverse.pipe';
import { RandomPipe } from './shared/pipe/random.pipe';
import { WelcomeComponent } from './welcome/welcome.component';
import { Level0Component } from './level/items/0/item.0.component';
import { Level1Component } from './level/items/1/item.1.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    LevelComponent,
    TimerComponent,
    SuccessResultComponent,
    ReversePipe,
    RandomPipe,
    WelcomeComponent,
    Level0Component,
    Level1Component
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers: [LevelService, SentencesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
