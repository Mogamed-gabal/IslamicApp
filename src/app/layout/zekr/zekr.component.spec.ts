import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZekrComponent } from './zekr.component';

describe('ZekrComponent', () => {
  let component: ZekrComponent;
  let fixture: ComponentFixture<ZekrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZekrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZekrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
