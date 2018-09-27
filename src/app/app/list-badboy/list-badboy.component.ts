import { Component, OnInit } from '@angular/core';
import {Badboy} from '../entity/badboy';
import {listBadboy} from '../data/badboys';

@Component({
  selector: 'app-list-badboy',
  templateUrl: './list-badboy.component.html',
  styleUrls: ['./list-badboy.component.css']
})
export class ListBadboyComponent implements OnInit {
  listBadboy: Badboy[];
  selectedBadboy: Badboy;
  constructor() {
    this.listBadboy = listBadboy;
    this.selectedBadboy = listBadboy[0];
  }

  ngOnInit() {
  }
  onSelect(badboy: Badboy) {
    this.selectedBadboy = badboy;
  }
}
