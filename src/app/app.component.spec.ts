import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestService } from './services/test.service';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    const testServiceStub = () => ({ add: (number, number1) => ({}) });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [AppComponent],
      providers: [{ provide: TestService, useFactory: testServiceStub }]
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`title has default value`, () => {
    expect(component.title).toEqual(`demo1`);
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'test').and.callThrough();
      component.ngOnInit();
      expect(component.test).toHaveBeenCalled();
    });
  });

  describe('test', () => {
    it('makes expected calls', () => {
      const testServiceStub: TestService = fixture.debugElement.injector.get(
        TestService
      );
      spyOn(testServiceStub, 'add').and.callThrough();
      component.test();
      expect(testServiceStub.add).toHaveBeenCalled();
    });
  });
});
