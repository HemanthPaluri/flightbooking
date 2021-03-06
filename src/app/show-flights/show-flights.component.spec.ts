import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFlightsComponent } from './show-flights.component';

describe('ShowFlightsComponent', () => {
  let component: ShowFlightsComponent;
  let fixture: ComponentFixture<ShowFlightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowFlightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
