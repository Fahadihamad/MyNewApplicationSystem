import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrphansReqListComponent } from './orphans-req-list.component';

describe('OrphansReqListComponent', () => {
  let component: OrphansReqListComponent;
  let fixture: ComponentFixture<OrphansReqListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrphansReqListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrphansReqListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
