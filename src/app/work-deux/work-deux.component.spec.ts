import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkDeuxComponent } from './work-deux.component';

describe('WorkDeuxComponent', () => {
  let component: WorkDeuxComponent;
  let fixture: ComponentFixture<WorkDeuxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkDeuxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkDeuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
