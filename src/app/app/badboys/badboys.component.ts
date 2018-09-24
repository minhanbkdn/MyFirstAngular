import { Component, OnInit } from '@angular/core';
import {Badboy} from '../entity/badboy';
@Component({
  selector: 'app-badboys',
  templateUrl: './badboys.component.html',
  styleUrls: ['./badboys.component.css']
})
export class BadboysComponent implements OnInit {

  badboy: Badboy;
  constructor() {
  this.badboy = new Badboy();
  	this.badboy.name = 'Thanos';
  	this.badboy.id = 101;
  	this.badboy.skills = ['Infinity Stones','The Mad Titan']; }

  ngOnInit() {
  }

}
