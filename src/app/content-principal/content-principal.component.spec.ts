import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPrincipalComponent } from './content-principal.component';

describe('ContentPrincipalComponent', () => {
  let component: ContentPrincipalComponent;
  let fixture: ComponentFixture<ContentPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentPrincipalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
