import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWrapComponent } from './edit-wrap.component';

describe('EditWrapComponent', () => {
  let component: EditWrapComponent;
  let fixture: ComponentFixture<EditWrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditWrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
