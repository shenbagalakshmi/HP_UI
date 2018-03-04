import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftAsideDisplayComponent } from './left-aside-display.component';

describe('LeftAsideDisplayComponent', () => {
  let component: LeftAsideDisplayComponent;
  let fixture: ComponentFixture<LeftAsideDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftAsideDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftAsideDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
