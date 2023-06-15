import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateUpdateComponent } from './private-update.component';

describe('PrivateUpdateComponent', () => {
  let component: PrivateUpdateComponent;
  let fixture: ComponentFixture<PrivateUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
