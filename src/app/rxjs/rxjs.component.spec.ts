import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RxjsComponent } from './rxjs.component';

describe('RxjsComponent', () => {
  let component: RxjsComponent;
  let fixture: ComponentFixture<RxjsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [RxjsComponent]
    });
    fixture = TestBed.createComponent(RxjsComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`a has default value`, () => {
    expect(component.a).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it(`mapArray has default value`, () => {
    expect(component.mapArray).toEqual([]);
  });

  it(`filterArr has default value`, () => {
    expect(component.filterArr).toEqual([]);
  });

  it(`debouncer has default value`, () => {
    expect(component.debouncer).toEqual([]);
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'debounceTimer').and.callThrough();
      component.ngOnInit();
      expect(component.debounceTimer).toHaveBeenCalled();
    });
  });
});
