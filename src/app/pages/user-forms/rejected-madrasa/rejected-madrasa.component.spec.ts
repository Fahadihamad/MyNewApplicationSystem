import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedMadrasaComponent } from './rejected-madrasa.component';

describe('RejectedMadrasaComponent', () => {
  let component: RejectedMadrasaComponent;
  let fixture: ComponentFixture<RejectedMadrasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectedMadrasaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejectedMadrasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
