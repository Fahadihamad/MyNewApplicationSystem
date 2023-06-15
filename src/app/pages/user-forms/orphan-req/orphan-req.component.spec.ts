import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrphanReqComponent } from './orphan-req.component';

describe('OrphanReqComponent', () => {
  let component: OrphanReqComponent;
  let fixture: ComponentFixture<OrphanReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrphanReqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrphanReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
