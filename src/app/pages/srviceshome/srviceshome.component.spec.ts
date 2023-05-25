import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrviceshomeComponent } from './srviceshome.component';

describe('SrviceshomeComponent', () => {
  let component: SrviceshomeComponent;
  let fixture: ComponentFixture<SrviceshomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SrviceshomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SrviceshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
