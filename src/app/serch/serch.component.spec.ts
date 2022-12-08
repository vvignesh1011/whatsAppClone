import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerchComponent } from './serch.component';

describe('SerchComponent', () => {
  let component: SerchComponent;
  let fixture: ComponentFixture<SerchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
