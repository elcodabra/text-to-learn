import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { LevelComponent } from './level/level.component';
import { SuccessResultComponent } from './success-result/success-result.component';
import { LevelService } from "./level/service/level.service";
import { ReversePipe } from './shared/reverse.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    LevelComponent,
    SuccessResultComponent,
    ReversePipe
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers: [LevelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
