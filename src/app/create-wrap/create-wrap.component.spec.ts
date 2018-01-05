import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWrapComponent } from './create-wrap.component';

describe('CreateWrapComponent', () => {
  let component: CreateWrapComponent;
  let fixture: ComponentFixture<CreateWrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateWrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
