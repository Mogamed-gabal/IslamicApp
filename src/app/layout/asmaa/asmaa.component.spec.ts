import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzkarComponent } from './asmaa.component';

describe('AzkarComponent', () => {
  let component: AzkarComponent;
  let fixture: ComponentFixture<AzkarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AzkarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AzkarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
