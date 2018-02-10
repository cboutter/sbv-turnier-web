import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TurnierComponent} from './turnier.component';

describe('TurnierComponent', () => {
  let component: TurnierComponent;
  let fixture: ComponentFixture<TurnierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TurnierComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
