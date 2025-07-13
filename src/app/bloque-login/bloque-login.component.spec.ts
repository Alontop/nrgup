import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloqueLoginComponent } from './bloque-login.component';

describe('BloqueLoginComponent', () => {
  let component: BloqueLoginComponent;
  let fixture: ComponentFixture<BloqueLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BloqueLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloqueLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
