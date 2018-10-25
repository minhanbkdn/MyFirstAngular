import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../entity/hero';
import {HeroService} from '../services/hero.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  @Input() hero: Hero;

  constructor(private heroService: HeroService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.hero = new Hero();
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.heroService.getHeroById(id).subscribe(value => this.hero = value, error1 => console.log(error1));
  }
}
