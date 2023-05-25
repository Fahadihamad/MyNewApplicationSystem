import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MadrasaDetailsComponent } from './madrasa-details.component';

describe('MadrasaDetailsComponent', () => {
  let component: MadrasaDetailsComponent;
  let fixture: ComponentFixture<MadrasaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MadrasaDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MadrasaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
