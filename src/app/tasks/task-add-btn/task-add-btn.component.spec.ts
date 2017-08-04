import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskAddBtnComponent } from './task-add-btn.component';

describe('TaskAddBtnComponent', () => {
  let component: TaskAddBtnComponent;
  let fixture: ComponentFixture<TaskAddBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskAddBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskAddBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
