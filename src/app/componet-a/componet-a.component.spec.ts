import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponetAComponent } from './componet-a.component';

describe('ComponetAComponent', () => {
  let component: ComponetAComponent;
  let fixture: ComponentFixture<ComponetAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponetAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponetAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
