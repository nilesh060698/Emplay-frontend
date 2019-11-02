import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualReposComponent } from './individual-repos.component';

describe('IndividualReposComponent', () => {
  let component: IndividualReposComponent;
  let fixture: ComponentFixture<IndividualReposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualReposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
