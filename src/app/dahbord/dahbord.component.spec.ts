import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DahbordComponent } from './dahbord.component';

describe('DahbordComponent', () => {
  let component: DahbordComponent;
  let fixture: ComponentFixture<DahbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DahbordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DahbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
