import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnylinksComponent } from './anylinks.component';

describe('AnylinksComponent', () => {
  let component: AnylinksComponent;
  let fixture: ComponentFixture<AnylinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnylinksComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnylinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
