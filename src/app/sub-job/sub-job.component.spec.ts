import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubJobComponent } from './sub-job.component';

describe('SubJobComponent', () => {
  let component: SubJobComponent;
  let fixture: ComponentFixture<SubJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
