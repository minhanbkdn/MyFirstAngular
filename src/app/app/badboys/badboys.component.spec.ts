import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadboysComponent } from './badboys.component';

describe('BadboysComponent', () => {
  let component: BadboysComponent;
  let fixture: ComponentFixture<BadboysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadboysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadboysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
