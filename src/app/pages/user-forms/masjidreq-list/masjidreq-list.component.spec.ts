import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasjidreqListComponent } from './masjidreq-list.component';

describe('MasjidreqListComponent', () => {
  let component: MasjidreqListComponent;
  let fixture: ComponentFixture<MasjidreqListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasjidreqListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasjidreqListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
