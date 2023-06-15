import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateAcceptedComponent } from './private-accepted.component';

describe('PrivateAcceptedComponent', () => {
  let component: PrivateAcceptedComponent;
  let fixture: ComponentFixture<PrivateAcceptedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateAcceptedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivateAcceptedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
