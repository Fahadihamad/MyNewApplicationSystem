import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrphanUpdateComponent } from './orphan-update.component';

describe('OrphanUpdateComponent', () => {
  let component: OrphanUpdateComponent;
  let fixture: ComponentFixture<OrphanUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrphanUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrphanUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
