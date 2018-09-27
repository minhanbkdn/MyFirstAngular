import {Component, Input, OnInit} from '@angular/core';
import {Badboy} from '../entity/badboy';
@Component({
  selector: 'app-badboys',
  templateUrl: './badboys.component.html',
  styleUrls: ['./badboys.component.css']
})
export class BadboysComponent implements OnInit {

  @Input() badboy: Badboy;
  constructor() {}

  ngOnInit() {
  }

}
