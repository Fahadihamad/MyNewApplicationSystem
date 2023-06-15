import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrphanListComponent } from './orphan-list.component';

describe('OrphanListComponent', () => {
  let component: OrphanListComponent;
  let fixture: ComponentFixture<OrphanListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrphanListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrphanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
