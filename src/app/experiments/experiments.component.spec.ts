import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ExperimentsComponent } from './experiments.component';

describe('ExperimentsComponent', () => {
  let component: ExperimentsComponent;
  let fixture: ComponentFixture<ExperimentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ExperimentsComponent]
    });
    fixture = TestBed.createComponent(ExperimentsComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`isNeeded has default value`, () => {
    expect(component.isNeeded).toEqual(true);
  });

  // it(`users has default value`, () => {
  //   expect(component.users).toEqual([]);
  // });
});
