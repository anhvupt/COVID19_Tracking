import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseLineComponent } from './case-line.component';

describe('CaseLineComponent', () => {
  let component: CaseLineComponent;
  let fixture: ComponentFixture<CaseLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
