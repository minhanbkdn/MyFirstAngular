import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './app/heroes/heroes.component';

import {FormsModule} from '@angular/forms';
import { BadboysComponent } from './app/badboys/badboys.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    BadboysComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
