import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegexValidationsComponent } from './regex-validations.component';

describe('RegexValidationsComponent', () => {
  let component: RegexValidationsComponent;
  let fixture: ComponentFixture<RegexValidationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegexValidationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegexValidationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
