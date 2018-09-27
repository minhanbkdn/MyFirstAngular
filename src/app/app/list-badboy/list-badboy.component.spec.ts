import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBadboyComponent } from './list-badboy.component';

describe('ListBadboyComponent', () => {
  let component: ListBadboyComponent;
  let fixture: ComponentFixture<ListBadboyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBadboyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBadboyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
