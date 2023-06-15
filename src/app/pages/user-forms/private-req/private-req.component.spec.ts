import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateReqComponent } from './private-req.component';

describe('PrivateReqComponent', () => {
  let component: PrivateReqComponent;
  let fixture: ComponentFixture<PrivateReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateReqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivateReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
