import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TurnierDetailComponent} from './turnier-detail.component';

describe('TurnierDetailComponent', () => {
  let component: TurnierDetailComponent;
  let fixture: ComponentFixture<TurnierDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TurnierDetailComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnierDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
