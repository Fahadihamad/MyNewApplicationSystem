import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MadrasareqListComponent } from './madrasareq-list.component';

describe('MadrasareqListComponent', () => {
  let component: MadrasareqListComponent;
  let fixture: ComponentFixture<MadrasareqListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MadrasareqListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MadrasareqListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
