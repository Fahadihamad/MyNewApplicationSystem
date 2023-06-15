import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedOrphanComponent } from './rejected-orphan.component';

describe('RejectedOrphanComponent', () => {
  let component: RejectedOrphanComponent;
  let fixture: ComponentFixture<RejectedOrphanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectedOrphanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejectedOrphanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
