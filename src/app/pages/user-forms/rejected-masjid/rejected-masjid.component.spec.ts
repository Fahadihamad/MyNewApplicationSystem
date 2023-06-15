import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedMasjidComponent } from './rejected-masjid.component';

describe('RejectedMasjidComponent', () => {
  let component: RejectedMasjidComponent;
  let fixture: ComponentFixture<RejectedMasjidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectedMasjidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejectedMasjidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
