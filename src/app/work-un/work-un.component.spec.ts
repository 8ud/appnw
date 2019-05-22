import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkUnComponent } from './work-un.component';

describe('WorkUnComponent', () => {
  let component: WorkUnComponent;
  let fixture: ComponentFixture<WorkUnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkUnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkUnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
