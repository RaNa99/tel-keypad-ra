import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelkeygenComponent } from './telkeygen.component';

describe('TelkeygenComponent', () => {
  let component: TelkeygenComponent;
  let fixture: ComponentFixture<TelkeygenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelkeygenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelkeygenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
