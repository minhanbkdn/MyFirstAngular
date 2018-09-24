import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../entity/hero';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  @Input() hero: Hero;
  constructor() {
   }
  ngOnInit() {
  }
}
