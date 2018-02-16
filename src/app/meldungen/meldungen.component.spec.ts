import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MeldungenComponent} from './meldungen.component';

describe('MeldungenComponent', () => {
  let component: MeldungenComponent;
  let fixture: ComponentFixture<MeldungenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MeldungenComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeldungenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
