import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateReqListComponent } from './private-req-list.component';

describe('PrivateReqListComponent', () => {
  let component: PrivateReqListComponent;
  let fixture: ComponentFixture<PrivateReqListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateReqListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivateReqListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
