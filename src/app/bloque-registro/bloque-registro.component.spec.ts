import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloqueRegistroComponent } from './bloque-registro.component';

describe('BloqueRegistroComponent', () => {
  let component: BloqueRegistroComponent;
  let fixture: ComponentFixture<BloqueRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BloqueRegistroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloqueRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
