import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMadrasaComponent } from './update-madrasa.component';

describe('UpdateMadrasaComponent', () => {
  let component: UpdateMadrasaComponent;
  let fixture: ComponentFixture<UpdateMadrasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMadrasaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateMadrasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
