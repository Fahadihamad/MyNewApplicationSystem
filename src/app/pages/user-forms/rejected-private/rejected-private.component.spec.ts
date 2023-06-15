import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedPrivateComponent } from './rejected-private.component';

describe('RejectedPrivateComponent', () => {
  let component: RejectedPrivateComponent;
  let fixture: ComponentFixture<RejectedPrivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectedPrivateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejectedPrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
