import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListHeroComponent} from './app/list-hero/list-hero.component';
import {HeroesComponent} from './app/heroes/heroes.component';
import {DashboardComponent} from './app/dashboard/dashboard.component';
import {ListBadboyComponent} from './app/list-badboy/list-badboy.component';
import {BadboysComponent} from './app/badboys/badboys.component';


const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'heroes', component: ListHeroComponent},
  {path: 'heroes/:id', component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'badboy', component: ListBadboyComponent},
  {path: 'badboy/:id', component: BadboysComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
