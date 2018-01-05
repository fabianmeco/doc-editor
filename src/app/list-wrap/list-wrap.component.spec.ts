import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWrapComponent } from './list-wrap.component';

describe('ListWrapComponent', () => {
  let component: ListWrapComponent;
  let fixture: ComponentFixture<ListWrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListWrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
