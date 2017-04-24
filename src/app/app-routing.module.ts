import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LevelComponent } from './level/level.component';
import { SuccessResultComponent } from './success-result/success-result.component';
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { WelcomeComponent } from "./welcome/welcome.component";

const routes: Routes = [
  { path: 'level', redirectTo: 'level/0', pathMatch: 'full' },
  { path: 'level/:id', component: LevelComponent },
  { path: 'result', component: SuccessResultComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
