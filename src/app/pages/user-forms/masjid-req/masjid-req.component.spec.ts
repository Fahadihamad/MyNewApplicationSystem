import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasjidReqComponent } from './masjid-req.component';

describe('MasjidReqComponent', () => {
  let component: MasjidReqComponent;
  let fixture: ComponentFixture<MasjidReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasjidReqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasjidReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
