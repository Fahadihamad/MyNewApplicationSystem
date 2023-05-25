import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MadrasaReqComponent } from './madrasa-req.component';

describe('MadrasaReqComponent', () => {
  let component: MadrasaReqComponent;
  let fixture: ComponentFixture<MadrasaReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MadrasaReqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MadrasaReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
