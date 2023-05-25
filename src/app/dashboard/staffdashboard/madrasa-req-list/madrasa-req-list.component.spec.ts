import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MadrasaReqListComponent } from './madrasa-req-list.component';

describe('MadrasaReqListComponent', () => {
  let component: MadrasaReqListComponent;
  let fixture: ComponentFixture<MadrasaReqListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MadrasaReqListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MadrasaReqListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
