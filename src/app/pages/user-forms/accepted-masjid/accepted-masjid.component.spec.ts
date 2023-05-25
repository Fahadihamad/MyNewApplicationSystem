import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedMasjidComponent } from './accepted-masjid.component';

describe('AcceptedMasjidComponent', () => {
  let component: AcceptedMasjidComponent;
  let fixture: ComponentFixture<AcceptedMasjidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptedMasjidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptedMasjidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
