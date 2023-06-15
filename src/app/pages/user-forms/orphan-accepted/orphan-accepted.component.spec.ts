import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrphanAcceptedComponent } from './orphan-accepted.component';

describe('OrphanAcceptedComponent', () => {
  let component: OrphanAcceptedComponent;
  let fixture: ComponentFixture<OrphanAcceptedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrphanAcceptedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrphanAcceptedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
