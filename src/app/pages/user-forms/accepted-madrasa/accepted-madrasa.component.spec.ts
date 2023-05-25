import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedMadrasaComponent } from './accepted-madrasa.component';

describe('AcceptedMadrasaComponent', () => {
  let component: AcceptedMadrasaComponent;
  let fixture: ComponentFixture<AcceptedMadrasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptedMadrasaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptedMadrasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
