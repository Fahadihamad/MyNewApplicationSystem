import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorSignComponent } from './sponsor-sign.component';

describe('SponsorSignComponent', () => {
  let component: SponsorSignComponent;
  let fixture: ComponentFixture<SponsorSignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SponsorSignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SponsorSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
