import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMasjidComponent } from './update-masjid.component';

describe('UpdateMasjidComponent', () => {
  let component: UpdateMasjidComponent;
  let fixture: ComponentFixture<UpdateMasjidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMasjidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateMasjidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
