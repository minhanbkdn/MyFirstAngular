import {Component, OnInit} from '@angular/core';
import {Hero} from '../entity/hero';
import {HeroService} from '../services/hero.service';

@Component({
  selector: 'app-list-hero',
  templateUrl: './list-hero.component.html',
  styleUrls: ['./list-hero.component.css']
})
export class ListHeroComponent implements OnInit {
  listHero: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {

  }

  ngOnInit() {
    this.heroService.getHero().subscribe(
      heroes => this.listHero = heroes,
      error => console.log(error)
    );
    this.heroService.getHeroById(3).subscribe(
      hero => this.selectedHero = hero,
      error => console.log(error)
    );
  }

  onSelect(heroInput: Hero) {
    this.heroService.getHeroById(heroInput.id).subscribe(
      hero => this.selectedHero = hero,
      error => console.log(error)
    );
  }
}
